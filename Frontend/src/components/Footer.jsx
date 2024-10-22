import { Link } from "react-router-dom";
import { logo } from "../utils/constants";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-cyan-500 to-cyan-900 shadow text-cyan-200">
      <div className="w-full mx-auto p-4 md:py-8">
        <div className="flex items-center justify-between px-8">
          <Link to="/">
            <div className="flex gap-2 ">
              <img src={logo} className="h-8" alt="Getaway Trip Logo" />
              <span className="self-center text-2xl text-cyan-800 font-semibold whitespace-nowrap">
                Getaway Plan
              </span>
            </div>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-lg font-medium sm:mb-0">
            <li>
              <Link href="/about" className="hover:text-white me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white me-4 md:me-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white me-4 md:me-6">
                Licensing
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-white sm:mx-auto lg:my-8" />
        <span className="block text-sm  sm:text-center ">
          © 2024 <Link to="/">Getaway Plan</Link>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
