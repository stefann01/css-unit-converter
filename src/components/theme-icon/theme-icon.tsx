import React from "react";
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { useThemeContext } from "../../context/theme-context";
import Theme from "../../Theme/themes.enum";

export default function ThemeIcon() {
  const { theme, setTheme } = useThemeContext();
  return (
    <span style={{ display: "flex", marginLeft: "auto" }}>
      {theme === Theme.Dark ? (
        <FiSun
          className="settingsIcon"
          onClick={() => {
            setTheme(Theme.Light);
          }}
        />
      ) : (
        <FaMoon
          className="settingsIcon"
          onClick={() => {
            setTheme(Theme.Dark);
          }}
        />
      )}
    </span>
  );
}
