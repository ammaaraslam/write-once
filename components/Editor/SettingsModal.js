import React from "react";
import { Toggle } from "../Buttons";
import Modal from "../Modal";
import ThemeToggle from "../ThemeToggle";

const SettingsModal = ({ opened, onClose, showToolbar, setShowToolbar }) => {
  return (
    <Modal opened={opened} onClose={onClose}>
      <div className="w-full h-full flex flex-col justify-start items-start py-5 px-8">
        <div className="w-full inline-flex justify-between items-center my-3 pb-2">
          <span>Toggle Application Theme</span>
          <ThemeToggle />
        </div>
        <div className="w-full inline-flex justify-between items-center my-3 pb-2">
          <span>Hide toolbar</span>
          <Toggle
            forItem="hide-toolbar"
            checked={showToolbar}
            handleOnChange={() => setShowToolbar(false)}
          />
        </div>
        <div className="w-full inline-flex justify-between items-center my-3 pb-2">
          <span>Automatically hide toolbar</span>
          <ThemeToggle />
        </div>

        <div className="w-full inline-flex justify-between items-center my-3 pb-2">
          <span>Enable autoscroll</span>
          <ThemeToggle />
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
