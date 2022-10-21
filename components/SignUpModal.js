import { useState } from "react";
import { useRouter } from "next/router";
import { useSignUpEmailPassword } from "@nhost/nextjs";
import { useProviderLink } from "@nhost/react";

import Link from "next/link";
import Image from "next/image";
import Modal from "./Modal";
import { PrimaryOutlineButton } from "./Buttons";
import { BsGoogle, BsGithub } from "react-icons/bs";

const SignUpModal = ({ opened, onClose }) => {
  const { google, github } = useProviderLink();

  return (
    <Modal opened={opened} onClose={onClose}>
      <h2 className="text-center font-inter font-bold text-2xl tracking-wide">
        You&apos;re one step away from using WriteOnce
      </h2>
      <div className="w-full flex flex-col justify-center items-center mt-1 py-9">
        <PrimaryOutlineButton>
          <BsGoogle />
          <a className="ml-2" href={google}>
            Sign In With Google
          </a>
        </PrimaryOutlineButton>
        <div className="mt-7">
          <PrimaryOutlineButton>
            <BsGithub />
            <a className="ml-2" href={github}>
              Sign In With GitHub
            </a>
          </PrimaryOutlineButton>
        </div>
      </div>
    </Modal>
  );
};

export default SignUpModal;
