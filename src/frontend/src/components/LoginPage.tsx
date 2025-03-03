import React, { useEffect, useState } from "react";
import { AuthClient } from "@dfinity/auth-client";
import { ConnectWallet, useIdentity } from "@nfid/identitykit/react"; // Keep this!

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r  from-blue-300 via-blue-100 to-blue-300">
      <div className="text-center max-w-lg w-full bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in">
          Authenticate to Continue
        </h2>
        <p className="text-gray-600 mb-6">
          Connect your wallet to access exclusive features and restricted
          content.
        </p>
        <ConnectWallet />
      </div>
    </div>
  );
};

export default LoginPage;
