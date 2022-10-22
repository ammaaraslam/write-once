import { AiFillHeart } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="w-full h-fit inline-flex justify-center items-center py-3">
      <p className="inline-flex justify-center items-center font-inter">
        Built with <AiFillHeart className="text-red-700 ml-1 mr-1" /> by{" "}
        <a
          href="https://twitter.com/itsammaar_7"
          target="_blank"
          rel="noreferrer"
          className="ml-1 underline decoration-[#e45301] hover:text-[#e45301] transition-all duration-200"
        >
          Ammaar Aslam
        </a>
      </p>
    </footer>
  );
};

export default Footer;
