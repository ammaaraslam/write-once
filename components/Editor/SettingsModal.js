import React from "react";
import Modal from "../Modal";

const SettingsModal = ({ opened, onClose }) => {
  return (
    <Modal opened={opened} onClose={onClose}>
      <div className="w-full h-full flex flex-col justify-start items-start py-5 px-8">
        <div className="w-full inline-flex justify-between items-center">
          <span>Change theme to dark mode</span>
          <button>button</button>
        </div>
        <div className="w-full inline-flex justify-between items-center">
          <span>hIDE tOOLBAR AFTER</span>
          <button>button</button>
        </div>
        <div className="w-full inline-flex justify-between items-center">
          <span>Permanently hide toolbar</span>
          <button>button</button>
        </div>
        <div className="w-full inline-flex justify-between items-center">
          <span>Chagne color scheme</span>
          <button>button</button>
        </div>
        <div className="w-full inline-flex justify-between items-center">
          <span>Auto scroll/not</span>
          <button>button</button>
        </div>
        <div className="w-full inline-flex justify-between items-center">
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
        </div>
      </div>
    </Modal>
  );
};

export default SettingsModal;
