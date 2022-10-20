import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

export const PrimaryButton = ({ children, handleOnClick, small }) => {
  const buttonSize = small
    ? "md:py-2 md:px-3 py-2 px-4 md:text-lg text-md rounded-lg"
    : "md:py-3 md:px-5 py-2 px-4 md:text-xl text-lg rounded-2xl";
  return (
    <button
      type="button"
      className={`group ${buttonSize} w-fit bg-purple-600  inline-flex justify-center items-center transition-all duration-200 font-extrabold text-white dark:text-black text-center hover:bg-purple-700`}
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};

export const IconButton = ({
  children,
  handleOnClick,
  darkerBg = true,
  left = false,
  center = false,
  fullCenter = false,
  tooltipText,
  topTooltip = true,
  bottomTooltip = false,
  rightToolTip = false,
  ref,
  sizeBig = false,
  colored = false,
  active,
}) => {
  const bgColor = colored
    ? "bg-[#3b82f6] hover:bg-[#3b82f6]"
    : active
    ? "bg-[#E0E0E0] dark:bg-[#282828]"
    : darkerBg
    ? "hover:bg-[#E0E0E0] dark:hover:bg-[#282828]"
    : "hover:bg-[#E7E7E7] dark:hover:bg-[#222222]";
  const margin = left
    ? "ml-2"
    : center
    ? "mx-auto"
    : fullCenter
    ? "mx-auto my-auto"
    : "mr-2";
  const tooltipPosition = topTooltip
    ? "-top-11"
    : rightToolTip
    ? "-right-24"
    : "bottom-0";
  const caretPosition = topTooltip
    ? "-bottom-3 left-0 right-0 mx-auto"
    : rightToolTip
    ? "-left-3 top-0 bottom-0 my-auto rotate-90"
    : "";

  const size = sizeBig ? "p-2 text-2xl" : "p-2 text-lg";

  return (
    <button
      ref={ref}
      type="button"
      className={`group ${size} rounded-lg w-fit h-fit inline-flex justify-center items-center transition-all duration-200 text-black dark:text-white text-center ${margin} ${bgColor}`}
      onClick={handleOnClick}
    >
      {children}
      {tooltipText && (
        <span
          className={`absolute  ${tooltipPosition} p-2 text-xs bg-[#E0E0E0] dark:bg-[#282828] rounded-xl -z-50 w-fit origin-bottom scale-90 opacity-0 group-hover:z-50 group-hover:scale-100 group-focus:hidden group-hover:opacity-100 transition-all duration-200`}
        >
          {tooltipText}
          <AiFillCaretDown
            className={`absolute ${caretPosition} text-[#E0E0E0] dark:text-[#282828] text-lg `}
          />
        </span>
      )}
    </button>
  );
};

export const ToolbarPopupButton = ({
  children,
  handleOnClick,
  darkerBg = true,
  redHover = false,
}) => {
  const bgColor = redHover
    ? "hover:bg-red-600 dark:hover:bg-red-600"
    : darkerBg
    ? "hover:bg-[#E0E0E0] dark:hover:bg-[#282828]"
    : "hover:bg-[#E7E7E7] dark:hover:bg-[#222222]";
  return (
    <button
      type="button"
      className={`group p-2 rounded-lg w-full inline-flex justify-start items-center transition-all duration-200 text-black dark:text-white text-center ${bgColor}`}
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};

export const Toggle = ({ forItem, handleOnChange, checked = false }) => {
  return (
    <label
      for={forItem}
      class="inline-flex relative items-center cursor-pointer"
    >
      <input
        type="checkbox"
        value=""
        id={forItem}
        class="sr-only peer"
        onChange={handleOnChange}
        checked={checked}
      />
      <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
    </label>
  );
};
