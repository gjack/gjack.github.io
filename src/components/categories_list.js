/** @jsx jsx */
import { jsx, Grid, Box } from "theme-ui"
import { useStaticQuery, graphql, Link } from "gatsby"
import { kebabCase } from "lodash"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons"

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
        backgroundColor: "#328cc1",
        p: "1rem",
        borderRadius: "0.5rem",
        my: "2rem",
      }}
    >
      <h3>
        <FontAwesomeIcon
          icon={faFolderOpen}
          size={"lg"}
          sx={{ mx: "0.5rem" }}
        />
        Categories
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
          {categories.map((category) => (
            <Box
              key={category.fieldValue}
              sx={{
                textAlign: "center",
                padding: "0",
              }}
            >
              <li key={category.fieldValue}>
                <Link
                  to={`/categories/${kebabCase(category.fieldValue)}/`}
                  key={category.fieldValue}
                  sx={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    color: "#1d2731",
                    ":visited": { color: "#1d2731" },
                    ":hover": { color: "#d9b310" },
                  }}
                >
                  {category.fieldValue}
                </Link>
              </li>
            </Box>
          ))}
        </Grid>
      </ul>
    </Box>
  )
}

export default CategoriesList
