import React from "react"
import { Box, Grid, Typography, Link as MuiLink } from "@mui/material"
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
        }}
      >
        <Grid container spacing={3}>
          {tags.map((tag) => (
            <Grid item xs={6} key={tag.fieldValue}>
              <Box
                component="li"
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
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default TagsList
