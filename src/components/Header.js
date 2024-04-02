import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-screen bg-gray-500 h-20 flex items-center justify-end px-10 text-white font-semibold text-2xl">
      <Link className="px-2 " to={"/"}>
        Practical
      </Link>
      <Link className="px-2 " to={"/cart"}>
        Cart
      </Link>
    </div>
  );
};

export default Header;
