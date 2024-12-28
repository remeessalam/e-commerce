import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";
const Header = () => {
  return (
    <div>
      <header className="bg-black/60 backdrop-blur-md fixed z-50 w-screen py-4 flex px-2">
        <div className="w-fit">
          <img src={logo} alt="" className="max-h-[3.75rem] sm:max-h-[5rem]" />
        </div>
        <div className="flex justify-between items-center mx-auto px-4">
          <ul className="text-white flex gap-5 cursor-pointer">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/dropshipping"}> ⁠⁠Drop shipping</Link>
            </li>
          </ul>
        </div>
        <div className="w-fit">
          <img
            src={logo}
            alt=""
            className="max-h-[5rem] hidden sm:flex sm:invisible"
          />
        </div>
      </header>
    </div>
  );
};

export default Header;
