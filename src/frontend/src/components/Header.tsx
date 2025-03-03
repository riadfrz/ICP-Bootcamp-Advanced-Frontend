import React from "react";
import { Link } from "react-router-dom";
import { useIdentityKit } from "@nfid/identitykit/react";

const Header: React.FC = () => {
  const { user } = useIdentityKit();
  return (
    <header className="bg-gray-900 p-4 shadow-md animate-fade-in">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold hover:text-blue-400 transition-all duration-300">
          DFINITY App
        </h1>
        <nav className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-white hover:text-blue-400 transition-all duration-300 hover:scale-105"
          >
            Home
          </Link>
          <Link
            to="/login"
            className="text-white hover:text-blue-400 transition-all duration-300 hover:scale-105"
          >
            Login
          </Link>
          <div className={`${user ? "" : "hidden"}`}>
            <Link
              to="/restricted"
              className="text-white hover:text-blue-400 transition-all duration-300 hover:scale-105"
            >
              Restricted
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
