import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql, Link as GatsbyLink } from "gatsby"
import { Box, Card, CardContent, Link as MuiLink, Typography } from "@mui/material"
import GJack from "../images/gabijackpic.png"

// markup
const IndexPage = ({ data }) => {
  const posts = data.allMdx.nodes

  return (
    <Layout>
      <Seo title={"Home Page"} />
      <Box
        component="img"
        src={GJack}
        alt="Gabi Jack"
        sx={{
          width: { xs: 200, sm: 300 },
          height: { xs: 200, sm: 300 },
          borderRadius: "50%",
          border: "1px solid",
          borderColor: "primary.main",
          padding: "5px",
          marginTop: "3rem",
        }}
      />
      <Box component="article" sx={{ my: "3rem", textAlign: "justify" }}>
        <Typography component="p" sx={{ mb: 2 }}>
          Hello and welcome! Thank you for taking the time to visit my tiny
          corner of the web! My name is Gabi Jack, and I'm a Software Engineer
          in the greater Toledo, OH area. My daily job involves writing Ruby on
          Rails and React applications, but I also enjoy dabbling in other
          programming languages, such as C++ and Python, as well as
          experimenting with other frameworks and technologies.
        </Typography>
        <Typography component="p" sx={{ mb: 2 }}>
          In a previous life, before becoming a software developer, I graduated
          college with a BS in Mechanical Engineering, and worked for a few
          years doing design and optimization of thermal energy systems.
          Perhaps, this explains why I still keep a certain fondness for Math,
          Physics and all things related to computer aided mechanical design.
        </Typography>
        <Typography component="p" sx={{ mb: 2 }}>
          When I'm not working, I enjoy reading, knitting, growing roses, and
          spending time with my husband, our two boys and our little mini
          schnauzer. My hope is to make this a place to blog about all things
          that I'm learning and exploring, with an emphasis on software
          development. Hopefully, I may also manage to write something
          interesting from time to time.
        </Typography>
      </Box>
      <Typography variant="h3" component="h2" sx={{ mb: 4, mt: 6, fontWeight: 600, color: 'primary.main' }}>
        Most recent posts
      </Typography>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: 4, marginBottom: 5 }}>
        {posts.map((post, index) => (
          <Card
            key={`post-${post.slug}-${index}`}
            sx={{
              textAlign: "left",
              backgroundColor: "#f0f7fb",
              borderTop: "3px solid",
              borderTopColor: "secondary.main",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(50, 140, 193, 0.08)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "all 0.3s ease",
              "&:hover": {
                boxShadow: "0 4px 16px rgba(50, 140, 193, 0.15)",
                transform: "translateY(-2px)",
                backgroundColor: "#ffffff",
              },
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                component="h3"
                sx={{ fontWeight: 600, mb: 2, color: "primary.main", lineHeight: 1.3 }}
              >
                {post.frontmatter.title}
              </Typography>
              <Typography component="div" sx={{ mb: 2, color: "text.primary", lineHeight: 1.6 }}>
                {post.excerpt}
              </Typography>
              <MuiLink
                component={GatsbyLink}
                to={`/blog/${post.slug}`}
                sx={{
                  textAlign: "right",
                  textDecoration: "none",
                  color: "secondary.main",
                  display: "block",
                  fontWeight: "600",
                  "&:hover": {
                    color: "warning.main",
                  },
                }}
              >
                Continue reading →
              </MuiLink>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    allMdx(
      limit: 2
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { eq: false } } }
    ) {
      nodes {
        id
        slug
        excerpt
        frontmatter {
          title
        }
      }
    }
  }
`

export default IndexPage
