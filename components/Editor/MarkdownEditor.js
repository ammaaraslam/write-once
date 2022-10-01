import rehypeSanitize from "rehype-sanitize";
import { Editor, Viewer } from "@bytemd/react";
import gfm from "@bytemd/plugin-gfm";
import breaks from "@bytemd/plugin-breaks";
import frontmatter from "@bytemd/plugin-frontmatter";
import gemoji from "@bytemd/plugin-gemoji";
import highlight from "@bytemd/plugin-highlight";
import math from "@bytemd/plugin-math";
import mermaid_2 from "@bytemd/plugin-mermaid";
import "@bytemd/react/dist/index.css";

const MarkdownEditor = ({ markdownContent, setMarkdownContent }) => {
  const plugins = [
    gfm(),
    breaks(),
    frontmatter(),
    gemoji(),
    highlight(),
    math(),
    mermaid_2(),
  ];

  return (
    <div>
      <Editor
        value={markdownContent}
        plugins={plugins}
        onChange={(v) => {
          setMarkdownContent(v);
        }}
      />
    </div>
  );
};

export default MarkdownEditor;
