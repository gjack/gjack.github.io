/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import { Themed } from "@theme-ui/mdx"
import TagsList from "../components/tags_list"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock, faCalendarAlt } from "@fortawesome/free-regular-svg-icons"

const Blog = ({ pageContext, data }) => {
  const posts = data.allMdx.nodes
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/blog" : `/blog/${currentPage - 1}`
  const nextPage = `/blog/${currentPage + 1}`

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
                    to={`/blog/${post.slug}`}
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
                <div sx={{ display: "flex", flexDirection: "column" }}>
                  <small sx={{ fontWeight: "bold" }}>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    <span sx={{ mx: "0.5rem" }}>{post.frontmatter.date}</span>
                  </small>
                  <small>
                    <FontAwesomeIcon icon={faClock} />
                    <span sx={{ mx: "0.5rem" }}>{`${post.timeToRead} ${
                      post.timeToRead === 1 ? "minute" : "minutes"
                    }`}</span>
                  </small>
                </div>
                <Themed.p>{post.excerpt}</Themed.p>
              </li>
            ))}
          </ul>
          {!isFirst && (
            <Link to={prevPage} rel="prev">
              ← Previous Page
            </Link>
          )}
          {numPages > 1 &&
            Array.from({ length: numPages }, (_, i) => (
              <Link
                key={`pagination-number${i + 1}`}
                to={`/blog/${i === 0 ? "" : i + 1}`}
              >
                {i + 1}
              </Link>
            ))}
          {!isLast && (
            <Link to={nextPage} rel="next">
              Next Page →
            </Link>
          )}
        </div>
        <aside>
          <TagsList />
        </aside>
      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
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
