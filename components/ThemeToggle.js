import { useTheme } from "next-themes";
import { IconButton, Toggle } from "./Buttons";
import { BsFillLightbulbFill, BsFillLightbulbOffFill } from "react-icons/bs";

function ThemeToggle({ icon = false }) {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  if (currentTheme === "dark") {
    if (icon) {
      return (
        <>
          <IconButton left={true} handleOnClick={() => setTheme("light")}>
            <BsFillLightbulbFill className="text-[#e45301]" />
          </IconButton>
        </>
      );
    }
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
    if (icon) {
      return (
        <div>
          <IconButton left={true} handleOnClick={() => setTheme("dark")}>
            <BsFillLightbulbOffFill className="text-[#e45301]" />
          </IconButton>
        </div>
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
}

export default ThemeToggle;
