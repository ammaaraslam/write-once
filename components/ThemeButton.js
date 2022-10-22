import { useTheme } from "next-themes";
import { IconButton, Toggle } from "./Buttons";
import { BsFillLightbulbFill, BsFillLightbulbOffFill } from "react-icons/bs";

const ThemeButton = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;
      if (currentTheme === "dark") {
        return (
          <>
            <IconButton left={true} handleOnClick={() => setTheme("light")}>
              <BsFillLightbulbFill className="text-[#e45301]" />
            </IconButton>
          </>
        );
      } else {
        return (
            <>
              <IconButton left={true} handleOnClick={() => setTheme("dark")}>
                <BsFillLightbulbFill className="text-[#e45301]" />
              </IconButton>
            </>
          );
        
    }
  }

export default ThemeButton