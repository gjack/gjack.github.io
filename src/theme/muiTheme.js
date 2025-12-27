import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0b3c5d',      // Dark blue (header, links)
      contrastText: '#eaeaec',
    },
    secondary: {
      main: '#328cc1',      // Medium blue (cards, accent boxes)
      contrastText: '#1d2731',
    },
    warning: {
      main: '#d9b310',      // Gold (hover states)
    },
    background: {
      default: '#eaeaec',   // Page background
      paper: '#ffffff',     // Card/Paper backgrounds
    },
    text: {
      primary: '#1d2731',
      secondary: '#9ba1a6',
    },
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontWeight: 600,
      color: '#0b3c5d',
    },
    h2: {
      fontWeight: 600,
      color: '#0b3c5d',
    },
    h3: {
      fontWeight: 600,
      color: '#0b3c5d',
      fontSize: '1.75rem',
    },
    h4: {
      fontWeight: 600,
      color: '#0b3c5d',
    },
    h5: {
      fontWeight: 600,
      color: '#0b3c5d',
    },
    h6: {
      fontWeight: 600,
      color: '#0b3c5d',
    },
    body1: {
      lineHeight: 1.7,
      color: '#1d2731',
    },
    body2: {
      lineHeight: 1.6,
      color: '#5a6c7d',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,      // Matches current 40em breakpoint
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          color: '#1d2731',
          backgroundColor: '#eaeaec',
        },
      },
    },
  },
});

export default theme;
