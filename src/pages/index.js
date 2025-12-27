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
      <Box
        component="hr"
        sx={{
          color: "primary.main",
          textAlign: "center",
          width: "90%",
          border: "none",
          borderTop: "3px double",
          borderColor: "primary.main",
          overflow: "visible",
          height: "5px",
          my: 5,
          "&::after": {
            background: "background.default",
            content: '"\\270E"',
            padding: "0 4px",
            position: "relative",
            top: "-13px",
          },
        }}
      />
      <Typography variant="h3" component="h3" sx={{ mb: 3 }}>
        Most recent posts
      </Typography>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: 4, marginBottom: 5 }}>
        {posts.map((post, index) => (
          <Card
            key={`post-${post.slug}-${index}`}
            sx={{
              textAlign: "left",
              backgroundColor: "secondary.main",
              borderRadius: "0.5rem",
              boxShadow: "0px 9px 9px 1px rgb(0 0 70 / 20%)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                component="h3"
                sx={{ textAlign: "center", fontWeight: "bold", mb: 2 }}
              >
                {post.frontmatter.title}
              </Typography>
              <Typography component="div" sx={{ mb: 2 }}>
                {post.excerpt}
              </Typography>
              <MuiLink
                component={GatsbyLink}
                to={`/blog/${post.slug}`}
                sx={{
                  textAlign: "right",
                  textDecoration: "none",
                  color: "text.primary",
                  display: "block",
                  "&:hover": {
                    color: "warning.main",
                  },
                }}
              >
                Continue reading
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
