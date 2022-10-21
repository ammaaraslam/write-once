import React from "react";
import ThemeToggle from "../ThemeToggle";
import UserProfile from "../UserProfile";
import Logo from "../Logo";

const Header = () => {
  return (
    <div className="fixed w-full px-4 py-3 inline-flex justify-between items-center bg-white dark:bg-[#0F0F0F] transition-all duration-200 ease-in-out z-50">
      <Logo noText={true} small={true} />
      <UserProfile />
    </div>
  );
};

export default Header;
