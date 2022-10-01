import Layout from "../../components/Layout";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { IconButton, PrimaryButton } from "../../components/Buttons";

export default function Editor() {
  return (
    <Layout title="Name of article | WriteOnce" onlyMeta={true}>
      {/* Header */}
      <div className="w-full px-5 py-2 inline-flex justify-between items-center border-b-2">
        <div className="inline-flex justify-center items-center">
          <IconButton>
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
          <PrimaryButton small>Publish</PrimaryButton>
        </div>
      </div>
      {/* Editor */}
      <div className="w-full h-full flex justify-center items-center"></div>
    </Layout>
  );
}
