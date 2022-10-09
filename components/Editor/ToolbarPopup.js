const ToolbarPopup = ({ children, position, popupDisplay }) => {
  return (
    <div
      className={`absolute ${position} ${popupDisplay} w-fit h-fit  rounded-xl text-xl origin-bottom transition-all duration-100`}
    >
      {children}
    </div>
  );
};

export default ToolbarPopup;
