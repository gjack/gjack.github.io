import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import { Image } from 'theme-ui'
import GJack from '../images/gabijackpic.png'

// markup
const IndexPage = ({data}) => {
  const posts = data.allMdx.nodes
  
  return (
    <Layout>
      <SEO title = {"Home Page"} />
      <Image src={GJack} alt={"Gabi Jack"} sx={{ width: 200, height: 200, borderRadius: '50%', border: "1px solid lightgrey", padding: '5px', marginTop: '3rem' }}/> 
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
