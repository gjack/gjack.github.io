/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

const bodyStyles = {
  mx: '2rem',
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh'
}

const headerStyles = {
  paddingLeft: `10px`,
  width: '100%'
}

const mainStyles = {
  maxWidth: `container`,
  padding: `1rem`,
  textAlign: `center`,
  flex: '1 1 auto'
}

const footerStyles = {
  textAlign: `center`,
  background: `lightgrey`,
}

const Layout = ({children}) => {
  return (
  <div sx={bodyStyles}>
    <header sx={headerStyles}>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </header>
    <main sx={mainStyles}>{children}</main>
    <footer>
      <p sx={footerStyles}>A fun footer</p>
    </footer>
  </div>)
}

export default Layout