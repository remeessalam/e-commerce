import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <header className="bg-black/60 backdrop-blur-md fixed z-50 w-screen py-4 flex items-center px-2">
        {/* Logo */}
        <div className="w-fit">
          <img
            src={logo}
            alt="Logo"
            className="max-h-[3.75rem] sm:max-h-[5rem]"
          />
        </div>

        {/* Menu for large screens */}
        <div className="hidden md:flex justify-between items-center mx-auto px-4">
          <ul className="text-white flex gap-5 cursor-pointer">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/dropshipping"}>Drop shipping</Link>
            </li>
            <li>
              <Link to={"https://store.boostmysites.com/"}>Store</Link>
            </li>
            <li>
              <Link to={"https://boostmysites.store/"}>⁠⁠categories</Link>
            </li>
          </ul>
        </div>

        {/* Mobile menu icon */}
        <div className="md:hidden ml-auto">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center py-4 z-50">
            <ul className="text-white flex flex-col gap-5 cursor-pointer">
              <li onClick={() => setMenuOpen(false)}>
                <Link to={"/"}>Home</Link>
              </li>
              <li onClick={() => setMenuOpen(false)}>
                <Link to={"/dropshipping"}>Drop shipping</Link>
              </li>
              <li>
                <Link
                  to={"https://store.boostmysites.com/"}
                  onClick={() => setMenuOpen(false)}
                >
                  Store
                </Link>
              </li>
              <li>
                <Link
                  to={"https://boostmysites.store/"}
                  onClick={() => setMenuOpen(false)}
                >
                  ⁠⁠categories
                </Link>
              </li>
            </ul>
          </div>
        )}

        {/* Optional logo for larger screens */}
        <div className="w-fit">
          <img
            src={logo}
            alt="Logo"
            className="max-h-[5rem] hidden sm:flex sm:invisible"
          />
        </div>
      </header>
    </div>
  );
};

export default Header;
