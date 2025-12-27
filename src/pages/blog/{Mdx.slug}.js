import React from "react"
import { graphql, Link as GatsbyLink } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../../components/layout"
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image"
import Seo from "../../components/seo"
import { Box, Typography, Link as MuiLink } from "@mui/material"
import ArrowBack from "@mui/icons-material/ArrowBack"
import ArrowForward from "@mui/icons-material/ArrowForward"
import LocalOffer from "@mui/icons-material/LocalOffer"
import FolderOpen from "@mui/icons-material/FolderOpen"
import AccessTime from "@mui/icons-material/AccessTime"
import CalendarToday from "@mui/icons-material/CalendarToday"
import { kebabCase } from "lodash"
import SharedButtons from "../../components/shared_buttons"

const BlogPostPage = ({ data }) => {
  const post = data.mdx
  const edge = data.allMdx.edges.find((edge) => edge.node.id === post.id)
  const image = getImage(post.frontmatter.image)
  const seoImage = getSrc(post.frontmatter.image)

  const title = `Read ${post.frontmatter.title} `
  const tags = post.frontmatter.tags
  const url = `https://gabijack.com/blog/${post.slug}`
  const twitterHandle = "alluneediscode"

  return (
    <Layout>
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Box component="article" sx={{ flex: 1 }}>
          <Seo
            title={post.frontmatter.title}
            description={post.frontmatter.description}
            image={seoImage}
            imageAlt={post.frontmatter.imageAlt}
          />
          <Typography variant="h1" component="h1" sx={{ fontWeight: 600, color: "primary.main", mb: 2, fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" } }}>
            {post.frontmatter.title}
          </Typography>
          <Box sx={{ textAlign: "justify" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 0.5,
                marginBottom: "3rem",
              }}
            >
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
                  post.timeToRead === 1 ? "minute read" : "minutes read"
                }`}</Box>
              </Typography>
              <Typography component="small">
                <Box component="span" sx={{ display: "flex", alignItems: "center", gap: 1, flexWrap: "wrap" }}>
                  {post.frontmatter.categories.map((category, idx) => (
                    <MuiLink
                      component={GatsbyLink}
                      to={`/categories/${kebabCase(category)}/`}
                      key={`${category}-${idx}`}
                      sx={{
                        color: "primary.main",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 0.5,
                        "&:hover": {
                          color: "warning.main",
                        },
                      }}
                    >
                      <FolderOpen fontSize="small" />
                      <Box component="span">{category}</Box>
                    </MuiLink>
                  ))}
                </Box>
              </Typography>
              <Typography component="small">
                <Box component="span" sx={{ display: "flex", alignItems: "center", gap: 1, flexWrap: "wrap" }}>
                  {post.frontmatter.tags.map((tag, idx) => (
                    <MuiLink
                      component={GatsbyLink}
                      to={`/tags/${kebabCase(tag)}/`}
                      key={`${tag}-${idx}`}
                      sx={{
                        color: "primary.main",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 0.5,
                        "&:hover": {
                          color: "warning.main",
                        },
                      }}
                    >
                      <LocalOffer fontSize="small" />
                      <Box component="span">{tag}</Box>
                    </MuiLink>
                  ))}
                </Box>
              </Typography>
            </Box>
            {image && (
              <GatsbyImage image={image} alt={post.frontmatter.imageAlt} />
            )}
            <MDXRenderer>{post.body}</MDXRenderer>
          </Box>
        </Box>
        <Box sx={{ my: "2rem" }}>
          <SharedButtons
            title={title}
            url={url}
            twitterHandle={twitterHandle}
            tags={tags}
          />
        </Box>
        <Box>
          <Box sx={{ display: "flex" }}>
            {edge.previous && (
              <MuiLink
                component={GatsbyLink}
                to={`/blog/${edge.previous.slug}`}
                sx={{
                  textAlign: "left",
                  color: "primary.main",
                  fontWeight: "bold",
                  textDecoration: "none",
                  "&:hover": {
                    color: "warning.main",
                  },
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <ArrowBack fontSize="large" />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      mx: "1rem",
                    }}
                  >
                    <Box>Previous</Box>
                    <Box>{`${edge.previous.frontmatter.title}`}</Box>
                  </Box>
                </Box>
              </MuiLink>
            )}
            <Box sx={{ mx: "auto" }} />
            {edge.next && (
              <MuiLink
                component={GatsbyLink}
                to={`/blog/${edge.next.slug}`}
                sx={{
                  textAlign: "right",
                  color: "primary.main",
                  fontWeight: "bold",
                  textDecoration: "none",
                  "&:hover": {
                    color: "warning.main",
                  },
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      mx: "1rem",
                    }}
                  >
                    <Box>Next</Box>
                    <Box>{`${edge.next.frontmatter.title}`}</Box>
                  </Box>
                  <ArrowForward fontSize="large" />
                </Box>
              </MuiLink>
            )}
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

export const query = graphql`
  query BlogPostById($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        tags
        categories
        date(formatString: "MMMM DD, YYYY")
        image {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
        imageAlt
      }
      id
      body
      timeToRead
      slug
    }
    allMdx(sort: { fields: frontmatter___date, order: ASC }) {
      edges {
        next {
          slug
          frontmatter {
            title
          }
          id
        }
        previous {
          frontmatter {
            title
          }
          slug
        }
        node {
          id
          frontmatter {
            title
          }
          slug
        }
      }
    }
  }
`

export default BlogPostPage
