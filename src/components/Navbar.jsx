import React from "react";
import logo from "../assets/Dilshad.png";
import {
  FaLinkedin,
  FaGithub,
  FaFacebookSquare,
  FaInstagram,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex items-center flex-shrink-0">
        <img className="mx-2 w-28" src={logo} alt="" />
      </div>
      <div className="flex items-center justify-center gap-4 m-8 text-2xl">
        <a href="https://www.linkedin.com/in/mohameddilshad123//">
          <FaLinkedin />
        </a>
        <a href="https://github.com/DilshadMr360">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/dilshadeen/">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/mohamed.villa.5494?mibextid=ibOpuV">
          <FaFacebookSquare />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
