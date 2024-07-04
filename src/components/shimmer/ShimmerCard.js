import React from "react";

const ShimmerCard = () => {
  return (
    <div className="w-52 border border-slate-600 cursor-pointer shadow-md  overflow-hidden rounded-md ">
      <div className="w-full h-44 bg-slate-400"></div>
      <div className="p-2 flex flex-col justify-between min-h-32">
        <div>
          <h2 className="bg-slate-400 w-3/4 h-3"></h2>
          <p className="bg-slate-400 w-1/4 h-3 mt-4"></p>
        </div>
        <button className="bg-slate-400 w-full h-6 rounded-lg"></button>
      </div>
    </div>
  );
};

export default ShimmerCard;
