import { useState, useEffect } from "react";

function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const theme = dark ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [dark]);

  return (
    <button
      type="button"
      onClick={() => setDark((previous) => !previous)}
      className="theme-toggle"
    >
      {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}

export default ThemeToggle;

