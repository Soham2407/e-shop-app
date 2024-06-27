import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="max-w-[1440px] h-screen mx-auto flex flex-col">
      <Navbar />
      <div className="py-3">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
