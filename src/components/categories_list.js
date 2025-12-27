import React from "react"
import { Box, Grid, Typography, Link as MuiLink } from "@mui/material"
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby"
import { kebabCase } from "lodash"
import FolderOpen from "@mui/icons-material/FolderOpen"

const CategoriesList = () => {
  const { allMdx } = useStaticQuery(graphql`
    {
      allMdx {
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
        backgroundColor: "secondary.main",
        p: "1rem",
        borderRadius: "0.5rem",
        my: "2rem",
      }}
    >
      <Typography variant="h6" component="h3" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <FolderOpen fontSize="large" />
        Categories
      </Typography>
      <Box
        component="ul"
        sx={{
          listStyle: "none",
          m: 0,
          px: 2,
          py: 3,
        }}
      >
        <Grid container spacing={3}>
          {categories.map((category) => (
            <Grid item xs={6} key={category.fieldValue}>
              <Box
                component="li"
                sx={{
                  textAlign: "center",
                  padding: "0",
                }}
              >
                <MuiLink
                  component={GatsbyLink}
                  to={`/categories/${kebabCase(category.fieldValue)}/`}
                  sx={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    color: "text.primary",
                    "&:visited": { color: "text.primary" },
                    "&:hover": { color: "warning.main" },
                  }}
                >
                  {category.fieldValue}
                </MuiLink>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default CategoriesList
