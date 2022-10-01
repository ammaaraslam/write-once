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

export const IconButton = ({ children, handleOnClick }) => {
  return (
    <button
      type="button"
      className={`group py-2 px-4 w-fit bg-purple-600  inline-flex justify-center items-center transition-all duration-200 font-extrabold text-white dark:text-black text-center hover:bg-purple-700`}
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};
