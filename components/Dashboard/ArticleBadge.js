import React from "react";
import { BsPencilSquare } from "react-icons/bs";
import { MdOutlinePublish } from "react-icons/md";

const ArticleBadge = ({ badgeType }) => {
  return (
    <div className="py-2 px-3 font-inter inline-flex justify-center items-center bg-[#F7F7F7] dark:bg-[#161616] rounded-lg">
      {badgeType === "draft" && (
        <>
          <BsPencilSquare className="my-auto" />
          <span className="ml-2">Draft</span>
        </>
      )}
      {badgeType === "published" && (
        <>
          <MdOutlinePublish className="my-auto" />
          <span className="ml-2">Published</span>
        </>
      )}
    </div>
  );
};

export default ArticleBadge;
