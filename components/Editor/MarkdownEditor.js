import { useEffect, useRef, useState } from "react";
import TextareaMarkdown from "textarea-markdown-editor";
import { IconButton, ToolbarPopupButton } from "../Buttons";
import {
  AiOutlineBold,
  AiOutlineItalic,
  AiOutlineStrikethrough,
  AiOutlineLink,
  AiOutlineUnorderedList,
  AiOutlineOrderedList,
  AiOutlineEye,
  AiOutlineSetting,
} from "react-icons/ai";
import {
  BsBlockquoteLeft,
  BsCode,
  BsCodeSquare,
  BsCardImage,
  BsReverseLayoutTextWindowReverse,
  BsThreeDotsVertical,
  BsMarkdown,
} from "react-icons/bs";
import { CgFormatHeading } from "react-icons/cg";
import ToolbarPopup from "./ToolbarPopup";
import SettingsModal from "./SettingsModal";

const MarkdownEditor = ({
  markdownContent,
  setMarkdownContent,
  showMarkdownPreview,
  setShowMarkdownPreview,
  setShowMarkdownGuide,
  showTOC,
  setShowTOC,
}) => {
  const ref = useRef();
  const [showMenu, setShowMenu] = useState(false);
  const [showHeadingMenu, setShowHeadingMenu] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const menuPopup = showMenu ? "scale-100 opacity-100" : "scale-90 opacity-0";
  const headingPopup = showHeadingMenu ? "scale-100" : "scale-90";

  return (
    <div className="w-full h-[91.8vh] py-4 px-1 relative bg-[#F7F7F7] dark:bg-[#161616]">
      {/* Toolbar */}
      <div className="fixed w-fit bottom-5 left-0 right-0 mx-auto bg-[#EFEFEF] dark:bg-[#1C1C1C] inline-flex justify-center items-center py-2 px-3 rounded-xl text-xl z-50">
        <IconButton
          tooltipText="Bold Text"
          handleOnClick={() => ref.current?.trigger("bold")}
        >
          <AiOutlineBold />
        </IconButton>
        <IconButton
          tooltipText="Italic Text"
          handleOnClick={() => ref.current?.trigger("italic")}
        >
          <AiOutlineItalic />
        </IconButton>
        <IconButton
          tooltipText="Strikethrough Text"
          handleOnClick={() => ref.current?.trigger("strike-through")}
        >
          <AiOutlineStrikethrough />
        </IconButton>
        <IconButton
          tooltipText="Link"
          handleOnClick={() => ref.current?.trigger("link")}
        >
          <AiOutlineLink />
        </IconButton>
        <IconButton
          tooltipText="Unordered List"
          handleOnClick={() => ref.current?.trigger("unordered-list")}
        >
          <AiOutlineUnorderedList />
        </IconButton>
        <IconButton
          tooltipText="Ordered List"
          handleOnClick={() => ref.current?.trigger("ordered-list")}
        >
          <AiOutlineOrderedList />
        </IconButton>
        <IconButton
          tooltipText="Blockquote"
          handleOnClick={() => ref.current?.trigger("block-quotes")}
        >
          <BsBlockquoteLeft />
        </IconButton>
        <IconButton
          tooltipText="Inline Code"
          handleOnClick={() => ref.current?.trigger("code-inline")}
        >
          <BsCode />
        </IconButton>
        <IconButton
          tooltipText="Code Block"
          handleOnClick={() => ref.current?.trigger("code-block")}
        >
          <BsCodeSquare />
        </IconButton>
        <IconButton
          tooltipText="Image"
          handleOnClick={() => ref.current?.trigger("image")}
        >
          <BsCardImage />
        </IconButton>
        <IconButton
          tooltipText="Headings"
          handleOnClick={() => {
            setShowHeadingMenu(!showHeadingMenu);
            setShowMenu(false);
          }}
        >
          <CgFormatHeading />
        </IconButton>

        <ToolbarPopup
          popupDisplay={headingPopup}
          position="left-[55%] bottom-14"
        >
          <div
            className={`flex-col justify-center items-start p-2 rounded-xl bg-[#EFEFEF] dark:bg-[#1C1C1C] ${
              showHeadingMenu ? "flex" : "hidden"
            }`}
          >
            <ToolbarPopupButton
              handleOnClick={() => ref.current?.trigger("h1")}
            >
              <span className="text-2xl">Heading 1</span>
            </ToolbarPopupButton>
            <ToolbarPopupButton
              handleOnClick={() => ref.current?.trigger("h2")}
            >
              <span className="text-xl">Heading 2</span>
            </ToolbarPopupButton>
            <ToolbarPopupButton
              handleOnClick={() => ref.current?.trigger("h3")}
            >
              <span className="text-lg">Heading 3</span>
            </ToolbarPopupButton>
            <ToolbarPopupButton
              handleOnClick={() => ref.current?.trigger("h4")}
            >
              <span className="text-base">Heading 4</span>
            </ToolbarPopupButton>
            <ToolbarPopupButton
              handleOnClick={() => ref.current?.trigger("h5")}
            >
              <span className="text-sm">Heading 5</span>
            </ToolbarPopupButton>
            <ToolbarPopupButton
              handleOnClick={() => ref.current?.trigger("h6")}
            >
              <span className="text-xs">Heading 6</span>
            </ToolbarPopupButton>
          </div>
        </ToolbarPopup>
        <div className="border-l border-l-black border-opacity-30 dark:border-l-white dark:border-opacity-20">
          <IconButton
            left={true}
            tooltipText="Preview"
            handleOnClick={() => setShowMarkdownPreview(!showMarkdownPreview)}
          >
            <AiOutlineEye />
          </IconButton>
          <IconButton
            left={true}
            tooltipText="Table Of Contents"
            handleOnClick={() => {
              setShowMarkdownGuide(false);
              setShowTOC(!showTOC);
            }}
          >
            <BsReverseLayoutTextWindowReverse />
          </IconButton>
          <IconButton
            left={true}
            tooltipText="Menu"
            handleOnClick={() => {
              setShowMenu(!showMenu);
              setShowHeadingMenu(false);
            }}
          >
            <BsThreeDotsVertical />
          </IconButton>
        </div>
        <ToolbarPopup popupDisplay={menuPopup} position="right-0 bottom-14">
          <div
            className={`flex-col justify-center items-start p-2 rounded-xl bg-[#EFEFEF] dark:bg-[#1C1C1C] ${
              showMenu ? "flex" : "hidden"
            }`}
          >
            <ToolbarPopupButton
              handleOnClick={() => {
                setShowMenu(false);
                setShowMarkdownGuide(true);
                setShowTOC(false);
              }}
            >
              <BsMarkdown className="mr-1" />
              <span className="text-sm">Markdown Guide</span>
            </ToolbarPopupButton>
            <ToolbarPopupButton
              handleOnClick={() => {
                setShowMenu(false);
                setShowSettingsModal(true);
              }}
            >
              <AiOutlineSetting className="mr-1" />
              <span className="text-sm">Settings</span>
            </ToolbarPopupButton>
          </div>
        </ToolbarPopup>
      </div>
      {/* Editor */}
      <TextareaMarkdown
        className="w-full h-full focus:outline-none resize-none bg-transparent text-black dark:text-white py-5 px-12"
        ref={ref}
        value={markdownContent}
        onChange={(e) => {
          setMarkdownContent(e.target.value);
        }}
      />
      {/* Extras */}
      <SettingsModal
        opened={showSettingsModal}
        onClose={() => setShowSettingsModal(false)}
      />
    </div>
  );
};

export default MarkdownEditor;
