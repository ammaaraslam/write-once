import React, { useState } from "react";
import {
  IconButton,
  OutlinedButton,
  PrimaryButton,
  SecondaryButton,
  SecondaryOutlinedButton,
  Toggle,
} from "../Buttons";
import Modal from "../Modal";
import { AiOutlineCloudUpload } from "react-icons/ai";
import imageUpload from "../../services/imageUpload";
import { useFileUpload } from "@nhost/react";
import nhost from "../../utils/nhost";
import { useMutation } from "@apollo/client";
import { UPDATE_UNIQUE_ARTICLE_COVER_IMAGE } from "../../utils/queries/articles";
import { useRouter } from "next/router";
import { IoCloseSharp } from "react-icons/io5";
import { CgSpinner } from "react-icons/cg";
const CoverImageModal = ({
  coverImage,
  setCoverImage,
  coverImageData,
  setCoverImageData,
  opened,
  onClose,
  coverImageLink,
}) => {
  const [uploading, setUploading] = useState(false);
  const handleCoverImageChange = (changeEvent) => {
    const reader = new FileReader();
    setCoverImage(changeEvent.target.files[0]);
    reader.readAsDataURL(changeEvent.target.files[0]);

    reader.onload = function (onLoadEvent) {
      setCoverImageData(onLoadEvent.target.result);
    };
  };
  const { upload } = useFileUpload();
  const [updateUniqueArticleCoverImage] = useMutation(
    UPDATE_UNIQUE_ARTICLE_COVER_IMAGE
  );
  const articleId = useRouter().query.id;
  async function coverImageUpload() {
    setUploading(true);
    const uploadedImage = await upload({
      file: coverImage,
      bucketId: "coverImages",
    });
    const publicUrl = nhost.storage.getPublicUrl({ fileId: uploadedImage.id });
    await updateUniqueArticleCoverImage({
      variables: {
        id: articleId,
        coverImageLink: publicUrl,
      },
    });
    if (uploadedImage.isUploaded) {
      setCoverImage(publicUrl);
      setUploading(false);
      onClose();
    }
  }
  return (
    <Modal title="Cover Image" opened={opened} onClose={onClose}>
      <div className="w-full h-full flex flex-col justify-start items-start py-12 px-8 font-inter font-bold text-xl z-50">
        {typeof coverImage !== "string" ? (
          <>
            {coverImageData === null && (
              <>
                <label
                  htmlFor="dropzone-image"
                  className="w-full mt-3 h-full inline-flex justify-center items-center border-2 border-dashed text-[#282828] dark:text-[#E0E0E0] border-[#282828] dark:border-[#E0E0E0] pt-9 pb-11 rounded-xl text-base font-normal hover:bg-[#282828] dark:hover:bg-[#E0E0E0] hover:bg-opacity-10 dark:hover:bg-opacity-10 transition-all duration-75 hover:cursor-pointer"
                >
                  <div className="flex flex-col justify-center items-center">
                    <AiOutlineCloudUpload size={50} />{" "}
                    <span className="mb-2 text-sm font-semibold">
                      Click to upload
                    </span>
                    <p className="text-xs">
                      (Recommended dimenstion: 1600 x 840)
                    </p>
                  </div>
                  <input
                    id="dropzone-image"
                    type="file"
                    className="hidden"
                    onChange={handleCoverImageChange}
                  />
                </label>
              </>
            )}
            {coverImageData !== null && (
              <>
                <div className="relative w-5/6 mt-3 mx-auto h-5/6 inline-flex justify-center items-center">
                  <div className="absolute top-2 right-2">
                    <IconButton>
                      <IoCloseSharp />
                    </IconButton>
                  </div>
                  <img src={coverImageData} alt="hello" />
                </div>
              </>
            )}
          </>
        ) : (
          <>
            <div className="relative w-5/6 mt-3 mx-auto h-5/6 inline-flex justify-center items-center">
              <div className="absolute top-2 right-2">
                <IconButton
                  handleOnClick={() => {
                    setCoverImage(null);
                    setCoverImageData(null);
                  }}
                >
                  <IoCloseSharp />
                </IconButton>
              </div>

              <img src={coverImage} alt="hello" />
            </div>
          </>
        )}
        {/* {coverImageData ? (
          <div className="w-5/6 mt-3 mx-auto h-5/6 inline-flex justify-center items-center">
            <img src={coverImageData} alt="hello" />
          </div>
        ) : (
          <label
            htmlFor="dropzone-image"
            className="w-full mt-3 h-full inline-flex justify-center items-center border-2 border-dashed text-[#282828] dark:text-[#E0E0E0] border-[#282828] dark:border-[#E0E0E0] pt-9 pb-11 rounded-xl text-base font-normal hover:bg-[#282828] dark:hover:bg-[#E0E0E0] hover:bg-opacity-10 dark:hover:bg-opacity-10 transition-all duration-75 hover:cursor-pointer"
          >
            <div className="flex flex-col justify-center items-center">
              <AiOutlineCloudUpload size={50} />{" "}
              <span className="mb-2 text-sm font-semibold">
                Click to upload
              </span>
              <p className="text-xs">(Recommended dimenstion: 1600 x 840)</p>
            </div>
            <input
              id="dropzone-image"
              type="file"
              className="hidden"
              onChange={handleCoverImageChange}
            />
          </label>
        )} */}
        {coverImage && coverImageData && (
          <div className="mt-5 pt-5 w-full flex flex-col justify-center items-center">
            <SecondaryOutlinedButton
              inverse={true}
              handleOnClick={coverImageUpload}
            >
              Upload {uploading && <CgSpinner className="ml-2 animate-spin" />}
            </SecondaryOutlinedButton>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default CoverImageModal;
