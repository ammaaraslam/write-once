import Image from "next/image";
import WriteOnceLogo from "../public/WriteOnceLogo.svg";
import WriteOnceLogoInverse from "../public/WriteOnceLogoInverse.svg";

import Link from "next/link";

const Logo = ({ noText = false, small = false }) => {
  return (
    <>
      <Link href="/">
        <a className="group relative inline-flex justify-center items-end text-[#e45301] hover:text-[#5f5ced] transition-all duration-150">
          <div
            className={`${
              small ? "md:w-10 md:h-10 w-9 h-9" : "md:w-14 md:h-14 w-11 h-11"
            }  opacity-100 group-hover:opacity-0 transition-all duration-300`}
          >
            <Image
              src={WriteOnceLogo}
              alt="WriteOnce Logo"
              layout="responsive"
            />
          </div>
          <div
            className={`absolute opacity-0 group-hover:opacity-100 transition-all duration-300 left-0 ${
              small ? "md:w-10 md:h-10 w-9 h-9" : "md:w-14 md:h-14 w-11 h-11"
            }`}
          >
            <Image
              src={WriteOnceLogoInverse}
              alt="WriteOnce Logo Inverse"
              layout="responsive"
            />
          </div>
          {!noText && (
            <span className="font-lato ml-3 md:text-3xl text-xl font-bold tracking-wider">
              WriteOnce
            </span>
          )}
        </a>
      </Link>
    </>
  );
};

export default Logo;
