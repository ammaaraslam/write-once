import { SecondaryButton } from "./Buttons";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <div className="w-full h-[10%] inline-flex justify-between items-center py-4 px-8">
      <div>
        <span>Logo</span>
      </div>
      <ThemeToggle />
    </div>
  );
};

export default Header;
