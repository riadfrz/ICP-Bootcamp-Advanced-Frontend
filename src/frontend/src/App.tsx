import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "@nfid/identitykit/react/styles.css";
import {
  ConnectWallet,
  IdentityKitProvider,
  IdentityKitTheme,
} from "@nfid/identitykit/react";
import { IdentityKitAuthType } from "@nfid/identitykit";
import { createActor, canisterId } from "../../declarations/backend.js";
import { useNavigate } from "react-router-dom";
import LoginPage from "./components/LoginPage.js";
import RestrictedPage from "./components/RestrictedPage.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";


const App: React.FC = () => {
  return (
    <IdentityKitProvider
      authType={IdentityKitAuthType.DELEGATION}
      signerClientOptions={{
        targets: ["rrkah-fqaaa-aaaaa-aaaaq-cai"], // Replace with your canister ID
      }}
    >
      <Router>
        <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-500 via-teal-400 to-indigo-600">
          <Header />

          {/* Main Content Area */}
          <div className="flex-grow">
            <Routes>
              <Route
                path="/login"
                element={<LoginPage />}
              />
              <Route
                path="/restricted"
                element={<RestrictedPage />}
              />
              <Route
                path="/"
                element={
                  <div className="text-center mb-8 py-16 px-6">
                    <div className="max-w-6xl mx-auto px-4">
                      <h1 className="text-5xl font-bold text-white mb-4">
                        Welcome to the DFINITY App
                      </h1>
                      <p className="text-xl text-white mb-8">
                        A modern interface built with Tailwind CSS
                      </p>

                      {/* Feature Section */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
                          <h3 className="text-2xl font-semibold text-gray-800 mb-2">ICP Showcase</h3>
                          <p className="text-lg text-gray-600">
                            Discover the power of Internet Computer Protocol (ICP) and how it can scale decentralized apps.
                          </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
                          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Bootcamp</h3>
                          <p className="text-lg text-gray-600">
                            Enroll in our bootcamp to learn everything about building with the Internet Computer platform.
                          </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
                          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Features</h3>
                          <p className="text-lg text-gray-600">
                            Explore the unique features of the DFINITY app and begin your journey with the decentralized web.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              />
            </Routes>
          </div>

          <Footer />
        </div>
      </Router>
    </IdentityKitProvider>
  );
};

export default App;