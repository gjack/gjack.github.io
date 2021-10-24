/** @jsx jsx */
import { jsx } from "theme-ui"
import Prism from "@theme-ui/prism"

export default {
  pre: (props) => <div sx={{ pre: { padding: "1rem" } }}>{props.children}</div>,
  code: Prism,
  blockquote: (props) => (
    <div
      sx={{
        background: "#f9f9f9",
        borderLeft: "10px solid #ccc",
        margin: "1.5em 10px",
        padding: "1em 10px .1em 10px",
        em: {
          display: "block",
          textAlign: "right",
          fontSize: "0.8em",
          marginTop: "1rem",
          textStyle: "italic",
        },
      }}
    >
      {props.children}
    </div>
  ),
}
