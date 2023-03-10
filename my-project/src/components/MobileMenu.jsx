import React from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

const MobileMenu = ({ showMenu, active }) => {
  return (
    <ul
      className={
        active
          ? "flex-col flex items-center fixed inset-0 left-1/4 uppercase gap-8 bg-black/40 backdrop-blur-lg justify-center p-8 md:hidden"
          : "hidden"
      }
    >
      <li>
        <CloseIcon onClick={showMenu} className="cursor-pointer scale-150" />
      </li>
      <li>
        <Link to="/">Inicio</Link>
      </li>
      <li>
        <Link to="/">Acerca</Link>
      </li>
      <li>
        <Link to="/">Talleres</Link>
      </li>
      <li>
        <Link to="/">Contacto</Link>
      </li>
    </ul>
  );
};

export default MobileMenu;
