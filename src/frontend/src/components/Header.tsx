import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-semibold">DFINITY App</h1>
        <nav>
          <Link
            to="/"
            className="text-white hover:text-blue-400 transition duration-300 mr-6"
          >
            Home
          </Link>
          <Link
            to="/login"
            className="text-white hover:text-blue-400 transition duration-300 mr-6"
          >
            Login
          </Link>
          <Link
            to="/restricted"
            className="text-white hover:text-blue-400 transition duration-300"
          >
            Restricted
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
