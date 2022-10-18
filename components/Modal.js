import { IoClose } from "react-icons/io5";
import { IconButton } from "./Buttons";

const Modal = ({ opened, children, onClose, title }) => {
  const modalDisplay = opened
    ? "z-[60] scale-100 transition-all duration-200"
    : "-z-50 scale-50 transition-all duration-200";
  const modalBgDisplay = opened ? "z-50" : "-z-50";

  return (
    <>
      <div
        className={`${modalBgDisplay} flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none backdrop-blur-md`}
      />
      <div
        className={`${modalDisplay} flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none`}
      >
        <div
          className={`${modalDisplay} bg-[#EFEFEF] dark:bg-[#1C1C1C] md:w-1/2 md:h-1/2 p-4 rounded-3xl`}
        >
          {title ? (
            <div className="w-full inline-flex justify-between items-start">
              <h2>{title}</h2>
              <IconButton handleOnClick={onClose}>
                <IoClose />
              </IconButton>
            </div>
          ) : (
            <div className="w-full inline-flex justify-end items-start">
              <IconButton handleOnClick={onClose}>
                <IoClose />
              </IconButton>
            </div>
          )}
          <div className="flex flex-wrap justify-center ml-auto mr-auto overflow-auto whitespace-nowrap items-center mt-1">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
