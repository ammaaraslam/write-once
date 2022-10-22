import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

export const PrimaryButton = ({ children, handleOnClick, small }) => {
  const buttonSize = small
    ? "md:py-2 md:px-3 py-2 px-4 md:text-lg text-md rounded-lg"
    : "md:py-3 md:px-5 py-2 px-4 md:text-xl text-lg rounded-2xl";
  return (
    <button
      type="button"
      className={`group ${buttonSize} w-fit bg-[#5f5ced]  inline-flex justify-center items-center transition-all duration-200 font-extrabold text-white dark:text-black text-center hover:shadow-[-7px_7px_0_#ffffff] dark:hover:shadow-[-7px_7px_0_#0F0F0F] hover:-translate-y-1 hover:translate-x-1`}
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};

export const PrimaryOutlineButton = ({ children, handleOnClick, small }) => {
  const buttonSize = small
    ? "md:py-2 md:px-3 py-2 px-4 md:text-lg text-md rounded-lg"
    : "md:py-3 md:px-5 py-2 px-4 md:text-xl text-lg rounded-2xl";
  return (
    <button
      type="button"
      className={`group ${buttonSize} w-fit bg-white dark:bg-[#0F0F0F] border-2 border-[#5f5ced] dark:border-[#5f5ced]  inline-flex justify-center items-center transition-all duration-200 font-extrabold text-[#5f5ced] dark:text-[#5f5ced] text-center hover:shadow-[-7px_7px_0_#5f5ced] dark:hover:shadow-[-7px_7px_0_#5f5ced] hover:-translate-y-1 hover:translate-x-1`}
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};

export const SecondaryButton = ({ children, handleOnClick, small }) => {
  const buttonSize = small
    ? "md:py-2 md:px-3 py-2 px-4 md:text-lg text-md rounded-lg"
    : "md:py-3 md:px-5 py-2 px-4 md:text-xl text-lg rounded-2xl";
  return (
    <button
      type="button"
      className={`relative group ${buttonSize} w-fit bg-[#e45301] dark:bg-[#e45301] border-2 border-[#e45301] dark:border-[#e45301]  inline-flex justify-center items-center transition-all duration-200 font-semibold text-white dark:text-black text-center  hover:shadow-[-7px_7px_0_#ffffff] dark:hover:shadow-[-7px_7px_0_#0F0F0F] hover:-translate-y-1 hover:translate-x-1`}
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};

export const SecondaryOutlinedButton = ({ children, handleOnClick, small }) => {
  const buttonSize = small
    ? "md:py-2 md:px-3 py-2 px-4 md:text-lg text-md rounded-lg"
    : "md:py-3 md:px-5 py-2 px-4 md:text-xl text-lg rounded-2xl";
  return (
    <button
      type="button"
      className={`group ${buttonSize} w-fit bg-white dark:bg-[#0F0F0F] border-2 border-[#e45301] dark:border-[#e45301]  inline-flex justify-center items-center transition-all duration-200 font-extrabold text-[#e45301] dark:text-[#e45301] text-center hover:shadow-[-7px_7px_0_#e45301] dark:hover:shadow-[-7px_7px_0_#e45301] hover:-translate-y-1 hover:translate-x-1`}
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};

export const OutlinedButton = ({ children, handleOnClick, small }) => {
  const buttonSize = small
    ? "md:py-2 md:px-3 py-2 px-4 md:text-lg text-md rounded-lg"
    : "md:py-3 md:px-5 py-2 px-4 md:text-xl text-lg rounded-2xl";
  return (
    <button
      type="button"
      className={`relative group font-bold dark:font-bold ${buttonSize} w-fit bg-transparent dark:bg-transparent border-2 border-white dark:border-[#0F0F0F]  inline-flex justify-center items-center transition-all duration-200 font-semibold text-white dark:text-black text-center hover:bg-[#5f5ced] hover:dark:bg-[#5f5ced] hover:shadow-[-7px_7px_0_#ffffff] dark:hover:shadow-[-7px_7px_0_#0F0F0F] ease-out hover:-translate-y-1 hover:translate-x-1`}
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
    ? "bg-[#5f5ced] hover:bg-[#5f5ced]"
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

  const size = sizeBig ? "p-2 md:text-2xl text-xl" : "p-2 md:text-lg";

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
      htmlFor={forItem}
      className="inline-flex relative items-center cursor-pointer"
    >
      <input
        type="checkbox"
        value=""
        id={forItem}
        className="sr-only peer"
        onChange={handleOnChange}
        checked={checked}
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#5f5ced]"></div>
    </label>
  );
};
