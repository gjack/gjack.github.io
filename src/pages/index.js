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
          width: [200, 300, null],
          height: [200, 300, null],
          borderRadius: "50%",
          border: "1px solid lightgrey",
          padding: "5px",
          marginTop: "3rem",
        }}
      />
      <article sx={{ my: "3rem", textAlign: "justify" }}>
        <p>
          Hello and welcome! Thank you for taking the time to visit my tiny
          corner of the web! My name is Gabi Jack, and I'm a Software Engineer
          in the greater Toledo, OH area. My daily job involves writing Ruby on
          Rails and React applications, but I also enjoy dabbling in other
          programming languages, such as C++ and Python, as well as
          experimenting with other frameworks and technologies.
        </p>
        <p>
          In a previous life, before becoming a software developer, I graduated
          college with a BS in Mechanical Engineering, and worked for a few
          years doing design and optimization of thermal energy systems.
          Perhaps, this explains why I still keep a certain fondness for Math,
          Physics and all things related to computer aided mechanical design.
        </p>
        <p>
          When I'm not working, I enjoy reading, knitting, growing roses, and
          spending time with my husband, our two boys and our little mini
          schnauzer. My hope is to make this a place to blog about all things
          that I'm learning and exploring, with an emphasis on software
          development. Hopefully, I may also manage to write something
          interesting from time to time.
        </p>
      </article>
      <hr
        sx={{
          color: "lightgrey",
          textAlign: "center",
          width: "90%",
          border: "none",
          borderTop: "3px double lightgrey",
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
      <Grid
        gap={4}
        columns={[1, null, 3]}
        repeat={"fit"}
        sx={{ marginBottom: 5 }}
      >
        {posts.map((post, index) => (
          <Box
            key={`post-${post.slug}-${index}`}
            sx={{
              textAlign: "justify",
              padding: "1.25rem",
              backgroundColor: "rgba(243, 244, 246, 0.9)",
              borderRadius: "5%",
              boxShadow: "0px 9px 9px 1px rgb(0 0 70 / 20%)",
            }}
          >
            <Link to={`/blog/${post.slug}`} key={post.slug}>
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
