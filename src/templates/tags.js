/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql, Link } from "gatsby"
import { Themed } from "@theme-ui/mdx"
import { Image } from "theme-ui"
import LogsBadge from "../images/log-management-fundamentals.png"
import TagsList from "../components/tags_list"
import CategoriesList from "../components/categories_list"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock, faCalendarAlt } from "@fortawesome/free-regular-svg-icons"

// Components

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges } = data.allMdx

  const pageTitle = `Tag:${tag}`

  return (
    <Layout>
      <Seo title={pageTitle} />
      <main
        sx={{
          display: "grid",
          gridGap: 4,
          gridTemplateColumns: ["auto", "1fr 256px"],
        }}
      >
        <div sx={{ textAlign: "justify" }}>
          <Themed.h2 sx={{ px: 3 }}>{`Posts tagged as ${tag}`}</Themed.h2>
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
                    to={`/blog/${node.slug}`}
                    key={node.id}
                    sx={{
                      color: "inherit",
                      textDecoration: "none",
                      ":hover,:focus": {
                        color: "#d9b310",
                      },
                    }}
                  >
                    {node.frontmatter.title}
                  </Link>
                </Themed.h3>
                <div sx={{ display: "flex", flexDirection: "column" }}>
                  <small sx={{ fontWeight: "bold" }}>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    <span sx={{ mx: "0.5rem" }}>{node.frontmatter.date}</span>
                  </small>
                  <small>
                    <FontAwesomeIcon icon={faClock} />
                    <span sx={{ mx: "0.5rem" }}>{`${node.timeToRead} ${
                      node.timeToRead === 1 ? "minute" : "minutes"
                    }`}</span>
                  </small>
                </div>
                <Themed.p>{node.excerpt}</Themed.p>
              </li>
            ))}
          </ul>
        </div>
        <aside>
          <CategoriesList />
          <TagsList />
          <a href="https://www.credly.com/badges/c654ccd6-00e5-4417-bbc2-06ef46429db4/public_url">
            <Image
            src={LogsBadge}
            alt={"Datadog Logs Management Badge"}
            sx={{
              padding: "5px",
              marginTop: "3rem",
            }}
            />
        </a>
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
      filter: { frontmatter: { draft: { eq: false }, tags: { in: [$tag] } } }
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
