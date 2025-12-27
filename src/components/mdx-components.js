import React from 'react';
import { Box, Paper } from '@mui/material';

// Code block styling (for ``` code blocks ```)
const Pre = (props) => (
  <Box
    component="pre"
    sx={{
      padding: 3,
      backgroundColor: '#2d2d2d',
      borderRadius: '4px',
      overflow: 'auto',
      color: '#e8e8e8',
      marginBottom: 3,
      marginTop: 3,
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
      border: '1px solid #3d3d3d',
      '& code': {
        fontFamily: '"Fira Code", "Courier New", Consolas, Monaco, monospace',
        fontSize: '0.95rem',
        lineHeight: 1.8,
        color: '#e8e8e8',
        backgroundColor: 'transparent',
        padding: 0,
        border: 'none',
      },
      // Add some basic syntax-like styling for common patterns
      '& .token.comment': { color: '#7c7c7c', fontStyle: 'italic' },
      '& .token.keyword': { color: '#c678dd' },
      '& .token.string': { color: '#98c379' },
      '& .token.function': { color: '#61afef' },
      '& .token.number': { color: '#d19a66' },
      '& .token.operator': { color: '#56b6c2' },
      '& .token.class-name': { color: '#e5c07b' },
      '& .token.punctuation': { color: '#cccccc' },
    }}
    {...props}
  />
);

// Inline code styling (for `code`)
// This will NOT apply to code blocks (which are wrapped in <pre>)
const InlineCode = ({ className, ...props }) => {
  // If this code element has a className (from PrismJS), it's part of a code block
  // so we return a plain code element without extra styling
  if (className) {
    return <code className={className} {...props} />;
  }

  // Otherwise, it's inline code and we apply our custom styling
  return (
    <Box
      component="code"
      sx={{
        fontFamily: '"Fira Code", "Courier New", monospace',
        fontSize: '0.875em',
        backgroundColor: '#f5f5f5',
        color: '#c7254e',
        padding: '0.2em 0.4em',
        borderRadius: '3px',
        border: '1px solid #e1e1e1',
      }}
      {...props}
    />
  );
};

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
  code: InlineCode,
  blockquote: Blockquote,
};
