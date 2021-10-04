/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import { Themed } from "@theme-ui/mdx"
import TagsList from "../components/tags_list"

// Components

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMdx

  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  const pageTitle = `Category:${tag}`

  return (
    <Layout>
      <SEO title={pageTitle} />
      <main
        sx={{
          display: "grid",
          gridGap: 4,
          gridTemplateColumns: ["auto", "1fr 256px"],
        }}
      >
        <div sx={{ textAlign: "justify" }}>
          <Themed.h2 sx={{ px: 3 }}>{`Posts in category ${tag}`}</Themed.h2>
          <ul
            sx={{
              listStyle: "none",
              m: 0,
              px: 3,
              py: 4,
            }}
          >
            {edges.map(({ node }) => (
              <li
                key={node.id}
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
                    to={`/${node.slug}`}
                    key={node.id}
                    sx={{
                      color: "inherit",
                      textDecoration: "none",
                      ":hover,:focus": {
                        color: "primary",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    {node.frontmatter.title}
                  </Link>
                </Themed.h3>
                <small sx={{ fontWeight: "bold" }}>
                  {node.frontmatter.date}
                </small>
                <Themed.p>{node.excerpt}</Themed.p>
              </li>
            ))}
          </ul>
        </div>
        <aside>
          <TagsList />
        </aside>
      </main>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query ($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
          excerpt(truncate: true, pruneLength: 150)
        }
      }
    }
  }
`
