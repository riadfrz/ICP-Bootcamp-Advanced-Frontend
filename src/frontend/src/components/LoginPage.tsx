import React from "react";
import { ConnectWallet } from "@nfid/identitykit/react";

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 overflow-hidden">
      <div className="text-center max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Please log in to access the app
        </h2>
        <p className="text-gray-600 mb-6">
          Connect your wallet to authenticate and access the full features of
          the app.
        </p>

        {/* Connect Wallet Button */}
        <div className="mt-6">
          <ConnectWallet />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
