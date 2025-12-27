import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql, Link as GatsbyLink } from "gatsby"
import { Box, Typography, Link as MuiLink } from "@mui/material"
import TagsList from "../components/tags_list"
import CategoriesList from "../components/categories_list"
import CalendarToday from "@mui/icons-material/CalendarToday"
import AccessTime from "@mui/icons-material/AccessTime"
import ArrowBack from "@mui/icons-material/ArrowBack"
import ArrowForward from "@mui/icons-material/ArrowForward"
import LogsBadge from "../images/log-management-fundamentals.png"

const Blog = ({ pageContext, data }) => {
  const posts = data.allMdx.nodes
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/blog" : `/blog/${currentPage - 1}`
  const nextPage = `/blog/${currentPage + 1}`

  return (
    <Layout>
      <Seo title={"Blog"} />
      <Box
        component="main"
        sx={{
          display: "grid",
          gridGap: 4,
          gridTemplateColumns: { xs: "auto", sm: "1fr 256px" },
        }}
      >
        <Box sx={{ textAlign: "justify" }}>
          <Typography variant="h2" component="h2" sx={{ px: 3, fontWeight: 600, color: "primary.main" }}>
            Recent posts
          </Typography>
          <Box
            component="ul"
            sx={{
              listStyle: "none",
              m: 0,
              px: 3,
              py: 4,
            }}
          >
            {posts.map((post) => (
              <Box
                component="li"
                key={post.id}
                sx={{
                  mb: 4,
                }}
              >
                <Typography
                  variant="h3"
                  component="h3"
                  sx={{
                    m: 0,
                    fontWeight: 600,
                  }}
                >
                  <MuiLink
                    component={GatsbyLink}
                    to={`/blog/${post.slug}`}
                    sx={{
                      color: "inherit",
                      textDecoration: "none",
                      "&:hover, &:focus": {
                        color: "warning.main",
                      },
                    }}
                  >
                    {post.frontmatter.title}
                  </MuiLink>
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5, mt: 1 }}>
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 400, display: "flex", alignItems: "center", gap: 1, color: "#5a6c7d", fontSize: "0.875rem" }}
                  >
                    <CalendarToday sx={{ fontSize: "0.875rem" }} />
                    <Box component="span">{post.frontmatter.date}</Box>
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 400, display: "flex", alignItems: "center", gap: 1, color: "#5a6c7d", fontSize: "0.875rem" }}>
                    <AccessTime sx={{ fontSize: "0.875rem" }} />
                    <Box component="span">{`${post.timeToRead} ${
                      post.timeToRead === 1 ? "minute" : "minutes"
                    }`}</Box>
                  </Typography>
                </Box>
                <Typography component="p">{post.excerpt}</Typography>
              </Box>
            ))}
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", gap: 2, flexWrap: "wrap", alignItems: "center", mt: 4 }}>
            {!isFirst && (
              <MuiLink
                component={GatsbyLink}
                to={prevPage}
                rel="prev"
                sx={{
                  textDecoration: "none",
                  color: "primary.main",
                  fontWeight: "500",
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  padding: "0.5rem 1rem",
                  borderRadius: "4px",
                  transition: "all 0.2s",
                  "&:hover": {
                    color: "warning.main",
                  },
                }}
              >
                <ArrowBack fontSize="small" />
                <Box component="span">Previous</Box>
              </MuiLink>
            )}
            {numPages > 1 &&
              Array.from({ length: numPages }, (_, i) => {
                const isCurrentPage = i + 1 === currentPage;
                return (
                  <MuiLink
                    key={`pagination-number${i + 1}`}
                    component={GatsbyLink}
                    to={`/blog/${i === 0 ? "" : i + 1}`}
                    sx={{
                      textDecoration: "none",
                      color: isCurrentPage ? "#ffffff" : "primary.main",
                      backgroundColor: isCurrentPage ? "secondary.main" : "transparent",
                      border: "1px solid",
                      borderColor: isCurrentPage ? "secondary.main" : "#e0e0e0",
                      width: "2.5rem",
                      height: "2.5rem",
                      borderRadius: "4px",
                      fontWeight: "600",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.2s",
                      pointerEvents: isCurrentPage ? "none" : "auto",
                      "&:hover": isCurrentPage ? {} : {
                        borderColor: "warning.main",
                        color: "warning.main",
                      },
                    }}
                  >
                    {i + 1}
                  </MuiLink>
                );
              })}
            {!isLast && (
              <MuiLink
                component={GatsbyLink}
                to={nextPage}
                rel="next"
                sx={{
                  textDecoration: "none",
                  color: "primary.main",
                  fontWeight: "500",
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  padding: "0.5rem 1rem",
                  borderRadius: "4px",
                  transition: "all 0.2s",
                  "&:hover": {
                    color: "warning.main",
                  },
                }}
              >
                <Box component="span">Next</Box>
                <ArrowForward fontSize="small" />
              </MuiLink>
            )}
          </Box>
        </Box>
        <Box component="aside">
          <CategoriesList />
          <TagsList />
          <Box
            component="a"
            href="https://www.credly.com/badges/c654ccd6-00e5-4417-bbc2-06ef46429db4/public_url"
            sx={{ display: "block" }}
          >
            <Box
              component="img"
              src={LogsBadge}
              alt="Datadog Logs Management Badge"
              sx={{
                padding: "5px",
                marginTop: "3rem",
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { eq: false } } }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        id
        slug
        excerpt(truncate: true, pruneLength: 150)
        timeToRead
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
        }
      }
      totalCount
    }
  }
`
export default Blog
