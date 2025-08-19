import { useState, useEffect } from "react";
import "../App.css";

export default function ToggleLightMode() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "Switch to Light" : "Switch to Dark"}
    </button>
  );
}
