import { useQuery } from "@apollo/client";
import { useUserId } from "@nhost/react";
import React from "react";
import publishToHashnode from "../../services/publish/publishToHashnode";
import { PrimaryButton, Toggle } from "../Buttons";
import Modal from "../Modal";
import { GET_TOKENS_WITH_USERID } from "../../utils/queries/user";

const PublishModal = ({
  hashnode,
  dev,
  medium,
  setHashnode,
  setDev,
  setMedium,
  opened,
  onClose,
  title,
  content,
}) => {
  const userId = useUserId();

  const { loading, error, data } = useQuery(GET_TOKENS_WITH_USERID, {
    variables: { userId: userId },
  });
  console.log(data);

  async function publishArticle() {
    await publishToHashnode({
      userAccessToken: data?.user_tokens[0]?.hashnodeToken,
      publicationId: "data?.user_tokens[0]?.hashnodePublicationId",
      title: title,
      content: content,
    });
  }
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
          <PrimaryButton handleOnClick={publishArticle}>Publish</PrimaryButton>
        </div>
      </div>
    </Modal>
  );
};

export default PublishModal;
