import * as React from "react"
import Layout from "../components/layout"
import { Image } from "theme-ui"
import NotFound from "../images/404page.jpg"

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: "2rem",
  maxWidth: "100%",
  textAlign: "center",
}

const paragraphStyles = {
  marginBottom: 48,
}

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <main style={pageStyles}>
        <title>Not found</title>
        <h1 style={headingStyles}>Oops! Page Not Found!</h1>
        <Image
          src={NotFound}
          alt={"Books"}
          sx={{
            border: "1px solid #0b3c5d",
            padding: "5px",
            marginTop: "3rem",
          }}
        />
        <p style={paragraphStyles}>
          Sorry{" "}
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>{" "}
          we couldn’t find what you were looking for.
        </p>
      </main>
    </Layout>
  )
}

export default NotFoundPage
