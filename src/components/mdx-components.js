import React from 'react';
import { Box } from '@mui/material';

// Code block styling (for ``` code blocks ```)
const Pre = (props) => (
  <Box
    component="pre"
    sx={{
      padding: 3,
      backgroundColor: '#1e1e1e',
      borderRadius: '4px',
      overflow: 'auto',
      color: '#d4d4d4',
      marginBottom: 3,
      marginTop: 3,
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
      border: '1px solid #3d3d3d',
      '& code': {
        fontFamily: '"Fira Code", "Courier New", Consolas, Monaco, monospace',
        fontSize: '0.95rem',
        lineHeight: 1.8,
        color: '#d4d4d4',
        backgroundColor: 'transparent',
        padding: 0,
        border: 'none',
      },
      // Token colors, chosen for contrast against the #1e1e1e background
      '& .token.comment': { color: '#93a1a1', fontStyle: 'italic' },
      '& .token.keyword': { color: '#ff79c6' },
      '& .token.string, & .token.string-literal, & .token.char, & .token.regex': { color: '#a5d6a7' },
      '& .token.function, & .token.generic-function, & .token.method-definition': { color: '#82aaff' },
      '& .token.number, & .token.boolean, & .token.constant': { color: '#f78c6c' },
      '& .token.operator': { color: '#89ddff' },
      '& .token.class-name, & .token.builtin': { color: '#ffcb6b' },
      '& .token.punctuation': { color: '#d4d4d4' },
      '& .token.tag, & .token.property, & .token.attr-name, & .token.symbol, & .token.deleted': { color: '#ff8b92' },
      '& .token.variable, & .token.namespace': { color: '#f8f8f2' },
      '& .token.important, & .token.inserted': { color: '#a5d6a7', fontWeight: 'bold' },
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
        fontSize: '0.9em',
        backgroundColor: '#eef0f2',
        color: '#1d2731',
        padding: '0.15em 0.4em',
        borderRadius: '3px',
        border: '1px solid #dde1e4',
      }}
      {...props}
    />
  );
};

const Blockquote = (props) => (
  <Box
    component="blockquote"
    sx={{
      background: '#f0f7fb',
      borderLeft: '4px solid #328cc1',
      margin: '2em 0',
      padding: '1.5em 1.5em 1em 1.5em',
      borderRadius: '4px',
      fontStyle: 'italic',
      fontSize: '1.1rem',
      color: '#0b3c5d',
      boxShadow: '0 2px 8px rgba(50, 140, 193, 0.1)',
      '& p': {
        margin: 0,
      },
      '& em': {
        display: 'block',
        textAlign: 'right',
        fontSize: '0.875rem',
        marginTop: 2,
        fontStyle: 'italic',
        color: '#5a6c7d',
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
