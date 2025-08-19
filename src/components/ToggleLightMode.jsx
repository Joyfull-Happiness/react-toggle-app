import { useState } from "react";
import "./App.css";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>
      <button onClick={() => setDarkMode(!darkMode)}>Toggle Theme</button>
    </div>
  );
}
