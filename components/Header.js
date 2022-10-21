import { SecondaryButton } from "./Buttons";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <div className="w-full h-[10%] inline-flex justify-between items-center py-4 px-8">
      <Logo />
      <ThemeToggle />
    </div>
  );
};

export default Header;
