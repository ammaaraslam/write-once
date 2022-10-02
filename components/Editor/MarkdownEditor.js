import React, { useRef } from "react";
import TextareaMarkdown from "textarea-markdown-editor";
import { IconButton } from "../Buttons";
import {
  AiOutlineBold,
  AiOutlineItalic,
  AiOutlineStrikethrough,
  AiOutlineLink,
  AiOutlineUnorderedList,
  AiOutlineOrderedList,
} from "react-icons/ai";
import {
  BsBlockquoteLeft,
  BsCode,
  BsCodeSquare,
  BsCardImage,
} from "react-icons/bs";
import { CgFormatHeading } from "react-icons/cg";

const MarkdownEditor = ({ markdownContent, setMarkdownContent }) => {
  const ref = useRef();

  return (
    <div className="w-full h-[92.3vh] py-4 px-1 relative bg-[#F7F7F7] dark:bg-[#161616]">
      {/* Toolbar */}
      <div className="absolute w-fit bottom-5 left-0 right-0 mx-auto bg-[#EFEFEF] dark:bg-[#1C1C1C] inline-flex justify-center items-center py-2 px-3 rounded-xl text-xl">
        <IconButton handleOnClick={() => ref.current?.trigger("bold")}>
          <AiOutlineBold />
        </IconButton>
        <IconButton handleOnClick={() => ref.current?.trigger("italic")}>
          <AiOutlineItalic />
        </IconButton>
        <IconButton
          handleOnClick={() => ref.current?.trigger("strike-through")}
        >
          <AiOutlineStrikethrough />
        </IconButton>
        <IconButton handleOnClick={() => ref.current?.trigger("link")}>
          <AiOutlineLink />
        </IconButton>
        <IconButton
          handleOnClick={() => ref.current?.trigger("unordered-list")}
        >
          <AiOutlineUnorderedList />
        </IconButton>
        <IconButton handleOnClick={() => ref.current?.trigger("ordered-list")}>
          <AiOutlineOrderedList />
        </IconButton>
        <IconButton handleOnClick={() => ref.current?.trigger("block-quotes")}>
          <BsBlockquoteLeft />
        </IconButton>
        <IconButton handleOnClick={() => ref.current?.trigger("code-inline")}>
          <BsCode />
        </IconButton>
        <IconButton handleOnClick={() => ref.current?.trigger("code-block")}>
          <BsCodeSquare />
        </IconButton>
        <IconButton handleOnClick={() => ref.current?.trigger("image")}>
          <BsCardImage />
        </IconButton>
        <IconButton handleOnClick={() => ref.current?.trigger("h1")}>
          <CgFormatHeading />
        </IconButton>
      </div>
      {/* Editor */}
      <TextareaMarkdown
        className="w-full h-full focus:outline-none resize-none bg-transparent text-white dark:text-white"
        ref={ref}
        value={markdownContent}
        onChange={(e) => {
          setMarkdownContent(e.target.value);
        }}
      />
    </div>
  );
};

export default MarkdownEditor;
