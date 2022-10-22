import { useTheme } from "next-themes";
import { IconButton, Toggle } from "./Buttons";
import { BsFillLightbulbFill, BsFillLightbulbOffFill } from "react-icons/bs";

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
  } else {
    return (
      <>
        <Toggle
          handleOnChange={() => setTheme("dark")}
          forItem="theme-toggle"
          checked={true}
        />
      </>
    );
  }
}

export default ThemeToggle;
