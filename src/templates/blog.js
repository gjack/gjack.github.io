/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql, Link } from "gatsby"
import { Themed } from "@theme-ui/mdx"
import { Image } from "theme-ui"
import TagsList from "../components/tags_list"
import CategoriesList from "../components/categories_list"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock, faCalendarAlt } from "@fortawesome/free-regular-svg-icons"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import LogsBadge from "../images/log-management-fundamentals.png"

const Blog = ({ pageContext, data }) => {
  const posts = data.allMdx.nodes
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/blog" : `/blog/${currentPage - 1}`
  const nextPage = `/blog/${currentPage + 1}`

  return (
    <Layout>
      <Seo title={"Blog"} />
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
                        color: "#d9b310",
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
          <div sx={{ display: "flex", flexDirection: "row" }}>
            {!isFirst && (
              <Link
                to={prevPage}
                rel="prev"
                sx={{
                  textAlign: "left",
                  color: "#0b3c5d",
                  fontWeight: "bold",
                  textDecoration: "none",
                  ":visited": {
                    color: "#0b3c5d",
                  },
                  ":hover": {
                    color: "#d9b310",
                  },
                }}
              >
                <FontAwesomeIcon icon={faArrowLeft} size={"lg"} />
                <span sx={{ mx: "0.5rem" }}>Previous Page</span>
              </Link>
            )}
            {numPages > 1 &&
              Array.from({ length: numPages }, (_, i) => (
                <Link
                  key={`pagination-number${i + 1}`}
                  to={`/blog/${i === 0 ? "" : i + 1}`}
                  sx={{
                    textDecoration: "none",
                    color: "#0b3c5d",
                    ":visited": {
                      color: "#0b3c5d",
                    },
                    ":hover": {
                      color: "#d9b310",
                    },
                  }}
                >
                  <div
                    sx={{
                      textAlign: "center",
                      width: "2rem",
                      height: "2rem",
                      fontWeight: "bold",
                    }}
                  >
                    {i + 1}
                  </div>
                </Link>
              ))}
            {!isLast && (
              <Link
                to={nextPage}
                rel="next"
                sx={{
                  textAlign: "right",
                  color: "#0b3c5d",
                  fontWeight: "bold",
                  textDecoration: "none",
                  ":visited": {
                    color: "#0b3c5d",
                  },
                  ":hover": {
                    color: "#d9b310",
                  },
                }}
              >
                <span sx={{ mx: "0.5rem" }}>Next Page</span>
                <FontAwesomeIcon icon={faArrowRight} size={"lg"} />
              </Link>
            )}
          </div>
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

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { eq: false } } }
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
