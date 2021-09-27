import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

// markup
const IndexPage = ({data}) => {
  const posts = data.allMdx.nodes
  
  return (
    <Layout>
      <SEO title = {"Home Page"} />
      <StaticImage src={"../images/banner-blocks.jpg"} alt={"A banner"} layout={"fullWidth"} aspectRatio={12/2}/>
      {posts.map((post) => {
        return (
          <Link to={post.slug} key={post.slug}>
            <h2>{post.frontmatter.title}</h2>
          </Link>
        )
      })}
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    allMdx(sort: {fields: [frontmatter___title], order: ASC}) {
      nodes {
        slug
        frontmatter {
          title
        }
      }
    }
  }
`

export default IndexPage
