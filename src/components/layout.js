/** @jsx jsx */
import { jsx, MenuButton } from "theme-ui"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithubSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons"
import { faRssSquare } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import MediaQuery from "react-responsive"

const bodyStyles = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  color: "#1d2731",
  backgroundColor: "#eaeaec",
}

const headerStyles = {
  width: "100%",
  variant: "styles.header",
  minHeight: "20%",
  position: "sticky",
  top: 0,
  zIndex: "1000",
  backgroundColor: "#0b3c5d",
  borderBottom: "1px solid black",
  boxShadow: "0px 7px 9px 1px rgb(0 0 70 / 20%)",
}

const mainStyles = {
  maxWidth: `container`,
  mx: "2rem",
  padding: "1rem",
  textAlign: `center`,
  flex: "1 1 auto",
}

const footerStyles = {
  textAlign: `left`,
  background: `#f2f3f3`,
  color: "#9ba1a6",
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  p: 3,
  variant: "styles.footer",
  minHeight: "15%",
}

const navStyles = {
  maxWidth: "container",
  mx: "auto",
  px: 3,
  display: "flex",
  alignItems: "baseline",
  color: "#eaeaec",
}

const navLinkStyles = {
  variant: "styles.navlink",
  ml: 3,
  py: 2,
  textDecoration: "none",
  color: "inherit",
  fontWeight: "bold",
}

const mobileNavStyles = {
  maxWidth: "container",
  mx: "auto",
  px: 3,
  display: "flex",
  alignItems: "baseline",
  color: "#eaeaec",
}

const Layout = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleShowMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div sx={bodyStyles}>
      <header sx={headerStyles}>
        <MediaQuery minWidth={"40em"}>
          <nav sx={navStyles}>
            <h1 sx={navLinkStyles}>Gabi Jack's Blog</h1>
            <div sx={{ mx: "auto" }} />
            <Link
              sx={{ ...navLinkStyles, ":hover": { color: "#d9b310" } }}
              to="/"
            >
              Home
            </Link>
            <Link
              sx={{ ...navLinkStyles, ":hover": { color: "#d9b310" } }}
              to="/blog"
            >
              Blog
            </Link>
            <Link
              sx={{ ...navLinkStyles, ":hover": { color: "#d9b310" } }}
              to="/reading"
            >
              Reading
            </Link>
          </nav>
        </MediaQuery>
        <MediaQuery maxWidth={"40em"}>
          <nav sx={mobileNavStyles}>
            <h1 sx={navLinkStyles}>Gabi Jack's Blog</h1>
            <div sx={{ mx: "auto" }} />
            <MenuButton
              aria-label="Toggle Menu"
              sx={{ ":active": { border: "1px solid lightgrey" } }}
              onClick={toggleShowMenu}
            />
            <ul
              sx={{
                display: showMenu ? "block" : "none",
                minWidth: "6rem",
                position: "absolute",
                top: "110%",
                right: "15px",
                marginTop: 0,
                p: "5px",
                border: "1px solid #f2f3f3",
                borderRadius: "4px",
                background: "#fff",
                boxShadow:
                  "0 2px 4px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)",
                ":before": {
                  content: '" "',
                  position: "absolute",
                  top: "-10px",
                  right: "10px",
                  width: 0,
                  borderStyle: "solid",
                  borderWidth: "0 10px 10px",
                  borderColor: "#fff transparent",
                  display: "block",
                  zIndex: 0,
                },
              }}
            >
              <li
                sx={{
                  display: "block",
                  borderBottom: "1px solid #f2f3f3",
                  px: "2rem",
                }}
              >
                <Link
                  key="mobile-nav-1"
                  sx={{
                    variant: "styles.navlink",
                    py: 2,
                    textDecoration: "none",
                    color: "#1d2731",
                    fontWeight: "bold",
                    ":visited": { color: "#1d2731" },
                  }}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li
                sx={{
                  display: "block",
                  borderBottom: "1px solid #f2f3f3",
                  px: "2rem",
                }}
              >
                <Link
                  key="mobile-nav-2"
                  sx={{
                    variant: "styles.navlink",
                    py: 2,
                    textDecoration: "none",
                    color: "#1d2731",
                    fontWeight: "bold",
                    ":visited": { color: "#1d2731" },
                  }}
                  to="/blog"
                >
                  Blog
                </Link>
              </li>
              <li sx={{ display: "block", px: "2rem" }}>
                <Link
                  key="mobile-nav-3"
                  sx={{
                    variant: "styles.navlink",
                    py: 2,
                    textDecoration: "none",
                    color: "#1d2731",
                    fontWeight: "bold",
                    ":visited": { color: "#1d2731" },
                  }}
                  to="/reading"
                >
                  Reading
                </Link>
              </li>
            </ul>
          </nav>
        </MediaQuery>
      </header>
      <main sx={mainStyles}>{children}</main>
      <footer sx={footerStyles}>
        <div sx={{ fontSize: "16px", fontWeight: "bold" }}>
          <ul
            sx={{
              listStyleType: "none",
              paddingLeft: "2rem",
              display: "block",
            }}
          >
            <li sx={{ display: "inline-block", marginRight: "10px" }}>
              FOLLOW:
            </li>
            <li sx={{ display: "inline-block", marginRight: "10px" }}>
              <a
                href="https://github.com/gjack"
                sx={{
                  textDecoration: "none",
                  color: "inherit",
                  ":hover": { textDecoration: "underline" },
                }}
              >
                <FontAwesomeIcon icon={faGithubSquare} size="lg" />
                <span sx={{ px: "5px" }}>GITHUB</span>
              </a>
            </li>
            <li sx={{ display: "inline-block", marginRight: "10px" }}>
              <a
                href="https://twitter.com/alluneediscode"
                sx={{
                  textDecoration: "none",
                  color: "inherit",
                  ":hover": { textDecoration: "underline" },
                }}
              >
                <FontAwesomeIcon icon={faTwitterSquare} size="lg" />
                <span sx={{ px: "5px" }}>TWITTER</span>
              </a>
            </li>
            <li sx={{ display: "inline-block", marginRight: "10px" }}>
              <a
                href="https://gabijack.com/rss.xml"
                sx={{
                  textDecoration: "none",
                  color: "inherit",
                  ":hover": { textDecoration: "underline" },
                }}
              >
                <FontAwesomeIcon icon={faRssSquare} size="lg" />
                <span sx={{ px: "5px" }}>FEED</span>
              </a>
            </li>
          </ul>
        </div>
        <div sx={{ px: "2rem" }}>© 2022 Gabi Jack</div>
      </footer>
    </div>
  )
}

export default Layout
