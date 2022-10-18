import React from "react";
import { IconButton, PrimaryButton } from "../Buttons";
import {
  AiOutlinePlus,
  AiOutlineHistory,
  AiOutlineSetting,
} from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import { MdOutlinePublish } from "react-icons/md";
import { useRouter } from "next/router";
import { useMutation, useSubscription } from "@apollo/client";
import { useUserData } from "@nhost/react";
import {
  CREATE_ARTICLE_QUERY,
  GET_UNIQUE_ARTICLE,
} from "../../utils/queries/articles";

const Sidebar = () => {
  const router = useRouter();
  const [insertArticle] = useMutation(CREATE_ARTICLE_QUERY);

  async function handleCreateArticle() {
    const res = await insertArticle({
      variables: {
        article: {
          title: "Untitled",
          content: "",
        },
      },
    });
    router.push(`/editor/${res.data.insert_articles_one.id}`);
  }
  return (
    <div
      className={`group fixed w-fit px-2 py-5 bg-white dark:bg-[#0F0F0F] border-r border-black dark:border-white border-opacity-10 dark:border-opacity-10 top-0 h-screen dark:bg-darkBackground shadow-md flex items-start justify-center origin-left transition-all duration-200 z-10`}
    >
      <div className="pt-24 flex flex-col h-full items-start justify-between">
        <div>
          <IconButton
            colored={true}
            sizeBig={true}
            center={true}
            handleOnClick={handleCreateArticle}
          >
            <AiOutlinePlus />
          </IconButton>
          <div className="mt-5">
            <IconButton
              sizeBig={true}
              center={true}
              active={router.asPath === "/dashboard" ? true : false}
              handleOnClick={(e) => {
                e.preventDefault();
                router.push("/dashboard");
              }}
            >
              <AiOutlineHistory />
            </IconButton>
          </div>

          <div className="mt-5">
            <IconButton
              sizeBig={true}
              center={true}
              active={router.asPath === "/dashboard?drafts" ? true : false}
              handleOnClick={(e) => {
                e.preventDefault();
                router.push("?drafts");
              }}
            >
              <BsPencilSquare />
            </IconButton>
          </div>
          <div className="mt-2">
            <IconButton
              sizeBig={true}
              center={true}
              active={router.asPath === "/dashboard?published" ? true : false}
              handleOnClick={(e) => {
                e.preventDefault();
                router.push("?published");
              }}
            >
              <MdOutlinePublish />
            </IconButton>
          </div>
        </div>
        <div>
          <IconButton sizeBig={true} center={true}>
            <AiOutlineSetting />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
