import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ title, description, image, imageAlt, meta = [] }) => {
  const { site } = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            description
            title
            twitter
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const imageUrl = `${site.siteMetadata.siteUrl}${image}`

  return (
    <Helmet
      title={title}
      htmlAttributes={{ lang: "en" }}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: "description",
          content: metaDescription,
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:description",
          content: metaDescription,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "twitter:title",
          content: title,
        },
        {
          property: "twitter:creator",
          content: site.siteMetadata.twitter || "",
        },
        {
          property: "twitter:description",
          content: metaDescription,
        },
      ]
        .concat(
          image
            ? [
                {
                  name: "og:image",
                  content: imageUrl,
                },
                {
                  name: "og:image:alt",
                  content: imageAlt || title,
                },
                {
                  name: "twitter:image",
                  content: imageUrl,
                },
                {
                  name: "twitter:image:alt",
                  content: imageAlt || title,
                },
                {
                  property: "twitter:card",
                  content: "summary_large_image",
                },
              ]
            : [
                {
                  property: "twitter:card",
                  content: "summary",
                },
              ]
        )
        .concat(meta)}
    >
      <link
        rel="alternate"
        type="application/rss+xml"
        title="Gabi Jack's Blog"
        href="/rss.xml"
      />
    </Helmet>
  )
}

export default Seo
