import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [active, setActive] = useState(false); //false cause hamburger will be hidden by default

  const showMenu = () => {
    setActive(!active); //pass default to true
  };

  return (
    <div className="fixed w-full text-white flex justify-between p-4 items-center">
      {/* logo */}
      <div className="text-2xl font-bold text-center uppercase border-2 p-2 shadow-lg bg-black/20">
        <h1>
          K <span className="block text-4xl">M</span>
        </h1>
      </div>

      {/* nav */}
      <nav>
        <div className="absolute right-7 md:hidden top-6 scale-150">
          <MenuIcon onClick={showMenu} className="scale-150 cursor-pointer" />
        </div>

        <ul className="hidden md:flex gap-8 p-6 uppercase  bg-black/30 backdrop-blur-lg">
          <li>
            <Link to="/">Inicio</Link>
            <Link to="/Acerca">Acerca</Link>
            <Link to="/">Talleres</Link>
            <Link to="/">Contacto</Link>
          </li>
        </ul>

        <MobileMenu showMenu={showMenu} active={active} />
      </nav>
    </div>
  );
};

export default Navbar;
