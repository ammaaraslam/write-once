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
  AiOutlineFullscreen,
  AiOutlineFullscreenExit,
} from "react-icons/ai";
import {
  BsBlockquoteLeft,
  BsCode,
  BsCodeSquare,
  BsCardImage,
  BsReverseLayoutTextWindowReverse,
  BsThreeDotsVertical,
  BsMarkdown,
  BsArrowUpShort,
} from "react-icons/bs";
import { CgFormatHeading, CgToolbarBottom } from "react-icons/cg";
import ToolbarPopup from "./ToolbarPopup";
import SettingsModal from "./SettingsModal";
import { ScrollSync, ScrollSyncPane } from "react-scroll-sync";

const MarkdownEditor = ({
  markdownContent,
  setMarkdownContent,
  showMarkdownPreview,
  setShowMarkdownPreview,
  setShowMarkdownGuide,
  showTOC,
  setShowTOC,
  saveContentChanges,
  showToolbar,
  setShowToolbar,
  scrollSync,
  setScrollSync,
  previewer,
  guide,
}) => {
  const ref = useRef();
  const [showMenu, setShowMenu] = useState(false);
  const [showHeadingMenu, setShowHeadingMenu] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const menuPopup = showMenu ? "scale-100 opacity-100" : "scale-90 opacity-0";
  const headingPopup = showHeadingMenu ? "scale-100" : "scale-90";
  const toolbarDisplay = showToolbar
    ? "scale-100 z-50 bottom-5"
    : "scale-90 -z-50 -bottom-5";

  const showToolbarButtonDisplay = !showToolbar
    ? "scale-100 z-50 -bottom-2"
    : "scale-90 -z-50 -bottom-10";

  const [fullscreen, setFullscreen] = useState(false);
  function openFullscreen() {
    const elem = document.getElementById("editor");
    setFullscreen(true);
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE11 */
      elem.msRequestFullscreen();
    }
  }
  function closeFullscreen() {
    setFullscreen(false);
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      /* IE11 */
      document.msExitFullscreen();
    }
  }

  return (
    <div
      className={`w-full ${
        previewer ? "md:flex hidden" : guide ? "md:flex hidden" : ""
      } h-[90vh] py-4 px-1 relative bg-[#F7F7F7] dark:bg-[#161616]`}
    >
      {/* Toolbar */}
      <button
        onClick={() => setShowToolbar(true)}
        className={`fixed w-fit left-0 right-0 mx-auto bg-[#EFEFEF] dark:bg-[#1C1C1C] inline-flex justify-center origin-bottom items-center pt-2 pb-2 px-3 rounded-xl text-xl ${showToolbarButtonDisplay} transition-all duration-200`}
      >
        <CgToolbarBottom />
      </button>
      <div
        className={`fixed w-fit left-0 right-0 mx-auto bg-[#EFEFEF] dark:bg-[#1C1C1C] md:inline-flex md:flex-row flex flex-wrap whitespace-nowrap justify-center origin-bottom items-center py-2 px-3 rounded-xl text-xl ${toolbarDisplay} transition-all duration-200`}
      >
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
          {/* <IconButton
            left={true}
            tooltipText="Table Of Contents"
            handleOnClick={() => {
              setShowMarkdownGuide(false);
              setShowTOC(!showTOC);
            }}
          >
            <BsReverseLayoutTextWindowReverse />
          </IconButton> */}
          {!fullscreen && (
            <IconButton
              handleOnClick={openFullscreen}
              left={true}
              tooltipText="Fullscreen"
            >
              <AiOutlineFullscreen />
            </IconButton>
          )}
          {fullscreen && (
            <IconButton
              handleOnClick={closeFullscreen}
              left={true}
              tooltipText="Exit Fullscreen"
            >
              <AiOutlineFullscreenExit />
            </IconButton>
          )}
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
      <ScrollSyncPane group="one">
        <TextareaMarkdown
          className="w-full h-full focus:outline-none resize-none bg-transparent text-black dark:text-white py-5 px-12 placeholder:italic"
          ref={ref}
          value={markdownContent}
          placeholder="Begin your amazing story here..."
          onChange={(e) => {
            saveContentChanges(e, "markdownContent");
          }}
        />
      </ScrollSyncPane>
      {/* Extras */}
      <SettingsModal
        opened={showSettingsModal}
        onClose={() => setShowSettingsModal(false)}
        showToolbar={showToolbar}
        setShowToolbar={setShowToolbar}
        scrollSync={scrollSync}
        setScrollSync={setScrollSync}
      />
    </div>
  );
};

export default MarkdownEditor;
