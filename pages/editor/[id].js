import Layout from "../../components/Layout";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { IconButton, PrimaryButton } from "../../components/Buttons";
import MarkdownEditor from "../../components/Editor/MarkdownEditor";
import MarkdownPreviewer from "../../components/Editor/MarkdownPreviewer";
import { useState } from "react";
import ThemeToggle from "../../components/ThemeToggle";

export default function Editor() {
  const [markdownContent, setMarkdownContent] = useState("");
  const [showMarkdownPreview, setShowMarkdownPreview] = useState(false);
  return (
    <Layout title="Name of article | WriteOnce" onlyMeta={true}>
      {/* Header */}
      <div className="w-full px-5 py-2 inline-flex justify-between items-center bg-white dark:bg-[#0F0F0F]">
        <div className="inline-flex justify-center items-center">
          <IconButton darkerBg={false}>
            <HiOutlineArrowLeft />
          </IconButton>
          <div className="flex flex-col justify-center items-start ml-3">
            <h2 className="font-semibold text-gray-800 text-lg">
              Title of the article/blog
            </h2>
            <span className="font-light text-gray-400 text-sm">
              created date of article/blog
            </span>
          </div>
        </div>
        <div className="inline-flex justify-center items-center">
          <ThemeToggle />
          <PrimaryButton small>Publish</PrimaryButton>
        </div>
      </div>
      {/* Editor */}
      {!showMarkdownPreview && (
        <MarkdownEditor
          markdownContent={markdownContent}
          setMarkdownContent={setMarkdownContent}
        />
      )}

      {showMarkdownPreview && (
        <MarkdownPreviewer markdownContent={markdownContent} />
      )}
    </Layout>
  );
}
