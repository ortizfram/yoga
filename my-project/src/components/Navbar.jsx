import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed w-full text-white flex justify-between p-4 items-center">
      {/* logo */}
      <div className="text-2xl font-bold text-center uppercase border-2 p-2">
        <h1>
          K <span className="block text-4xl">M</span>
        </h1>
      </div>

      {/* nav */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/">Acerca</Link>
            <Link to="/">Talleres</Link>
            <Link to="/">Contacto</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
