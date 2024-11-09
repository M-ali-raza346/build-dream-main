import React from 'react';
import "./index.css";

const Navbar = () => {
  return (
    <div className="w-auto">

      {/* Top Bar */}
      <div className="bg-[#474546] text-gray-300 flex justify-between items-center px-6 py-2 text-sm">
        <div className="flex items-center space-x-4">
          <h1><span className='text-[#EBAE15] mr-2'>Call:</span>+91 321 86078 490</h1>
        </div>
        <div className="flex space-x-1 text-[#EBAE15]">
          <h1 className='mr-2 mt-1'>Email Address: <span className='text-white'>builddream@gmail.com</span></h1>
          <img src="/Group1.png" alt="Twitter" className='w-8 h-7'/>
          <img src="/Group2.png" alt="Facebook" className='w-8 h-7'/>
          <img src="/Group3.png" alt="Instagram" className='w-8 h-7'/>
        </div>
      </div>

      {/* Navbar */}
      <div className="bg-[#707070] flex justify-between items-center px-6 py-5 relative h-[70px] border border-[#EBAE15]">
      <span className="logo-bg absolute inset-y-0 left-0"></span>
      <span className='logo-bg1 ml-[465px]'></span>
        {/* Logo with Full-Height Yellow Background */}
        <div className="relative h-full flex items-center">
        
          <span className="text-white font-bold text-2xl relative z-10 px-4">BUILD DREAM</span>
        </div>

        {/* Nav Links */}
        <div className="flex space-x-16 text-white font-medium">
        <a href="#home" className=" relative text-[#000000]">
            HOME
          </a>

          <a href="#about" className="hover:text-[#EBAE15]">ABOUT</a>
          <a href="#services" className="hover:text-[#EBAE15]">SERVICES</a>
          <a href="#projects" className="hover:text-[#EBAE15]">PROJECTS</a>
          <a href="#pricing" className="hover:text-[#EBAE15]">PRICING</a>
          <a href="#blog" className="hover:text-[#EBAE15]">BLOG</a>
          <a href="#contact" className="hover:text-[#EBAE15]">CONTACT</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
