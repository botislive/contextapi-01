import React from "react";
import { ThemeToggleHook } from "../context/ThemeContext";

const CardLower = () => {
    const { theme } = ThemeToggleHook();
  const user = {
    name: "John Doe",
    email: "john@email.com",
    role: "Frontend Developer",
    image: "https://i.pravatar.cc/150?img=12",
  };

  return (
    <div className="flex flex-col items-center p-6 {theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}">
      <img
        src={user.image}
        alt="profile"
        className="w-24 h-24 rounded-full shadow mb-3"
      />

      <h3 className="text-lg font-semibold {theme === 'dark' ? 'text-white' : 'text-gray-800'}">
        {user.name}
      </h3>

      <p className={theme === 'dark' ? 'text-white' : 'text-gray-800'}>{user.email}</p>
      <p className={theme === 'dark' ? 'text-white' : 'text-gray-800'}>{user.role}</p>
    </div>
  );
};

export default CardLower;
