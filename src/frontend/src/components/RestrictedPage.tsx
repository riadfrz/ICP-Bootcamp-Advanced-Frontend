import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ConnectWallet, useIdentityKit } from "@nfid/identitykit/react";
import { getUserId } from "../../../declarations/backend.js";

const RestrictedPage: React.FC = () => {
  const { user } = useIdentityKit();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login"); // Redirect to login if not authenticated
    }
  }, [user, navigate]);

  if (!user) {
    return <div className="text-center">Loading...</div>; // Optionally, show a loading spinner while checking auth
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r  from-blue-300 via-blue-100 to-blue-300">
      <div className="text-center max-w-lg w-full bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Welcome to the Restricted Page!
        </h2>
        <p className="text-lg text-gray-700">
          You are authenticated and can view this page.
        </p>
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Your Profile
          </h1>

          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h2 className="text-lg font-medium text-gray-700 mb-2">
                User Principal
              </h2>
              <p className="text-sm text-gray-800 break-all font-mono">
                {user.principal.toString()}
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h2 className="text-lg font-medium text-gray-700 mb-2">
                Account ID
              </h2>
              <p className="text-sm text-gray-800 break-all font-mono">
                {getUserId(user.principal.toString())}{" "}
              </p>
            </div>
            <ConnectWallet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestrictedPage;
