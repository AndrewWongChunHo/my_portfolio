import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <img src={logo} alt="logo" className="w-18 h-18 object-contain" />
      </NavLink>
      <nav className="flex text-lg gap-6 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `px-7 py-2 rounded-3xl ${
              isActive ? "bg-blue-600 text-white" : "text-white"
            } 
            } transition duration-300 ease-in-out hover:bg-blue-600 `
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `px-7 py-2 rounded-3xl ${
              isActive ? "bg-blue-600 text-white" : "text-white"
            } 
            } transition duration-300 ease-in-out hover:bg-blue-600 `
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
