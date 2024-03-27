import React, { useEffect, useState } from "react";
import darkMode from "../../assets/website/dark-mode-button.png";
import LightMode from "../../assets/website/light-mode-button.png";
const DarkMode = () => {
  const [dark, setdark] = useState(true);
  const [theme, settheme] = useState(
    localStorage.getItem("currentValue") ?? "dark"
  );
  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <div>
      <button
        className="w-12 py-4 cursor-pointer drop-shadow-[1px_1px_1px_rgpa(0,0,0,0.1)] transition-all duration-300  "
        onClick={() => {
          setdark(!dark);
          localStorage.setItem(
            "currentValue",
            theme === "dark" ? "light" : "dark"
          );
          settheme(localStorage.getItem("currentValue"));
        }}
      >
        {" "}
        <img src={theme === "light" ? darkMode : LightMode} alt="" srcset="" />
      </button>
    </div>
  );
};

export default DarkMode;
