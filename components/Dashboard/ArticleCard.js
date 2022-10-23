import React, { useState, useEffect, useRef } from "react";
import { IconButton, ToolbarPopupButton } from "../Buttons";

import { BsThreeDotsVertical } from "react-icons/bs";
import ArticleBadge from "./ArticleBadge";
import ToolbarPopup from "../Editor/ToolbarPopup";
import { useMutation, useSubscription } from "@apollo/client";
import { DELETE_UNIQUE_ARTICLE } from "../../utils/queries/articles";
import { useRouter } from "next/router";
import { BiEditAlt, BiTrash } from "react-icons/bi";
import useOutsideClick from "../useOutsideClick";

const ArticleCard = ({
  id,
  title,
  content,
  isDraft,
  isPublished,
  userArticles,
  setUserArticles,
}) => {
  const [articleMenuPopup, setArticleMenuPopup] = useState(false);
  const [deleteArticle] = useMutation(DELETE_UNIQUE_ARTICLE);
  const router = useRouter();

  async function handleDeleteArticle() {
    setUserArticles(userArticles.filter((article) => article.id !== id));
    setArticleMenuPopup(false);
    await deleteArticle({
      variables: {
        id: id,
      },
    });
  }

  const ref = useRef();

  useOutsideClick(ref, () => {
    setArticleMenuPopup(false);
  });

  return (
    <>
      <article className="relative w-full h-fit bg-[#EFEFEF] dark:bg-[#1C1C1C] rounded-xl py-10 px-8 font-inter mb-10 last:mb-0 hover:scale-[1.02] transition-all duration-200">
        <div className="absolute top-3 right-2 inline-flex justify-center items-start ">
          {isDraft && <ArticleBadge badgeType="draft" />}
          {isPublished && <ArticleBadge badgeType="published" />}

          <div ref={ref}>
            <IconButton
              left={true}
              handleOnClick={() => setArticleMenuPopup(!articleMenuPopup)}
            >
              <BsThreeDotsVertical />
            </IconButton>

            <ToolbarPopup
              popupDisplay={articleMenuPopup ? "scale-100" : "scale-90"}
              position="right-0 top-11"
              origin="origin-top-right"
            >
              <div
                className={`flex-col justify-center items-start p-2 rounded-xl bg-[#E7E7E7] dark:bg-[#222222] ${
                  articleMenuPopup ? "flex" : "hidden"
                }`}
              >
                <ToolbarPopupButton>
                  <BiEditAlt />{" "}
                  <span className="ml-2 text-base pr-5">Edit</span>
                </ToolbarPopupButton>
                <ToolbarPopupButton
                  redHover={true}
                  handleOnClick={handleDeleteArticle}
                >
                  <BiTrash />{" "}
                  <span className="ml-2 text-base pr-5">Delete</span>
                </ToolbarPopupButton>
              </div>
            </ToolbarPopup>
          </div>
        </div>
        <div
          className="hover:cursor-pointer"
          onClick={() => {
            setArticleMenuPopup(false);
            router.push(`/editor/${id}`);
          }}
        >
          <h2 className="font-bold text-2xl tracking-wide">{title}</h2>
          <div className="mt-4">
            <p className="text-lg line-clamp-4">{content}</p>
          </div>
        </div>
      </article>
    </>
  );
};

export default ArticleCard;
