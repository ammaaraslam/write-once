import { SecondaryButton } from "./Buttons";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <div className="w-full h-fit inline-flex justify-between items-center py-4 md:px-8 px-5">
      <Logo />
      <ThemeToggle icon={true} />
    </div>
  );
};

export default Header;
