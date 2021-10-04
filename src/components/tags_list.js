/** @jsx jsx */
import { jsx, Grid, Box } from "theme-ui"
import { useStaticQuery, graphql, Link } from "gatsby"
import { kebabCase } from "lodash"

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
    <div>
      <h3>Categories</h3>
      <ul
        sx={{
          listStyle: "none",
          m: 0,
          px: 3,
          py: 4,
        }}
      >
        <Grid gap={2} columns={[2, null, 2]}>
          {tags.map((tag) => (
            <Box key={tag.fieldValue}>
              <li key={tag.fieldValue}>
                <Link
                  to={`/tags/${kebabCase(tag.fieldValue)}/`}
                  key={tag.fieldValue}
                >
                  {tag.fieldValue}
                </Link>
              </li>
            </Box>
          ))}
        </Grid>
      </ul>
    </div>
  )
}

export default TagsList
