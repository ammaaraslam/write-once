import React from "react";
import { PrimaryButton, Toggle } from "../Buttons";
import Modal from "../Modal";

const PublishModal = ({
  hashnode,
  dev,
  medium,
  setHashnode,
  setDev,
  setMedium,
  opened,
  onClose,
}) => {
  return (
    <Modal opened={opened} onClose={onClose}>
      <div className="w-full h-full flex flex-col justify-start items-start py-5 px-8 font-inter font-bold text-xl">
        <div className="w-full inline-flex justify-between items-center">
          <span>Publish to Hashnode</span>
          <Toggle
            handleOnChange={() => setHashnode(!hashnode)}
            checked={hashnode}
            forItem="hashnode"
          />
        </div>
        <div className="w-full inline-flex justify-between items-center mt-4">
          <span>Publish to Dev.to</span>
          <Toggle
            handleOnChange={() => setDev(!dev)}
            checked={dev}
            forItem="dev"
          />
        </div>
        <div className="w-full inline-flex justify-between items-center mt-4">
          <span>Publish to Medium</span>
          <Toggle
            handleOnChange={() => setMedium(!medium)}
            checked={medium}
            forItem="medium"
          />
        </div>
        <div className="mt-16 w-full flex flex-col justify-center items-center">
          <span className="font-light text-sm pb-6">
            Before you publish, make sure to preview the drafts in the
            respective platforms.
          </span>
          <PrimaryButton>Publish</PrimaryButton>
        </div>
      </div>
    </Modal>
  );
};

export default PublishModal;
