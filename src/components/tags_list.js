import React from "react"
import { Box, Typography, Link as MuiLink } from "@mui/material"
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby"
import { kebabCase } from "lodash"
import LocalOfferOutlined from "@mui/icons-material/LocalOfferOutlined"

const TagsList = () => {
  const { allMdx } = useStaticQuery(graphql`
    {
      allMdx(filter: { frontmatter: { draft: { eq: false } } }) {
        group(field: frontmatter___tags) {
          totalCount
          fieldValue
        }
      }
    }
  `)
  const tags = allMdx.group

  return (
    <Box
      sx={{
        backgroundColor: "#f0f7fb",
        p: "1.5rem",
        borderRadius: "8px",
        my: "2rem",
        boxShadow: "0 2px 8px rgba(50, 140, 193, 0.08)",
        borderTop: "3px solid",
        borderTopColor: "secondary.main",
      }}
    >
      <Typography variant="h6" component="h3" sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2, color: "primary.main", fontWeight: "bold" }}>
        <LocalOfferOutlined fontSize="medium" />
        Tags
      </Typography>
      <Box
        component="ul"
        sx={{
          listStyle: "none",
          m: 0,
          p: 0,
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        {tags.map((tag) => (
          <Box
            component="li"
            key={tag.fieldValue}
            sx={{
              padding: "0",
            }}
          >
            <MuiLink
              component={GatsbyLink}
              to={`/tags/${kebabCase(tag.fieldValue)}/`}
              sx={{
                textDecoration: "none",
                fontWeight: "500",
                color: "secondary.main",
                fontSize: "0.9rem",
                display: "inline-flex",
                alignItems: "center",
                gap: 0.5,
                "&:visited": { color: "secondary.main" },
                "&:hover": { color: "warning.main", textDecoration: "underline" },
              }}
            >
              <LocalOfferOutlined sx={{ fontSize: "1rem" }} />
              {tag.fieldValue}
            </MuiLink>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default TagsList
