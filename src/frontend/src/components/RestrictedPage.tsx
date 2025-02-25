import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useIdentityKit } from "@nfid/identitykit/react";

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
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
      <div className="text-center max-w-lg w-full bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Welcome to the Restricted Page!
        </h2>
        <p className="text-lg text-gray-700">You are authenticated and can view this page.</p>
      </div>
    </div>
  );
};

export default RestrictedPage;
