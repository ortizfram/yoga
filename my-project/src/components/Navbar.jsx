import React, { useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="p-4 h-[10vh] shadow-lg">
      {/* title & logo*/}

      <h1 className="font-bold text-3xl text-gray-700">kM.</h1>

      {/* page links */}
      <ul className="hidden sm:flex justify-center">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Classes</a>
        </li>
      </ul>

      {/* hamburguer icon */}
      <div onClick={handleNav} className="sm:hidden z-10">
        <MenuIcon className="cursor-pointer" />
      </div>

      {/* mobile menu */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "z-10 md:hidden ease-in duration-300 absolute text-gray-300 right-0 top-0 w-full h-screen bg-black/90 px-4 py-0.4 flex flex-col"
            : "z-10 absolute top-0 h-screen left-[-100%] ease-in duration-500"
        }
      >
        <ul className="h-full w-full text-center">
          <li className="text-2xl py-4">
            <a href="#home">Home</a>
          </li>
          <li className="text-2xl py-4">
            <a href="#about">About</a>
          </li>
          <li className="text-2xl py-4">
            <a href="#classes">Classes</a>
          </li>
          <li className="text-2xl py-6">
            <a href="#register">Register</a>
          </li>
          <li className="text-2xl py-6">
            <a href="#beamember">Be a member</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
