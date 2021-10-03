/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import { Themed } from "@theme-ui/mdx"

const Blog = ({ data }) => {
  const posts = data.allMdx.nodes

  return (
    <Layout>
      <SEO title={"Blog"} />
      <main
        sx={{
          display: "grid",
          gridGap: 4,
          gridTemplateColumns: ["auto", "1fr 256px"],
        }}
      >
        <div sx={{ textAlign: "justify" }}>
          <Themed.h2 sx={{ px: 3 }}>Recent posts</Themed.h2>
          <ul
            sx={{
              listStyle: "none",
              m: 0,
              px: 3,
              py: 4,
            }}
          >
            {posts.map((post) => (
              <li
                key={post.id}
                sx={{
                  mb: 4,
                }}
              >
                <Themed.h3
                  sx={{
                    m: 0,
                  }}
                >
                  <Link
                    to={post.slug}
                    key={post.id}
                    sx={{
                      color: "inherit",
                      textDecoration: "none",
                      ":hover,:focus": {
                        color: "primary",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    {post.frontmatter.title}
                  </Link>
                </Themed.h3>
                <small sx={{ fontWeight: "bold" }}>
                  {post.frontmatter.date}
                </small>
                <Themed.p>{post.excerpt}</Themed.p>
              </li>
            ))}
          </ul>
        </div>
        <aside>Aside</aside>
      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        id
        slug
        excerpt(truncate: true, pruneLength: 150)
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
        }
      }
      totalCount
    }
  }
`
export default Blog
