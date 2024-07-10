import React from 'react';
import logo from "../assets/Dilshad.png";
import { FaLinkedin, FaGithub, FaTwitterSquare, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
        <div className='flex items-center flex-shrink-0'>
            <img className='mx-2 w-28' src={logo} alt="" />
        </div>
        <div className='flex items-center justify-center gap-4 m-8 text-2xl'>
        <FaLinkedin/>
        <FaInstagram/>
        <FaGithub/>
        <FaTwitterSquare/>
        </div>
    </nav>
  );
}

export default Navbar