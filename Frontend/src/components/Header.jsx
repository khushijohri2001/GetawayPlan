import { Link } from "react-router-dom";
import {logo} from "../utils/constants"

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-300 to-cyan-700 py-4 px-10 flex justify-between items-center sticky top-0">
      <img
        src={logo}
        alt="Logo"
        className="w-16 rounded"
      />
      <ul className="flex gap-4 text-cyan-200 text-lg">
        <li className="hover:text-white">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-white">
          <Link to="/tour-packages">Packages</Link>
        </li>
        <li className="hover:text-white">
          <Link to="/hotels">Hotels</Link>
        </li>
        <li className="hover:text-white">
          <Link to="/about">About</Link>
        </li>
        <li className="hover:text-white">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="hover:text-white">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
