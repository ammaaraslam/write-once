import React from "react";
import { PrimaryButton, Toggle } from "../Buttons";
import Modal from "../Modal";
import { AiOutlineCloudUpload } from "react-icons/ai";

const CoverImageModal = ({
  coverImage,
  setCoverImage,
  coverImageData,
  setCoverImageData,
  opened,
  onClose,
  coverImageLink,
}) => {
  const handleCoverImageChange = (changeEvent) => {
    const reader = new FileReader();
    setCoverImage(changeEvent.target.files[0]);
    reader.readAsDataURL(changeEvent.target.files[0]);

    reader.onload = function (onLoadEvent) {
      setCoverImageData(onLoadEvent.target.result);
    };
  };
  console.log(coverImage);

  return (
    <Modal title="Cover Image" opened={opened} onClose={onClose}>
      <div className="w-full h-full flex flex-col justify-start items-start px-8 font-inter font-bold text-xl z-50">
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
                <div className="w-5/6 mt-3 mx-auto h-5/6 inline-flex justify-center items-center">
                  <img src={coverImageData} alt="hello" />
                </div>
              </>
            )}
          </>
        ) : (
          <>
            <div className="w-5/6 mt-3 mx-auto h-5/6 inline-flex justify-center items-center">
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
        <div className="mt-4 w-full flex flex-col justify-center items-center">
          <PrimaryButton>Upload</PrimaryButton>
        </div>
      </div>
    </Modal>
  );
};

export default CoverImageModal;
