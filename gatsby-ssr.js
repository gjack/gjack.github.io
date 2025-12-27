import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { MDXProvider } from '@mdx-js/react';
import theme from './src/theme/muiTheme';
import mdxComponents from './src/components/mdx-components';

// PrismJS syntax highlighting theme
import 'prismjs/themes/prism-okaidia.css';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <MDXProvider components={mdxComponents}>
      {element}
    </MDXProvider>
  </ThemeProvider>
);
