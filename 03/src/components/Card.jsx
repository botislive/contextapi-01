import React from "react";
import CardUpper from "./CardUpper";
import CardLower from "./CardLower";
import { ThemeToggleHook } from "../context/ThemeContext";
const Card = () => {
    const { theme } = ThemeToggleHook();
    return (
    <div className={`w-80 mx-auto mt-16 rounded-2xl shadow-lg overflow-hidden
                    ${theme === "dark"
                    ? "bg-gray-800 text-white"
                    : "bg-white text-gray-800"}`
                    }>

      <CardUpper />
      <CardLower />
    </div>
  );
};

export default Card;
