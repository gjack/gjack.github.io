import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link as GatsbyLink } from "gatsby"
import { Box, Link as MuiLink, Typography } from "@mui/material"
import Books from "../images/books.jpg"
import JSONdata from "../../content/books.json"

// markup
const ReadingPage = () => {
  return (
    <Layout>
      <Seo title={"Reading"} />
      <Box
        component="img"
        src={Books}
        alt="Books"
        sx={{
          border: "1px solid",
          borderColor: "primary.main",
          padding: "5px",
          marginTop: "3rem",
          maxWidth: "100%",
          height: "auto",
        }}
      />
      <Box component="article" sx={{ my: "3rem", textAlign: "justify" }}>
        <Typography component="p" sx={{ mb: 2 }}>
          Ever since I was a child, I've always enjoyed reading. Perhaps that's
          the reason why my large collection of books continues growing every
          day. This collection, of course, includes technical books of all
          kinds. Books about a specific programming language or framework,
          tutorials, career development books, etc.
        </Typography>
        <Typography component="p" sx={{ mb: 2 }}>
          I often joke that I have more books than I could possibly read in my
          whole life, but I don't want that to be the truth, so in the last
          couple of years I've tried being more intentional about my reading
          habits. As I pick up new books, I'll list them here and, perhaps,
          include a small review of them too. Who knows? Maybe someone else will
          find them interesting too.
        </Typography>
      </Box>
      <Typography variant="h3" component="h2" sx={{ mb: 4, mt: 6, fontWeight: 600, color: "primary.main" }}>
        Recently read books
      </Typography>
      {JSONdata.map((group, groupIndex) => (
        <Box key={`year-${groupIndex}`}>
          <Typography
            variant="h4"
            component="h3"
            sx={{ textAlign: "left", fontWeight: 600, mb: 2, color: "primary.main" }}
          >
            {group.year}
          </Typography>
          <Box
            component="ul"
            sx={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              textAlign: "left",
              m: 0,
              px: 3,
              py: 4,
            }}
          >
            {group.books.map((book, index) => (
              <Box
                component="li"
                key={`books-${groupIndex}-${index}`}
                sx={{ marginBottom: "2rem" }}
              >
                <MuiLink
                  component={GatsbyLink}
                  to={book.link}
                  target="_blank"
                  sx={{
                    color: "secondary.main",
                    textDecoration: "none",
                    "&:hover, &:focus": {
                      color: "warning.main",
                    },
                  }}
                >
                  {book.title}
                </MuiLink>
                <Box component="span">{` by ${book.author}`}</Box>
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Layout>
  )
}

export default ReadingPage
