import { IoClose } from "react-icons/io5";
import { IconButton } from "./Buttons";
import useOutsideClick from "./useOutsideClick";

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
        className={`${modalDisplay} flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none md:p-0 p-3`}
      >
        <div
          className={`${modalDisplay} bg-[#EFEFEF] dark:bg-[#1C1C1C] md:w-1/2 w-full h-fit 2 p-4 rounded-3xl`}
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
          <div className="flex flex-col justify-center items-center mt-1">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
