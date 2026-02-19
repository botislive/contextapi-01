import React, { useState } from "react";
import { ThemeToggleHook } from "../context/ThemeContext";
const CardUpper = () => {
  const [dark, setDark] = useState(false);
  const { theme,setTheme } = ThemeToggleHook();
  console.log(theme);

  const toggleTheme = () => {
    setDark(!dark);
    setTheme(dark ? "light" : "dark");   
  };

  return (
    <div className="flex items-center justify-between px-5 py-4 {theme === 'dark' ? 'bg-gray-800' : 'bg-white'} border-b">
      <h2 className="text-xl font-semibold {theme === 'dark' ? 'text-white' : 'text-gray-800'}">
        User Profile
      </h2>

      <button
        onClick={toggleTheme}
        className="px-3 py-1 text-sm font-medium border rounded-lg hover:{theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'} transition-colors"
      >
        {dark ? "Light Mode ☀️" : "Dark Mode 🌙"}
      </button>
    </div>
  );
};

export default CardUpper;
