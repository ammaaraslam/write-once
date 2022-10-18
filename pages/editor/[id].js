import Layout from "../../components/Layout";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { IconButton, PrimaryButton } from "../../components/Buttons";
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
import { GET_UNIQUE_ARTICLE } from "../../utils/queries/articles";
import { useQuery, ApolloClient } from "@apollo/client";
import { useRouter } from "next/router";

export default function Editor() {
  const [markdownContent, setMarkdownContent] = useState("");
  const [showMarkdownPreview, setShowMarkdownPreview] = useState(false);
  const [showMarkdownGuide, setShowMarkdownGuide] = useState(false);
  const [showTOC, setShowTOC] = useState(false);
  const [showPublishModal, setShowPublishModal] = useState(false);

  const [title, setTitle] = useState("Untitled");
  const [coverImage, setCoverImage] = useState(null);
  const [coverImageData, setCoverImageData] = useState(null);

  const [showCoverImageModal, setShowCoverImageModal] = useState(false);
  const [hashnode, setHashnode] = useState(false);
  const [dev, setDev] = useState(false);
  const [medium, setMedium] = useState(false);
  const articleId = useRouter().query.id;
  const { loading, error, data } = useQuery(GET_UNIQUE_ARTICLE, {
    variables: { id: articleId },
  });
  if (!loading) {
    setTitle(data?.title);
    setMarkdownContent(data?.content);
    console.log(data?.title);
    console.log(data?.content);
  }

  // const [articleData, setArticleData] = useState({
  //   title: title,
  //   content: markdownContent,
  //   coverImage: coverImage,
  // });

  return (
    <Layout title={`${title} | WriteOnce`}>
      {/* Header */}
      <div className="w-full px-4 py-3 inline-flex justify-between items-center bg-white dark:bg-[#0F0F0F] transition-all duration-200 ease-in-out z-10">
        <div className="inline-flex justify-center items-center">
          <IconButton darkerBg={false}>
            <HiOutlineArrowLeft />
          </IconButton>
          <div className="flex flex-col justify-center items-start ml-1 w-fit">
            <input
              onChange={(e) => setTitle(e.target.value)}
              className="focus:outline-none bg-transparent border-b border-b-white dark:border-b-[#0F0F0F] focus:border-b-[#E0E0E0] dark:focus:border-b-[#282828] p-0 w-fit transition-colors duration-200 leading-3 text-black dark:text-white"
              type="text"
              value={title}
              required
            />
            <span className="text-black dark:text-white text-sm mt-1 text-opacity-60 dark:text-opacity-60">
              Last Updated &#x2022; 21-09-2022
            </span>
          </div>
        </div>
        <button
          onClick={() => setShowCoverImageModal(true)}
          className="py-2 px-4 text-center text-[10px] bg-gray-600 hover:bg-gray-700 rounded-lg"
        >
          Cover
          <br />
          Image
        </button>
        <div className="inline-flex justify-center items-center">
          <ThemeToggle />
          <PrimaryButton small handleOnClick={() => setShowPublishModal(true)}>
            Publish
          </PrimaryButton>
        </div>
      </div>
      {/* Editor */}
      <div className="inline-flex justify-center items-center w-full z-10">
        <MarkdownEditor
          markdownContent={markdownContent}
          setMarkdownContent={setMarkdownContent}
          showMarkdownPreview={showMarkdownPreview}
          setShowMarkdownPreview={setShowMarkdownPreview}
          showMarkdownGuide={showMarkdownGuide}
          setShowMarkdownGuide={setShowMarkdownGuide}
          showTOC={showTOC}
          setShowTOC={setShowTOC}
        />

        {showMarkdownPreview && (
          <MarkdownPreviewer markdownContent={markdownContent} />
        )}
        {showMarkdownGuide && (
          <MarkdownGuide setShowMarkdownGuide={setShowMarkdownGuide} />
        )}
        {showTOC && (
          <TOC markdownContent={markdownContent} setShowTOC={setShowTOC} />
        )}
      </div>
      <PublishModal
        opened={showPublishModal}
        onClose={() => setShowPublishModal(false)}
        hashnode={hashnode}
        dev={dev}
        medium={medium}
        setHashnode={setHashnode}
        setDev={setDev}
        setMedium={setMedium}
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
    </Layout>
  );
}

// export async function getServerSideProps(context) {
//   const article = await GetUniqueArticleSubscription(context.query.id);

//   return {
//     props: {
//       article: article,
//     }, // will be passed to the page component as props
//   };
// }
