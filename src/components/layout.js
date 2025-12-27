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
                slotProps={{
                  primary: { fontWeight: "bold" }
                }}
              />
            </ListItem>
            <ListItem button component={GatsbyLink} to="/blog">
              <ListItemText
                primary="Blog"
                slotProps={{
                  primary: { fontWeight: "bold" }
                }}
              />
            </ListItem>
            <ListItem button component={GatsbyLink} to="/reading">
              <ListItemText
                primary="Reading"
                slotProps={{
                  primary: { fontWeight: "bold" }
                }}
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
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "flex-start", sm: "center" },
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 3,
              flexWrap: "wrap",
            }}
          >
            <Typography
              sx={{
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "primary.main",
                letterSpacing: "0.05em",
              }}
            >
              FOLLOW
            </Typography>
            <MuiLink
              href="https://github.com/gjack"
              sx={{
                textDecoration: "none",
                color: "#5a6c7d",
                display: "inline-flex",
                alignItems: "center",
                gap: 0.5,
                fontSize: "0.875rem",
                transition: "color 0.2s",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              <GitHub fontSize="small" />
              <Box component="span">GitHub</Box>
            </MuiLink>
            <MuiLink
              href="https://twitter.com/alluneediscode"
              sx={{
                textDecoration: "none",
                color: "#5a6c7d",
                display: "inline-flex",
                alignItems: "center",
                gap: 0.5,
                fontSize: "0.875rem",
                transition: "color 0.2s",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              <Twitter fontSize="small" />
              <Box component="span">Twitter</Box>
            </MuiLink>
            <MuiLink
              href="https://gabijack.com/rss.xml"
              sx={{
                textDecoration: "none",
                color: "#5a6c7d",
                display: "inline-flex",
                alignItems: "center",
                gap: 0.5,
                fontSize: "0.875rem",
                transition: "color 0.2s",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              <RssFeed fontSize="small" />
              <Box component="span">RSS Feed</Box>
            </MuiLink>
          </Box>
          <Typography sx={{ fontSize: "0.875rem", color: "#5a6c7d" }}>
            © {new Date().getFullYear()} Gabi Jack
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Layout
