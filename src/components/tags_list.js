/** @jsx jsx */
import { jsx, Grid, Box } from "theme-ui"
import { useStaticQuery, graphql, Link } from "gatsby"
import { kebabCase } from "lodash"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTags } from "@fortawesome/free-solid-svg-icons"

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
        backgroundColor: "#328cc1",
        p: "1rem",
        borderRadius: "0.5rem",
        my: "2rem",
      }}
    >
      <h3>
        <FontAwesomeIcon icon={faTags} size={"lg"} sx={{ mx: "0.5rem" }} />
        Tags
      </h3>
      <ul
        sx={{
          listStyle: "none",
          m: 0,
          px: 2,
          py: 3,
        }}
      >
        <Grid gap={3} columns={[2, null, 2]}>
          {tags.map((tag) => (
            <Box
              key={tag.fieldValue}
              sx={{
                textAlign: "center",
                padding: "0",
              }}
            >
              <li key={tag.fieldValue}>
                <Link
                  to={`/tags/${kebabCase(tag.fieldValue)}/`}
                  key={tag.fieldValue}
                  sx={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    color: "#1d2731",
                    ":visited": { color: "#1d2731" },
                    ":hover": { color: "#d9b310" },
                  }}
                >
                  {tag.fieldValue}
                </Link>
              </li>
            </Box>
          ))}
        </Grid>
      </ul>
    </Box>
  )
}

export default TagsList
