/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { Image } from "theme-ui"
import Books from "../images/books.jpg"
import JSONdata from "../../content/books.json"

// markup
const ReadingPage = () => {
  return (
    <Layout>
      <SEO title={"Reading"} />
      <Image
        src={Books}
        alt={"Books"}
        sx={{
          border: "1px solid #0b3c5d",
          padding: "5px",
          marginTop: "3rem",
        }}
      />
      <article sx={{ my: "3rem", textAlign: "justify" }}>
        <p>
          Ever since I was a child, I've always enjoyed reading. Perhaps that's
          the reason why my large collection of books continues growing every
          day. This collection, of course, includes technical books of all
          kinds. Books about a specific programming language or framework,
          tutorials, career development books, etc.
        </p>
        <p>
          I often joke that I have more books than I could possibly read in my
          whole life, but I don't want that to be the truth, so in the last
          couple of years I've tried being more intentional about my reading
          habits. As I pick up new books, I'll list them here and, perhaps,
          include a small review of them too. Who knows? Maybe someone else will
          find them interesting too.
        </p>
      </article>
      <hr
        sx={{
          color: "#0b3c5d",
          textAlign: "center",
          width: "90%",
          border: "none",
          borderTop: "3px double #0b3c5d",
          overflow: "visible",
          height: "5px",
          my: 5,
          ":after": {
            background: "#eaeaec",
            content: '"\\270E"',
            padding: "0 4px",
            position: "relative",
            top: "-13px",
          },
        }}
      />
      <h3>Recently read books</h3>
      {JSONdata.map((group) => (
        <>
          <h4 sx={{ textAlign: "left", fontWeight: "bold" }}>{group.year}</h4>
          <ul
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
              <li key={`books-${index}`} sx={{ marginBottom: "2rem" }}>
                <span>
                  <Link
                    key={`books-${index}`}
                    sx={{
                      color: "#328cc1",
                      textDecoration: "none",
                      ":hover,:focus": {
                        color: "#d9b310",
                      },
                    }}
                    to={book.link}
                    target="_blank"
                  >
                    {book.title}
                  </Link>
                </span>
                <span>{` by ${book.author}`}</span>
              </li>
            ))}
          </ul>
        </>
      ))}
    </Layout>
  )
}

export default ReadingPage
