import Layout from "../../components/Layout";
import { HiOutlineArrowLeft } from "react-icons/hi";
import {
  IconButton,
  PrimaryButton,
  PrimaryOutlineButton,
} from "../../components/Buttons";
import MarkdownEditor from "../../components/Editor/MarkdownEditor";
import MarkdownPreviewer from "../../components/Editor/MarkdownPreviewer";
import { useEffect, useState } from "react";
import ThemeToggle from "../../components/ThemeToggle";
import {
  AiOutlineBold,
  AiOutlineItalic,
  AiOutlineStrikethrough,
  AiOutlineLink,
  AiOutlineUnorderedList,
  AiOutlineOrderedList,
  AiFillEye,
  AiOutlineQuestion,
  AiFillSetting,
} from "react-icons/ai";
import MarkdownGuide from "../../components/Editor/MarkdownGuide";
import { TOC } from "../../components/Editor/TOC";
import PublishModal from "../../components/Editor/PublishModal";
import CoverImageModal from "../../components/Editor/CoverImageModal";
import {
  GET_UNIQUE_ARTICLE,
  UPDATE_UNIQUE_ARTICLE_CONTENT,
} from "../../utils/queries/articles";
import { useQuery, ApolloClient } from "@apollo/client";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { MdOutlineModeEdit } from "react-icons/md";
import { ScrollSync, ScrollSyncPane } from "react-scroll-sync";
import SettingsModal from "../../components/Editor/SettingsModal";

export default function Editor() {
  const [markdownContent, setMarkdownContent] = useState("");
  const [showMarkdownPreview, setShowMarkdownPreview] = useState(false);
  const [showMarkdownGuide, setShowMarkdownGuide] = useState(false);
  const [showTOC, setShowTOC] = useState(false);
  const [showPublishModal, setShowPublishModal] = useState(false);

  const [title, setTitle] = useState("Untitled");
  const [coverImage, setCoverImage] = useState(null);
  const [coverImageData, setCoverImageData] = useState(null);
  const [showSettingsModal, setShowSettingsModal] = useState(false);

  const [showCoverImageModal, setShowCoverImageModal] = useState(false);
  const [hashnode, setHashnode] = useState(false);
  const [dev, setDev] = useState(false);
  const [medium, setMedium] = useState(false);
  const [showToolbar, setShowToolbar] = useState(true);
  const [scrollSync, setScrollSync] = useState(true);
  const router = useRouter();
  const articleId = useRouter().query.id;
  const { loading, error, data } = useQuery(GET_UNIQUE_ARTICLE, {
    variables: { id: articleId },
  });
  const [updateUniqeArticleContent] = useMutation(
    UPDATE_UNIQUE_ARTICLE_CONTENT
  );
  console.log(coverImage);

  async function saveContentChanges(e, forItem) {
    if (forItem === "title") {
      setTitle(e.target.value);
      updateUniqeArticleContent({
        variables: {
          id: articleId,
          title: title,
          content: markdownContent,
        },
      });
    }
    if (forItem === "markdownContent") {
      setMarkdownContent(e.target.value);
      await updateUniqeArticleContent({
        variables: {
          id: articleId,
          title: title,
          content: markdownContent,
        },
      });
    }
  }
  useEffect(() => {
    setTitle(data?.articles[0].title);
    setMarkdownContent(data?.articles[0].content);
    setCoverImage(data?.articles[0].coverImage);
  }, [data]);

  return (
    <Layout id="editor" title={`${title} | WriteOnce`}>
      {/* Header */}
      <div className="w-full px-5 py-4 inline-flex justify-between items-center bg-white dark:bg-[#0F0F0F] transition-all duration-200 ease-in-out">
        <div className="inline-flex justify-center items-center">
          <div className="md:inline-flex hidden">
            <IconButton
              handleOnClick={() => router.push("/dashboard")}
              darkerBg={false}
            >
              <HiOutlineArrowLeft />
            </IconButton>
          </div>
          <form className="flex flex-col justify-center items-start ml-1 w-fit">
            <input
              onChange={(e) => {
                saveContentChanges(e, "title");
              }}
              className="focus:outline-none bg-transparent border-b border-b-white dark:border-b-[#0F0F0F] focus:border-b-[#E0E0E0] dark:focus:border-b-[#282828] p-0 w-fit transition-colors duration-200 leading-3 text-black dark:text-white"
              type="text"
              value={title}
              required
            />
            <span className="text-black dark:text-white text-sm mt-1 text-opacity-60 dark:text-opacity-60">
              Last Updated &#x2022; 21-09-2022
            </span>
          </form>
        </div>
        <button
          onClick={() => setShowCoverImageModal(true)}
          className="md:block hidden py-3 px-7 text-center text-xs border-2 border-dashed border-[#282828] dark:border-white rounded-lg mr-48"
        >
          Choose Cover Image
        </button>
        <div className="inline-flex justify-center items-center">
          <PrimaryOutlineButton
            small
            handleOnClick={() => setShowPublishModal(true)}
          >
            Publish
          </PrimaryOutlineButton>
        </div>
      </div>
      {/* Editor */}
      <ScrollSync>
        <form className="relative inline-flex justify-center items-center w-full z-10 overflow-hidden">
          <div className="md:hidden inline-flex justify-center items-center rounded-lg absolute top-2 right-2 bg-[#E7E7E7] dark:bg-[#222222]">
            <IconButton
              center={true}
              handleOnClick={() => {
                setShowMarkdownPreview(false);
              }}
            >
              <MdOutlineModeEdit />
            </IconButton>
          </div>
          <MarkdownEditor
            markdownContent={markdownContent}
            setMarkdownContent={setMarkdownContent}
            showMarkdownPreview={showMarkdownPreview}
            setShowMarkdownPreview={setShowMarkdownPreview}
            showMarkdownGuide={showMarkdownGuide}
            setShowMarkdownGuide={setShowMarkdownGuide}
            showTOC={showTOC}
            setShowTOC={setShowTOC}
            saveContentChanges={saveContentChanges}
            showToolbar={showToolbar}
            setShowToolbar={setShowToolbar}
            scrollSync={scrollSync}
            setScrollSync={setScrollSync}
            previewer={showMarkdownPreview}
            guide={showMarkdownGuide}
            showSettingsModal={showSettingsModal}
            setShowSettingsModal={setShowSettingsModal}
          />

          {showMarkdownPreview && (
            <MarkdownPreviewer
              scrollSync={scrollSync}
              markdownContent={markdownContent}
            />
          )}

          {showMarkdownGuide && (
            <MarkdownGuide setShowMarkdownGuide={setShowMarkdownGuide} />
          )}
          {showTOC && (
            <TOC markdownContent={markdownContent} setShowTOC={setShowTOC} />
          )}
        </form>
      </ScrollSync>
      <PublishModal
        opened={showPublishModal}
        onClose={() => setShowPublishModal(false)}
        hashnode={hashnode}
        dev={dev}
        medium={medium}
        setHashnode={setHashnode}
        setDev={setDev}
        setMedium={setMedium}
        title={title}
        content={markdownContent}
        coverImage={coverImage}
        articleId={articleId}
      />
      <CoverImageModal
        opened={showCoverImageModal}
        onClose={() => setShowCoverImageModal(false)}
        coverImage={coverImage}
        setCoverImage={setCoverImage}
        coverImageData={coverImageData}
        setCoverImageData={setCoverImageData}
        coverImageLink
      />
      <SettingsModal
        opened={showSettingsModal}
        onClose={() => setShowSettingsModal(false)}
        showToolbar={showToolbar}
        setShowToolbar={setShowToolbar}
        scrollSync={scrollSync}
        setScrollSync={setScrollSync}
      />
    </Layout>
  );
}
