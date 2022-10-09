import { useTheme } from "next-themes";
import { IoSunny } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import { Toggle } from "./Buttons";

function ThemeToggle() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  if (currentTheme === "dark") {
    return (
      <>
        <Toggle
          handleOnChange={() => setTheme("light")}
          forItem="theme-toggle"
          checked={true}
        />
      </>
    );
  }
  return (
    <>
      <Toggle
        handleOnChange={() => setTheme("dark")}
        forItem="theme-toggle"
        checked={false}
      />
    </>
  );
}

export default ThemeToggle;
