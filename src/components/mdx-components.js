import React from 'react';
import { Box, Paper } from '@mui/material';

// Code block styling (alternative to @theme-ui/prism)
const Pre = (props) => (
  <Box
    component="pre"
    sx={{
      padding: 2,
      backgroundColor: '#282c34', // okaidia theme background
      borderRadius: 1,
      overflow: 'auto',
      color: '#f8f8f2',
      '& code': {
        fontFamily: 'monospace',
        fontSize: '0.875rem',
      },
    }}
    {...props}
  />
);

const Blockquote = (props) => (
  <Paper
    component="blockquote"
    elevation={0}
    sx={{
      background: '#f9f9f9',
      borderLeft: '10px solid #ccc',
      margin: '1.5em 10px',
      padding: '1em 10px 0.1em 10px',
      '& em': {
        display: 'block',
        textAlign: 'right',
        fontSize: '0.8em',
        marginTop: 2,
        fontStyle: 'italic',
      },
    }}
    {...props}
  />
);

export default {
  pre: Pre,
  blockquote: Blockquote,
};
