import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-sm md:text-base">
          Powered by <span className="font-semibold text-blue-400">DFINITY</span>
        </p>
        <p className="mt-2 text-xs text-gray-400">© 2025 DFINITY. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
