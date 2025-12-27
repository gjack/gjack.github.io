import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql, Link as GatsbyLink } from "gatsby"
import { Box, Typography, Link as MuiLink } from "@mui/material"
import LogsBadge from "../images/log-management-fundamentals.png"
import CategoriesList from "../components/categories_list"
import TagsList from "../components/tags_list"
import AccessTime from "@mui/icons-material/AccessTime"
import CalendarToday from "@mui/icons-material/CalendarToday"

// Components

const Categories = ({ pageContext, data }) => {
  const { category } = pageContext
  const { edges } = data.allMdx

  const pageTitle = `Category:${category}`

  return (
    <Layout>
      <Seo title={pageTitle} />
      <Box
        component="main"
        sx={{
          display: "grid",
          gridGap: 4,
          gridTemplateColumns: { xs: "auto", sm: "1fr 256px" },
        }}
      >
        <Box sx={{ textAlign: "justify" }}>
          <Typography variant="h2" component="h2" sx={{ px: 3 }}>
            {`Posts in category ${category}`}
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
            {edges.map(({ node }) => (
              <Box
                component="li"
                key={node.id}
                sx={{
                  mb: 4,
                }}
              >
                <Typography
                  variant="h3"
                  component="h3"
                  sx={{
                    m: 0,
                  }}
                >
                  <MuiLink
                    component={GatsbyLink}
                    to={`/blog/${node.slug}`}
                    sx={{
                      color: "inherit",
                      textDecoration: "none",
                      "&:hover, &:focus": {
                        color: "warning.main",
                      },
                    }}
                  >
                    {node.frontmatter.title}
                  </MuiLink>
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    component="small"
                    sx={{ fontWeight: "bold", display: "flex", alignItems: "center", gap: 1 }}
                  >
                    <CalendarToday fontSize="small" />
                    <Box component="span">{node.frontmatter.date}</Box>
                  </Typography>
                  <Typography component="small" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <AccessTime fontSize="small" />
                    <Box component="span">{`${node.timeToRead} ${
                      node.timeToRead === 1 ? "minute" : "minutes"
                    }`}</Box>
                  </Typography>
                </Box>
                <Typography component="p">{node.excerpt}</Typography>
              </Box>
            ))}
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

export default Categories

export const pageQuery = graphql`
  query ($category: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { draft: { eq: false }, categories: { in: [$category] } }
      }
    ) {
      totalCount
      edges {
        node {
          id
          slug
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          timeToRead
          excerpt(truncate: true, pruneLength: 150)
        }
      }
    }
  }
`
