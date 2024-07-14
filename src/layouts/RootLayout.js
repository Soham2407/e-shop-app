import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";

const RootLayout = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <div className="container mx-auto h-screen flex flex-col">
      {!onlineStatus ? (
        <div className="w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-4xl font-semibold">You're Offline</h1>
          <p className="text-xl">Please, check your internet connection</p>
        </div>
      ) : (
        <>
          <Navbar />
          <div className="py-3 px-7">
            <Outlet />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default RootLayout;
