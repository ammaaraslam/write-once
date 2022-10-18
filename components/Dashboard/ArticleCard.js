import React, { useState } from "react";
import { IconButton, ToolbarPopupButton } from "../Buttons";

import { BsThreeDotsVertical } from "react-icons/bs";
import ArticleBadge from "./ArticleBadge";
import ToolbarPopup from "../Editor/ToolbarPopup";
import { useMutation, useSubscription } from "@apollo/client";
import { DELETE_UNIQUE_ARTICLE } from "../../utils/queries/articles";
const ArticleCard = ({ id, title, content, isDraft }) => {
  const [articleMenuPopup, setArticleMenuPopup] = useState(false);
  const [deleteArticle] = useMutation(DELETE_UNIQUE_ARTICLE);

  async function handleDeleteArticle() {
    await deleteArticle({
      variables: {
        id: id,
      },
    });
  }
  return (
    <>
      <article className="relative w-full h-fit bg-[#EFEFEF] dark:bg-[#1C1C1C] rounded-xl py-10 px-8 font-inter mb-10 last:mb-0">
        <div className="absolute top-3 right-2 inline-flex justify-center items-start">
          <ArticleBadge badgeType={isDraft ? "draft" : "published"} />
          <IconButton
            left={true}
            handleOnClick={() => setArticleMenuPopup(!articleMenuPopup)}
          >
            <BsThreeDotsVertical />
          </IconButton>
        </div>
        <div>
          <h2 className="font-bold text-2xl">{title}</h2>
        </div>
        <div className="mt-4">
          <p className="text-lg line-clamp-4">{content}</p>
        </div>
        <ToolbarPopup
          popupDisplay={articleMenuPopup ? "scale-100" : "scale-90"}
          position="right-2 top-14"
          origin="origin-top-right"
        >
          <div
            className={`flex-col justify-center items-start p-2 rounded-xl bg-[#E7E7E7] dark:bg-[#222222] ${
              articleMenuPopup ? "flex" : "hidden"
            }`}
          >
            <ToolbarPopupButton>
              <span className="text-base">Edit</span>
            </ToolbarPopupButton>
            <ToolbarPopupButton handleOnClick={handleDeleteArticle}>
              <span className="text-base">Delete</span>
            </ToolbarPopupButton>
          </div>
        </ToolbarPopup>
      </article>
    </>
  );
};

export default ArticleCard;
