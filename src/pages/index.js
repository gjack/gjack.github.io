/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import { Box, Image, Grid } from "theme-ui"
import GJack from "../images/gabijackpic.png"

// markup
const IndexPage = ({ data }) => {
  const posts = data.allMdx.nodes

  return (
    <Layout>
      <SEO title={"Home Page"} />
      <Image
        src={GJack}
        alt={"Gabi Jack"}
        sx={{
          width: 200,
          height: 200,
          borderRadius: "50%",
          border: "1px solid lightgrey",
          padding: "5px",
          marginTop: "3rem",
        }}
      />
      <hr
        sx={{
          color: "lightgrey",
          textAlign: "center",
          width: "90%",
          border: "none",
          borderTop: "3px double lightgrey",
          color: "lightgrey",
          overflow: "visible",
          height: "5px",
          my: 5,
          ":after": {
            background: "#fff",
            content: '"\\270E"',
            padding: "0 4px",
            position: "relative",
            top: "-13px",
          },
        }}
      />
      <h3>Most recent posts</h3>
      <Grid gap={4} width={"3rem"} repeat={"fit"} sx={{ marginBottom: 5 }}>
        {posts.map((post) => (
          <Box sx={{ textAlign: "justify" }}>
            <Link to={post.slug} key={post.slug}>
              <h3>{post.frontmatter.title}</h3>
              <div>{post.excerpt}</div>
            </Link>
          </Box>
        ))}
      </Grid>
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    allMdx(limit: 3, sort: { fields: [frontmatter___date], order: DESC }) {
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
