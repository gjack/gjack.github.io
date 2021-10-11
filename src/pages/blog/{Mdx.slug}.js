/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../../components/layout"
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image"
import SEO from "../../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faArrowLeft,
  faArrowRight,
  faTag,
} from "@fortawesome/free-solid-svg-icons"
import { faClock, faCalendarAlt } from "@fortawesome/free-regular-svg-icons"
import { kebabCase } from "lodash"

const BlogPostPage = ({ data }) => {
  const post = data.mdx
  const edge = data.allMdx.edges.find((edge) => edge.node.id === post.id)

  const image = getImage(post.frontmatter.image)
  const seoImage = getSrc(post.frontmatter.image)

  return (
    <Layout>
      <div
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <article sx={{ flex: 1 }}>
          <SEO
            title={post.frontmatter.title}
            description={post.frontmatter.description}
            image={seoImage}
            imageAlt={post.frontmatter.imageAlt}
          />
          <h1>{post.frontmatter.title}</h1>
          <div sx={{ textAlign: "justify" }}>
            <div
              sx={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "3rem",
              }}
            >
              <small sx={{ fontWeight: "bold" }}>
                <FontAwesomeIcon icon={faCalendarAlt} />
                <span sx={{ mx: "0.5rem" }}>{post.frontmatter.date}</span>
              </small>
              <small>
                <FontAwesomeIcon icon={faClock} />
                <span sx={{ mx: "0.5rem" }}>{`${post.timeToRead} ${
                  post.timeToRead === 1 ? "minute read" : "minutes read"
                }`}</span>
              </small>
              <small>
                <span>
                  {post.frontmatter.tags.map((tag, idx) => (
                    <Link to={`/tags/${kebabCase(tag)}/`} key={`${tag}-${idx}`}>
                      <FontAwesomeIcon icon={faTag} />
                      <span sx={{ mx: "0.3rem" }}>{tag}</span>
                    </Link>
                  ))}
                </span>
              </small>
            </div>
            {image && (
              <GatsbyImage image={image} alt={post.frontmatter.imageAlt} />
            )}
            <MDXRenderer>{post.body}</MDXRenderer>
          </div>
        </article>
        <div>
          <div sx={{ display: "flex" }}>
            {edge.previous && (
              <Link
                sx={{ textAlign: "left" }}
                to={`/blog/${edge.previous.slug}`}
              >
                <div sx={{ display: "flex", flexDirection: "row" }}>
                  <FontAwesomeIcon icon={faArrowLeft} size={"lg"} />
                  <div
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      mx: "1rem",
                    }}
                  >
                    <div>Previous</div>
                    <div>{`${edge.previous.frontmatter.title}`}</div>
                  </div>
                </div>
              </Link>
            )}
            <div sx={{ mx: "auto" }} />
            {edge.next && (
              <Link sx={{ textAlign: "right" }} to={`/blog/${edge.next.slug}`}>
                <div sx={{ display: "flex", flexDirection: "row" }}>
                  <div
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      mx: "1rem",
                    }}
                  >
                    <div>Next</div>
                    <div>{`${edge.next.frontmatter.title}`}</div>
                  </div>
                  <FontAwesomeIcon icon={faArrowRight} size={"lg"} />
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query BlogPostById($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        tags
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
