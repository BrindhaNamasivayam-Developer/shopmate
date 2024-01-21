import { useEffect, useState } from "react";

const Header = () => {
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("colors")) || "medium");

  useEffect(() => {
    localStorage.setItem("colors", JSON.stringify(theme));
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <header>
      <div>
        <span>
          Task Mate
        </span>
      </div>
      <div className="themeSelector">
        <span onClick={() => setTheme("light")} className={theme === "light" ? "light activeTheme" : "light"}></span>
        <span onClick={() => setTheme("dark")} className={theme === "dark" ? "dark activeTheme" : "dark"}></span>
        <span onClick={() => setTheme("medium")} className={theme === "medium" ? "medium activeTheme" : "medium"}></span>
        <span onClick={() => setTheme("gradientOne")} className={theme === "gradientOne" ? "gradientOne activeTheme" : "gradientOne"}></span>
        <span onClick={() => setTheme("gradientTwo")} className={theme === "gradientTwo" ? "gradientTwo activeTheme" : "gradientTwo"}></span>
        <span onClick={() => setTheme("gradientThree")} className={theme === "gradientThree" ? "light gradientThree" : "gradientThree"}></span>
      </div>
    </header>
  )
}
export default Header;