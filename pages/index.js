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
import { useRouter } from "next/router";
import Footer from "../components/Footer";

export default function Home() {
  const [signUp, setSignUp] = useState(false);
  const router = useRouter();

  const isAuthenticated = useAuthenticated();
  if (isAuthenticated) {
    router.push("/dashboard");
    return null;
  }
  return (
    <Layout
      title="WriteOnce | A Markdown Editor For Developers Who Blog"
      onlyMeta={true}
    >
      <div className="w-full h-fit -z-10">
        <Header />
        <div className="w-full h-fit flex flex-col justify-center items-center md:p-8 p-0 z-0">
          <div className="relative w-full h-full flex flex-col justify-center items-center xl:p-20 lg:p-16 md:p-12 p-6 pt-16 bg-[#5f5ced] md:rounded-[2.5rem] z-10 overflow-clip">
            <div className="w-full flex flex-col justify-center items-center mt-4 z-30">
              <h1 className="font-passion font-black xl:text-[7rem] lg:text-[6rem] md:text-[4.8rem] text-[4rem] text-white dark:text-[#0F0F0F] leading-[1.1] tracking-widest uppercase text-center">
                Not your typical markdown editor
              </h1>
              <div className="mt-8 md:inline-flex md:flex-row flex flex-col justify-center items-center">
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
                <div className="md:ml-5 ml-0 md:mt-0 mt-5">
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
            <div className="md:mt-16 mt-10 w-full h-full -z-20 hidden dark:block">
              <Image
                src={WriteOnceEditorDark}
                alt="WriteOnce Editor - Light"
                layout="responsive"
              />
            </div>
            <div className="md:mt-16 mt-10 w-full h-full -z-20 dark:hidden">
              <Image
                src={WriteOnceEditorLight}
                alt="WriteOnce Editor - Light"
                layout="responsive"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <SignUpModal opened={signUp} onClose={() => setSignUp(false)} />
    </Layout>
  );
}
