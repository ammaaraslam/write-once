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

export const IconButton = ({ children, handleOnClick, darkerBg = true }) => {
  const bgColor = darkerBg
    ? "hover:bg-[#E0E0E0] dark:hover:bg-[#282828]"
    : "hover:bg-[#E7E7E7] dark:hover:bg-[#222222]";
  return (
    <button
      type="button"
      className={`group p-2 rounded-lg w-fit inline-flex justify-center items-center transition-all duration-200 font-extrabold text-black dark:text-white text-center mr-2 last:mr-0 ${bgColor}`}
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};
