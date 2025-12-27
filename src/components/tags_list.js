import React from "react"
import { Box, Typography, Link as MuiLink } from "@mui/material"
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby"
import { kebabCase } from "lodash"
import LocalOfferOutlined from "@mui/icons-material/LocalOfferOutlined"

const TagsList = () => {
  const { allMdx } = useStaticQuery(graphql`
    {
      allMdx {
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
        backgroundColor: "secondary.main",
        p: "1rem",
        borderRadius: "0.5rem",
        my: "2rem",
      }}
    >
      <Typography variant="h6" component="h3" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <LocalOfferOutlined fontSize="large" />
        Tags
      </Typography>
      <Box
        component="ul"
        sx={{
          listStyle: "none",
          m: 0,
          px: 2,
          py: 3,
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 3,
        }}
      >
        {tags.map((tag) => (
          <Box
            component="li"
            key={tag.fieldValue}
            sx={{
              textAlign: "center",
              padding: "0",
            }}
          >
            <MuiLink
              component={GatsbyLink}
              to={`/tags/${kebabCase(tag.fieldValue)}/`}
              sx={{
                textDecoration: "none",
                fontWeight: "bold",
                color: "text.primary",
                "&:visited": { color: "text.primary" },
                "&:hover": { color: "warning.main" },
              }}
            >
              {tag.fieldValue}
            </MuiLink>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default TagsList
