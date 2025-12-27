import React, { useState } from "react"
import { Link as GatsbyLink } from "gatsby"
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Link as MuiLink,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import GitHub from "@mui/icons-material/GitHub"
import Twitter from "@mui/icons-material/Twitter"
import RssFeed from "@mui/icons-material/RssFeed"

const Layout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"))

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        color: "text.primary",
        backgroundColor: "background.default",
      }}
    >
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "primary.main",
          borderBottom: "1px solid black",
          boxShadow: "0px 7px 9px 1px rgb(0 0 70 / 20%)",
        }}
      >
        <Toolbar
          sx={{
            maxWidth: "container",
            width: "100%",
            mx: "auto",
            px: 3,
          }}
        >
          <Typography
            variant="h6"
            component="h1"
            sx={{
              color: "inherit",
              fontWeight: "bold",
            }}
          >
            Gabi Jack's Blog
          </Typography>
          <Box sx={{ flexGrow: 1 }} />

          {isDesktop ? (
            <>
              <Button
                component={GatsbyLink}
                to="/"
                sx={{
                  color: "inherit",
                  ml: 3,
                  py: 2,
                  fontWeight: "bold",
                  "&:hover": { color: "warning.main" },
                }}
              >
                Home
              </Button>
              <Button
                component={GatsbyLink}
                to="/blog"
                sx={{
                  color: "inherit",
                  ml: 3,
                  py: 2,
                  fontWeight: "bold",
                  "&:hover": { color: "warning.main" },
                }}
              >
                Blog
              </Button>
              <Button
                component={GatsbyLink}
                to="/reading"
                sx={{
                  color: "inherit",
                  ml: 3,
                  py: 2,
                  fontWeight: "bold",
                  "&:hover": { color: "warning.main" },
                }}
              >
                Reading
              </Button>
            </>
          ) : (
            <IconButton
              color="inherit"
              aria-label="open navigation menu"
              edge="end"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
        >
          <List>
            <ListItem button component={GatsbyLink} to="/">
              <ListItemText
                primary="Home"
                primaryTypographyProps={{ fontWeight: "bold" }}
              />
            </ListItem>
            <ListItem button component={GatsbyLink} to="/blog">
              <ListItemText
                primary="Blog"
                primaryTypographyProps={{ fontWeight: "bold" }}
              />
            </ListItem>
            <ListItem button component={GatsbyLink} to="/reading">
              <ListItemText
                primary="Reading"
                primaryTypographyProps={{ fontWeight: "bold" }}
              />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <Box
        component="main"
        sx={{
          maxWidth: "container",
          mx: "2rem",
          padding: "1rem",
          textAlign: "center",
          flex: "1 1 auto",
        }}
      >
        {children}
      </Box>

      <Box
        component="footer"
        sx={{
          textAlign: "left",
          background: "#f2f3f3",
          color: "text.secondary",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          p: 3,
          minHeight: "15%",
        }}
      >
        <Box sx={{ fontSize: "16px", fontWeight: "bold" }}>
          <Box
            component="ul"
            sx={{
              listStyleType: "none",
              paddingLeft: "2rem",
              display: "block",
            }}
          >
            <Box component="li" sx={{ display: "inline-block", marginRight: "10px" }}>
              FOLLOW:
            </Box>
            <Box component="li" sx={{ display: "inline-block", marginRight: "10px" }}>
              <MuiLink
                href="https://github.com/gjack"
                sx={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "inline-flex",
                  alignItems: "center",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                <GitHub fontSize="large" />
                <Box component="span" sx={{ px: "5px" }}>
                  GITHUB
                </Box>
              </MuiLink>
            </Box>
            <Box component="li" sx={{ display: "inline-block", marginRight: "10px" }}>
              <MuiLink
                href="https://twitter.com/alluneediscode"
                sx={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "inline-flex",
                  alignItems: "center",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                <Twitter fontSize="large" />
                <Box component="span" sx={{ px: "5px" }}>
                  TWITTER
                </Box>
              </MuiLink>
            </Box>
            <Box component="li" sx={{ display: "inline-block", marginRight: "10px" }}>
              <MuiLink
                href="https://gabijack.com/rss.xml"
                sx={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "inline-flex",
                  alignItems: "center",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                <RssFeed fontSize="large" />
                <Box component="span" sx={{ px: "5px" }}>
                  FEED
                </Box>
              </MuiLink>
            </Box>
          </Box>
        </Box>
        <Box sx={{ px: "2rem" }}>© 2022 Gabi Jack</Box>
      </Box>
    </Box>
  )
}

export default Layout
