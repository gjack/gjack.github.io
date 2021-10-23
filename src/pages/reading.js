/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { Image } from "theme-ui"
import Books from "../images/books.jpg"

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
      <h4 sx={{ textAlign: "left", fontWeight: "bold" }}>2020</h4>
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
        <li key="books-01" sx={{ marginBottom: "2rem" }}>
          <span>
            <Link
              key="books-01"
              sx={{
                color: "#328cc1",
                textDecoration: "none",
                ":hover,:focus": {
                  color: "#d9b310",
                },
              }}
              to="https://www.amazon.com/dp/1777076501"
            >
              Code Your Way Up, Rise to the Challenge of Software Leadership
            </Link>
          </span>
          <span> by Greg Thomas</span>
        </li>
        <li key="books-02" sx={{ marginBottom: "2rem" }}>
          <span>
            <Link
              key="books-02"
              sx={{
                color: "#328cc1",
                textDecoration: "none",
                ":hover,:focus": {
                  color: "#d9b310",
                },
              }}
              to="https://pragprog.com/titles/vbopens/forge-your-future-with-open-source/"
            >
              Forge Your Future With Open Source
            </Link>
          </span>
          <span> by VM (Vicky) Brasseur</span>
        </li>
        <li key="books-03" sx={{ marginBottom: "2rem" }}>
          <span>
            <Link
              key="books-03"
              sx={{
                color: "#328cc1",
                textDecoration: "none",
                ":hover,:focus": {
                  color: "#d9b310",
                },
              }}
              to="https://www.amazon.com/Youre-Worth-Navigating-Corporate-America/dp/1098315030/ref=sr_1_2?crid=2FWD2YY1NQF6J&dchild=1&keywords=you%27re+worth+it&qid=1613340109&sprefix=you%27re+wor%2Caps%2C170&sr=8-2"
            >
              You're Worth It!, Navigating your career in corporate America
            </Link>
          </span>
          <span> by Ha-Keem Abdel-Khaliq</span>
        </li>
      </ul>
    </Layout>
  )
}

export default ReadingPage
