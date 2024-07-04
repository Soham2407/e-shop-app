import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-3 px-7 sticky top-0 bg-white border z-10">
      <Link to="/" className="font-bold text-2xl">
        Shopy
      </Link>
      <input
        type="text"
        placeholder="Search"
        className="border w-1/3 py-1 px-2"
      />
      <div className="flex items-center gap-6">
        <Link className="font-semibold" to="/about">
          About
        </Link>
        <p className="font-semibold">Cart</p>
      </div>
    </div>
  );
};

export default Navbar;
