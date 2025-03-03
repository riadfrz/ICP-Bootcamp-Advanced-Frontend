import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-8 animate-fade-in">
      <div className="container mx-auto text-center">
        <p className="text-sm md:text-base font-medium">
          <span className="text-blue-400 hover:text-blue-300 transition-colors duration-300 cursor-pointer">
            DFINITY
          </span>
        </p>
        <p className="mt-2 text-xs text-gray-400">
          © 2025 DFINITY. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
