import React, { useRef, useState } from "react";
import { useUserData } from "@nhost/react";
import { useAuthenticationStatus } from "@nhost/react";
import useOutsideClick from "./useOutsideClick";
import ToolbarPopup from "./Editor/ToolbarPopup";
import { ToolbarPopupButton } from "./Buttons";
import { AiOutlinePlus } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import { MdOutlinePublish, MdSpaceDashboard } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { CREATE_ARTICLE_QUERY } from "../utils/queries/articles";
import { useSignOut } from "@nhost/react";

const UserProfile = () => {
  const { isAuthenticated, isLoading } = useAuthenticationStatus();
  const { signOut } = useSignOut();

  const userData = useUserData();
  const [userProfileDropdown, setUserProfileDropdown] = useState(false);
  const ref = useRef();
  const router = useRouter();

  useOutsideClick(ref, () => {
    setUserProfileDropdown(false);
  });
  const [insertArticle] = useMutation(CREATE_ARTICLE_QUERY);

  async function handleCreateArticle() {
    setUserProfileDropdown(false);
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
    <>
      {isAuthenticated && (
        <div ref={ref}>
          <button
            className="w-10 h-10 rounded-full"
            onClick={() => setUserProfileDropdown(!userProfileDropdown)}
          >
            <img
              src={userData.avatarUrl}
              alt={`${userData.displayName}'s avatar`}
              className="w-full h-full rounded-full"
            />
          </button>
          <ToolbarPopup
            popupDisplay={userProfileDropdown ? "scale-100" : "scale-90"}
            position="right-3 top-16"
            origin="origin-top-right"
          >
            <div
              className={`flex-col justify-center items-start p-2 rounded-xl bg-[#E7E7E7] dark:bg-[#222222] ${
                userProfileDropdown ? "flex" : "hidden"
              }`}
            >
              <ToolbarPopupButton
                handleOnClick={() => {
                  router.push("/dashboard");
                  setUserProfileDropdown(false);
                }}
              >
                <MdSpaceDashboard />{" "}
                <span className="ml-2 text-base">Dashboard</span>
              </ToolbarPopupButton>
              <hr className="w-full mt-2 mb-3 border-[#222222] dark:border-[#E7E7E7] border-opacity-20 dark:border-opacity-20" />
              <ToolbarPopupButton handleOnClick={handleCreateArticle}>
                <AiOutlinePlus />{" "}
                <span className="ml-2 text-base">Create Article</span>
              </ToolbarPopupButton>

              <ToolbarPopupButton
                handleOnClick={() => {
                  router.push("/dashboard?drafts");
                  setUserProfileDropdown(false);
                }}
              >
                <BsPencilSquare />{" "}
                <span className="ml-2 text-base">My Drafts</span>
              </ToolbarPopupButton>
              <ToolbarPopupButton
                handleOnClick={() => {
                  router.push("/dashboard?published");
                  setUserProfileDropdown(false);
                }}
              >
                <MdOutlinePublish />{" "}
                <span className="ml-2 text-base pr-3">Published Articles</span>
              </ToolbarPopupButton>
              <hr className="w-full mt-3 mb-2 border-[#222222] dark:border-[#E7E7E7] border-opacity-20 dark:border-opacity-20" />

              <ToolbarPopupButton
                handleOnClick={() => {
                  router.push("/");
                  signOut();
                  setUserProfileDropdown(false);
                }}
                redHover={true}
              >
                <FiLogOut /> <span className="ml-2 text-base">Sign Out</span>
              </ToolbarPopupButton>
            </div>
          </ToolbarPopup>
        </div>
      )}
    </>
  );
};

export default UserProfile;
