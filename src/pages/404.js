import React from "react"
import Layout from "../components/layout"
import { Box, Typography } from "@mui/material"
import NotFound from "../images/404page.jpg"

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <Box
        component="main"
        sx={{
          color: "#232129",
          padding: "96px",
          fontFamily: "-apple-system, Roboto, sans-serif, serif",
        }}
      >
        <title>Not found</title>
        <Typography
          variant="h1"
          component="h1"
          sx={{
            marginTop: 0,
            marginBottom: "2rem",
            maxWidth: "100%",
            textAlign: "center",
          }}
        >
          Oops! Page Not Found!
        </Typography>
        <Box
          component="img"
          src={NotFound}
          alt="Page not found"
          sx={{
            border: "1px solid",
            borderColor: "primary.main",
            padding: "5px",
            marginTop: "3rem",
            maxWidth: "100%",
            height: "auto",
          }}
        />
        <Typography component="p" sx={{ marginBottom: "48px" }}>
          Sorry{" "}
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>{" "}
          we couldn't find what you were looking for.
        </Typography>
      </Box>
    </Layout>
  )
}

export default NotFoundPage
