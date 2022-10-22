import React, { useEffect, useState } from "react";
import { IconButton } from "../Buttons";
import MarkdownPreviewer from "./MarkdownPreviewer";
import { AiOutlineClose } from "react-icons/ai";

const MarkdownGuide = ({ setShowMarkdownGuide }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/markdown-cheat-sheet.md")
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div className="relative md:w-1/2 w-full h-[90vh] bg-[#F7F7F7] overflow-hidden">
      <div className="absolute top-2 right-5">
        <IconButton handleOnClick={() => setShowMarkdownGuide(false)}>
          <AiOutlineClose />
        </IconButton>
      </div>
      <MarkdownPreviewer markdownContent={content} />
    </div>
  );
};

export default MarkdownGuide;
