import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import SignUpModal from "../components/SignUpModal";
import { useSignOut, useAuthenticated } from "@nhost/react";
import Header from "../components/Header";
import {
  OutlinedButton,
  PrimaryButton,
  SecondaryButton,
} from "../components/Buttons";
import { IoRocket, IoRocketOutline, IoRocketSharp } from "react-icons/io5";
import { AiFillStar, AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import Image from "next/image";
import WriteOnceEditorLight from "../public/WriteOnceEditorLight.svg";
import WriteOnceEditorDark from "../public/WriteOnceEditorDark.svg";

export default function Home() {
  const [signUp, setSignUp] = useState(false);
  const { signOut } = useSignOut();
  const isAuthenticated = useAuthenticated();

  return (
    <Layout title="WriteOnce" onlyMeta={true}>
      <div className="w-full h-screen -z-10 overflow-hidden">
        <Header />
        <div className="w-full h-[85%] flex flex-col justify-center items-start p-8 z-0">
          <div className="relative w-full h-full inline-flex justify-between items-center py-24 px-8 bg-[#5f5ced] rounded-[2.5rem] z-10">
            <div className="w-[40%] flex flex-col justify-start items-start z-30">
              <h1 className="font-inter font-black text-7xl leading-[1.1] tracking-wider uppercase">
                Not your typical markdown editor
              </h1>
              <div className="mt-8 inline-flex justify-center items-center">
                <SecondaryButton handleOnClick={() => setSignUp(true)}>
                  Get Started{" "}
                  <IoRocketSharp
                    className="absolute right-5 group-hover:block hidden transition-all duration-75 ml-2"
                    size={25}
                  />
                  <IoRocketOutline
                    className="group-hover:opacity-0 transition-all duration-75 ml-2"
                    size={25}
                  />
                </SecondaryButton>
                <div className="ml-3">
                  <OutlinedButton>
                    <a
                      href="https://github.com/ammaaraslam/write-once"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex justify-center items-center"
                    >
                      <AiOutlineStar
                        className="absolute left-5 group-hover:block hidden transition-all duration-75 mr-2"
                        size={25}
                      />
                      <AiFillStar
                        className="group-hover:opacity-0 transition-all duration-75 mr-2"
                        size={25}
                      />
                      Star On GitHub
                    </a>
                  </OutlinedButton>
                </div>
              </div>
            </div>
            <div className="z-20 absolute right-9 w-[62%] hidden dark:block">
              <div className="home-hero-image">
                <Image
                  src={WriteOnceEditorLight}
                  alt="WriteOnce Editor - Light"
                  layout="responsive"
                />
              </div>
            </div>
            <div className="z-20 absolute right-9 w-[62%] dark:hidden">
              <div className="home-hero-image">
                <Image
                  src={WriteOnceEditorDark}
                  alt="WriteOnce Editor - Light"
                  layout="responsive"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <SignUpModal opened={signUp} onClose={() => setSignUp(false)} />
    </Layout>
  );
}
