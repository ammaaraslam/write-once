import React, { useState } from "react";
import { AiOutlineSave } from "react-icons/ai";
import { IconButton, Toggle } from "../Buttons";
import Modal from "../Modal";
import ThemeToggle from "../ThemeToggle";

const SettingsModal = ({
  opened,
  onClose,
  showToolbar,
  setShowToolbar,
  scrollSync,
  setScrollSync,
  canonicalLink,
  setCanonicalLink,
}) => {
  const [canonicalChanged, setCanonicalChanged] = useState(false);

  function handleCanonicalChange(e) {
    setCanonicalChanged(true);
    setCanonicalLink(e.target.value);
  }

  return (
    <Modal opened={opened} onClose={onClose}>
      <div className="w-full h-full flex flex-col justify-start items-start py-5 px-8">
        <h2 className="w-full font-semibold text-2xl text-black dark:text-white border-b-[1px] border-black dark:border-white border-opacity-20 dark:border-opacity-20">
          Settings
        </h2>

        <div className="w-full inline-flex justify-between items-center my-3 pt-6 pb-2">
          <span>Toggle Application Theme</span>
          <ThemeToggle />
        </div>
        <div className="w-full inline-flex justify-between items-center my-3 pb-2 capitalize">
          <span>Hide toolbar</span>
          <Toggle
            forItem="hide-toolbar"
            checked={showToolbar}
            handleOnChange={() => setShowToolbar(!showToolbar)}
          />
        </div>
        <div className="w-full inline-flex justify-between items-center my-3 pb-2 capitalize">
          <span>Enable scroll sync on editor and previewer</span>
          <Toggle
            forItem="scroll-sync"
            checked={scrollSync}
            handleOnChange={() => setScrollSync(!scrollSync)}
          />
        </div>
        {/* <div className="w-full flex flex-col justify-between items-start my-3">
          <span>Set Canonical URL:</span>
          <div className="w-full inline-flex justify-center items-center">
            <input
              className="focus:outline-none rounded-lg py-2 px-3 text-sm border-[1px] border-black dark:border-white border-opacity-20 dark:border-opacity-20 focus:border-opacity-40 dark:focus:border-opacity-40 transition-colors duration-100 mt-2 w-full"
              type="password"
              value={canonicalLink}
              onChange={handleCanonicalChange}
              required
            />
            {canonicalChanged && (
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
        {/* <div className="w-full inline-flex justify-between items-center">
          <span>Enable grammarly</span>
          <button>button</button>
        </div>
        <div className="w-full inline-flex justify-between items-center">
          <span>Show/hide word count</span>
          <button>button</button>
        </div>
        <div className="w-full inline-flex justify-between items-center">
          <span>Enable/disable focus mode</span>
          <button>button</button>
        </div> */}
      </div>
    </Modal>
  );
};

export default SettingsModal;
