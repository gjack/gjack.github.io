/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons"

const bodyStyles = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh'
}

const headerStyles = {
  width: '100%',
  variant: 'styles.header',
  minHeight: '20%',
  position: 'sticky',
  top: 0,
  zIndex: '1000',
  backgroundColor: 'white',
  borderBottom: '1px solid lightgrey'
}

const mainStyles = {
  maxWidth: `container`,
  mx: '2rem',
  padding: '1rem',
  textAlign: `center`,
  flex: '1 1 auto',
}

const footerStyles = {
  textAlign: `left`,
  background: `#f2f3f3`,
  color: '#9ba1a6',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  p: 3,
  variant: 'styles.footer',
  minHeight: '15%'
}

const navStyles = {
  maxWidth: 'container',
  mx: 'auto',
  px: 3,
  display: 'flex',
  alignItems: 'baseline',
}

const navLinkStyles = {
  variant: 'styles.navlink',
  ml: 3,
  py: 2,
}


const Layout = ({children}) => {
  return (
  <div sx={bodyStyles}>
    <header sx={headerStyles}>
      <nav sx={navStyles}>
        <h1 sx={navLinkStyles}>Gabi Jack's Blog</h1>
        <div sx={{ mx: 'auto' }} />
        <Link sx={navLinkStyles} to="/">Home</Link>
        <Link sx={navLinkStyles} to="/">Blog</Link>
        <Link sx={navLinkStyles} to="/">Reading</Link>
      </nav>
    </header>
    <main sx={mainStyles}>{children}</main>
    <footer sx={footerStyles}>
        <div sx={{  fontSize: '16px', fontWeight: 'bold' }}>
          <ul sx={{ listStyleType: 'none', paddingLeft: '2rem', display: 'block'}}>
            <li sx={{ display: 'inline-block', marginRight: '10px' }}>FOLLOW:</li>
            <li sx={{ display: 'inline-block', marginRight: '10px' }}>
              <a href="https://github.com/gjack" sx={{ textDecoration: 'none', color: 'inherit', ":hover": { textDecoration: 'underline'}}}>
                <FontAwesomeIcon icon={faGithubSquare} size='lg'/><span sx={{ px: '5px' }}>GITHUB</span>
              </a>
            </li>
            <li sx={{ display: 'inline-block', marginRight: '10px' }}>
              <a href="https://twitter.com/alluneediscode" sx={{ textDecoration: 'none', color: 'inherit', ":hover": { textDecoration: 'underline'}}}>
                <FontAwesomeIcon icon={faTwitterSquare} size='lg'/><span sx={{ px: '5px' }}>TWITTER</span>
              </a>
            </li>
          </ul>
        </div>
        <div sx={{ px: '2rem' }}>© 2021 Gabi Jack</div>
    </footer>
  </div>)
}

export default Layout