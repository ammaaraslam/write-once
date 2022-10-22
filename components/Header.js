import { SecondaryButton } from "./Buttons";
import Logo from "./Logo";
import ThemeButton from "./ThemeButton";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <div className="w-full h-fit inline-flex justify-between items-center py-4 md:px-8 px-5">
      <Logo />
      <ThemeButton />
    </div>
  );
};

export default Header;
