import { useState } from "react";
import { FaBars } from "react-icons/fa";
import "../../global.css";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
    console.log("isOpen:", isOpen);
  };

  return (
    <>
      <nav className="z-30 fixed top-0 flex w-full flex-wrap items-center justify-between bg-black font-primary text-light-50 py-2 lg:flex-wrap lg:justify-start lg:py-4">
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold justify-center text-center">
              me@MaxanceGusse<a className="text-white">:</a><a className="text-DigitalOceanBlue-50">~</a><a className="text-white">$</a>
            </a>
          </div>

          <div className="flex items-center ml-auto">
            <button
              className="ml-6 lg:hidden"
              onClick={toggleMenu}
              aria-label="Menu"
            >
              <FaBars className="w-6 h-6" />
            </button>
          </div>

          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full lg:flex lg:items-center lg:w-auto`}
          >
            <a className="flex font-semibold mt-1 ml-2 mr-2"><a className="text-white">.</a>àProposDeMoi<a className="text-light-100">()</a></a>
            <a className="flex font-semibold mt-1 ml-2 mr-2"><a className="text-white">.</a>compétences<a className="text-light-100">()</a></a>
            <a className="flex font-semibold mt-1 ml-2 mr-2"><a className="text-white">.</a>expériences<a className="text-light-100">()</a></a>
            <a className="flex font-semibold mt-1 ml-2 mr-2"><a className="text-white">.</a>formation<a className="text-light-100">()</a></a>
            <button className="flex font-semibold mt-1 ml-2 mr-2 text-DigitalOceanBlue-50"><a className="text-white">.</a>meContacter<a className="text-light-100">()</a></button>
            <button className="flex font-semibold mt-1 ml-2 mr-2 text-DigitalOceanBlue-50"><a className="text-white">.</a>voirCV<a className="text-light-100">()</a></button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
