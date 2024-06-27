import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-3 sticky top-0 bg-white border-b-[3px] z-10">
      <h1 className="font-bold text-2xl">Shopy</h1>
      <input
        type="text"
        placeholder="Search"
        className="border w-1/3 py-1 px-2"
      />
      <div className="flex items-center gap-6">
        <p className="font-semibold">About</p>
        <p className="font-semibold">Cart</p>
      </div>
    </div>
  );
};

export default Navbar;
