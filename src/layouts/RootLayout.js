import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="container mx-auto h-screen flex flex-col">
      <Navbar />
      <div className="py-3 px-7">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
