import React from "react";

function Header() {
  return (
    <header className="bg-gray-700 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Left Menu */}
        <ul className="flex gap-6 text-lg">
          <li>
            <a href="/" className="text-xl hover:text-sky-400">
              Form
            </a>
          </li>
          <li>
            <a href="/data" className="text-xl hover:text-sky-400">
              Data
            </a>
          </li>
        </ul>

        {/* Right Buttons */}
        <div className="flex">
          <a href="/login">
            <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg transition">
              Login
            </button>
          </a>
          <a href="/signup">
            <button className="bg-blue-500 hover:bg-blue-600 ms-3 px-4 py-2 rounded-lg transition">
              Sign Up
            </button>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
