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
    fontFamily: '-apple-system, Roboto, sans-serif, serif',
    h1: {
      fontWeight: 'bold',
    },
    h2: {
      fontWeight: 'bold',
    },
    h3: {
      fontWeight: 'bold',
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
