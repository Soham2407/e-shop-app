import React from "react";
import { Link, useRouteError } from "react-router-dom";

const PageNotFound = () => {
  const error = useRouteError();

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-1">
      <h1 className="text-5xl font-semibold">{error.status}</h1>
      <p className="text-2xl">{error.statusText}</p>
      <Link to="/" className="text-blue-500 text-xl">
        Go back to home
      </Link>
    </div>
  );
};

export default PageNotFound;
