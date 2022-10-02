import { useTheme } from "next-themes";
import { IoSunny } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";

function ThemeToggle() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  if (currentTheme === "dark") {
    return (
      <button
        type="button"
        onClick={() => setTheme("light")}
        className="p-2 text-xl rounded-xl text-white  hover:text-gray-800 hover:bg-white transition-all duration-200"
      >
        <IoSunny />
      </button>
    );
  }
  return (
    <button
      type="button"
      onClick={() => setTheme("dark")}
      className="p-2 text-xl rounded-xl text-black hover:text-gray-200 hover:bg-black transition-all duration-200"
    >
      <IoMoon />
    </button>
  );
}

export default ThemeToggle;
