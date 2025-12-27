import React from "react"
import { Box, Typography, Link as MuiLink } from "@mui/material"
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby"
import { kebabCase } from "lodash"
import FolderOpen from "@mui/icons-material/FolderOpen"

const CategoriesList = () => {
  const { allMdx } = useStaticQuery(graphql`
    {
      allMdx(filter: { frontmatter: { draft: { eq: false } } }) {
        group(field: frontmatter___categories) {
          totalCount
          fieldValue
        }
      }
    }
  `)
  const categories = allMdx.group

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
        <FolderOpen fontSize="medium" />
        Categories
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
        {categories.map((category) => (
          <Box
            component="li"
            key={category.fieldValue}
            sx={{
              padding: "0",
            }}
          >
            <MuiLink
              component={GatsbyLink}
              to={`/categories/${kebabCase(category.fieldValue)}/`}
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
              <FolderOpen sx={{ fontSize: "1rem" }} />
              {category.fieldValue}
            </MuiLink>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default CategoriesList
