import React from "react";

const Navbar = () => {
  return (
    <div className="fixed w-full h-20 flex justify-between items-center px-4 bg-transparent">
      {/* Menu */}
      <h1 className="text-4xl font-bold">Procedural Flower</h1>
      <ul className="hidden md:flex">
        <li>
          <a href="/">Sign in</a>
        </li>
        <li>/</li>
        <li>
          <a href="/">Import JSON</a>
        </li>
        <li>
          <a href="/">Export JSON</a>
        </li>
        <li>
          <a href="/">Export OBJ</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
