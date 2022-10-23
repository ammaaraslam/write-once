import { serializeFetchParameter, useMutation, useQuery } from "@apollo/client";
import { useUserId } from "@nhost/react";
import React, { useEffect, useState } from "react";
import { AiOutlineSave } from "react-icons/ai";
import {
  CREATE_USER_TOKENS,
  GET_TOKENS_WITH_USERID,
  UPDATE_USER_TOKENS,
} from "../../utils/queries/user";
import { IconButton } from "../Buttons";
import Modal from "../Modal";
import ThemeToggle from "../ThemeToggle";

const SettingsModal = ({ opened, onClose }) => {
  const [hashnodeTokenChanged, setHashnodeTokenChanged] = useState(false);
  const [userHasTokens, setUserHasTokens] = useState(false);
  const [devTokenChanged, setDevTokenChanged] = useState(false);
  const [hashnodeToken, setHashnodeToken] = useState("");
  const [devToken, setDevToken] = useState("");
  const [hashnodePublicationId, setHashnodePublicationId] = useState("");
  const [hashnodePublicationIdChanged, setHashnodePublicationIdChanged] =
    useState(false);

  const [insertTokens] = useMutation(CREATE_USER_TOKENS);
  const [updateTokens] = useMutation(UPDATE_USER_TOKENS);
  const userId = useUserId();

  const { loading, error, data } = useQuery(GET_TOKENS_WITH_USERID, {
    variables: { userId: userId },
  });
  useEffect(() => {
    setTimeout(() => {
      setHashnodeToken(
        data?.user_tokens?.length !== 0
          ? data?.user_tokens[0]?.hashnodeToken
          : ""
      );
      setDevToken(
        data?.user_tokens?.length !== 0 ? data?.user_tokens[0]?.devToken : ""
      );
    }, 2000);
  }, []);

  async function handleHashnodeInputOnChange(e) {
    setHashnodeTokenChanged(true);
    setHashnodeToken(e.target.value);
  }
  async function handleHashnodePublicationInputOnChange(e) {
    setHashnodePublicationIdChanged(true);
    setHashnodePublicationId(e.target.value);
  }

  const handleDevInputOnChange = (e) => {
    setDevTokenChanged(true);
    setDevToken(e.target.value);
  };
  async function createTokens() {
    const res = await insertTokens({
      variables: {
        hashnode: hashnodeToken,
        dev: devToken,
        hashnodePublication: hashnodePublicationId,
      },
    });
  }
  async function saveTokens() {
    const res = await updateTokens({
      variables: {
        id: data.user_tokens[0].id,
        hashnode: hashnodeToken,
        dev: devToken,
        hashnodePublication: hashnodePublicationId,
      },
    });
  }
  return (
    <Modal opened={opened} onClose={onClose}>
      <div className="w-full h-full flex flex-col justify-start items-start py-2 px-8 font-inter text-[#1C1C1C] dark:text-[#EFEFEF]">
        <h2 className="w-full font-semibold text-2xl text-black dark:text-white border-b-[1px] border-black dark:border-white border-opacity-20 dark:border-opacity-20">
          Appearance
        </h2>
        <div className="w-full inline-flex justify-between items-center my-3 pb-2">
          <span>Toggle Application Theme</span>
          <ThemeToggle />
        </div>
        {/* <div className="w-full inline-flex justify-between items-center my-2">
          <span>Choose Application Accent Color</span>
          <button>button</button>
        </div> */}
        <h2 className="w-full font-semibold text-2xl text-black dark:text-white border-b-[1px] border-black dark:border-white border-opacity-20 dark:border-opacity-20">
          Account Settings
        </h2>
        <div className="w-full flex flex-col justify-between items-start my-3">
          <span>Hashnode Access Token:</span>
          <div className="w-full inline-flex justify-center items-center">
            <input
              className="focus:outline-none rounded-lg py-2 px-3 text-sm border-[1px] border-black dark:border-white border-opacity-20 dark:border-opacity-20 focus:border-opacity-40 dark:focus:border-opacity-40 transition-colors duration-100 mt-2 w-full"
              type="password"
              value={hashnodeToken}
              onChange={handleHashnodeInputOnChange}
              required
            />
            {hashnodeTokenChanged && (
              <div className="ml-2 mt-2">
                {data?.user_tokens?.length !== 0 && (
                  <IconButton
                    handleOnClick={saveTokens}
                    colored={true}
                    sizeBig={true}
                    fullCenter={true}
                  >
                    <AiOutlineSave />
                  </IconButton>
                )}
                {data?.user_tokens?.length === 0 && (
                  <IconButton
                    handleOnClick={createTokens}
                    colored={true}
                    sizeBig={true}
                    fullCenter={true}
                  >
                    <AiOutlineSave />
                  </IconButton>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="w-full flex flex-col justify-between items-start my-3">
          <span>Hashnode Publication Id:</span>
          <div className="w-full inline-flex justify-center items-center">
            <input
              className="focus:outline-none rounded-lg py-2 px-3 text-sm border-[1px] border-black dark:border-white border-opacity-20 dark:border-opacity-20 focus:border-opacity-40 dark:focus:border-opacity-40 transition-colors duration-100 mt-2 w-full"
              type="password"
              value={hashnodePublicationId}
              onChange={handleHashnodePublicationInputOnChange}
              required
            />
            {hashnodePublicationIdChanged && (
              <div className="ml-2 mt-2">
                {data?.user_tokens?.length !== 0 && (
                  <IconButton
                    handleOnClick={saveTokens}
                    colored={true}
                    sizeBig={true}
                    fullCenter={true}
                  >
                    <AiOutlineSave />
                  </IconButton>
                )}
                {data?.user_tokens?.length === 0 && (
                  <IconButton
                    handleOnClick={createTokens}
                    colored={true}
                    sizeBig={true}
                    fullCenter={true}
                  >
                    <AiOutlineSave />
                  </IconButton>
                )}
              </div>
            )}
          </div>
        </div>

        {/* <div className="w-full flex flex-col justify-between items-start my-3">
          <span>Dev.to Access Token:</span>
          <div className="w-full inline-flex justify-center items-center">
            <input
              className="focus:outline-none rounded-lg py-2 px-3 text-sm border-[1px] border-black dark:border-white border-opacity-20 dark:border-opacity-20 focus:border-opacity-40 dark:focus:border-opacity-40 transition-colors duration-100 mt-2 w-full"
              type="password"
              value={devToken}
              onChange={handleDevInputOnChange}
              required
            />
            {devTokenChanged && (
              <div className="ml-2 mt-2">
                <IconButton
                  handleOnClick={
                    data?.user_tokens?.length !== 0 ? saveTokens : createTokens
                  }
                  colored={true}
                  sizeBig={true}
                  fullCenter={true}
                >
                  <AiOutlineSave />
                </IconButton>
              </div>
            )}
          </div>
        </div> */}
      </div>
    </Modal>
  );
};

export default SettingsModal;
