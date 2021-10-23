/** @jsx jsx */
import { jsx } from "theme-ui"
import Prism from "@theme-ui/prism"

export default {
  pre: (props) => props.children,
  code: Prism,
  blockquote: (props) => (
    <blockquote
      sx={{
        width: "80%",
        minHeight: "5rem",
        position: "relative",
        border: "5px solid #328cc1",
        backgroundColor: "rgb(50 140 193/40%)",
        margin: "2rem auto",
        color: "#0b3c5d",
        ":before": {
          position: "absolute",
          height: "3rem",
          content: '"\\“"',
          top: "0.3rem",
          left: "0.9rem",
          font: "6rem/100% Georgia, Times New Roman, Times, serif",
        },
        ":after": {
          position: "absolute",
          height: "3rem",
          content: '"\\”"',
          bottom: "0.3rem",
          right: "0.8rem",
          font: "6rem/100% Georgia, Times New Roman, Times, serif",
        },
        em: {
          display: "block",
          fontSize: "0.8em",
          marginTop: "1rem",
          textStyle: "italic",
          textAlign: "right",
        },
        p: {
          color: "#0b3c5d",
          p: "0 4rem",
          textAlign: "left",
        },
      }}
    >
      {props.children}
    </blockquote>
  ),
}
