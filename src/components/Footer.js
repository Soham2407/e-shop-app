import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="mt-auto flex justify-center items-center py-4 bg-white">
      <p>Copyright &copy;{year}, All rights reserved.</p>
    </div>
  );
};

export default Footer;
