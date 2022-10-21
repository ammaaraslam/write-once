import React from "react";
import { Toggle } from "../Buttons";
import Modal from "../Modal";
import ThemeToggle from "../ThemeToggle";

const SettingsModal = ({
  opened,
  onClose,
  showToolbar,
  setShowToolbar,
  scrollSync,
  setScrollSync,
}) => {
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
