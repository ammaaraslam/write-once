const ToolbarPopup = ({ children, position, popupDisplay, origin }) => {
  return (
    <div
      className={`absolute ${position} ${popupDisplay} w-fit h-fit  rounded-xl text-xl ${
        origin ? origin : "origin-bottom"
      } transition-all duration-100 `}
    >
      {children}
    </div>
  );
};

export default ToolbarPopup;
