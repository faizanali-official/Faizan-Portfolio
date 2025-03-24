import { Navbar, NavbarCollapse, NavbarToggle } from 'flowbite-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Navbar fluid className="bg-black text-white">
        <Link to="/" className="flex items-center gap-2">
          <img src="./src/assets/icons/favicon-log.svg" className="h-6 sm:h-9" alt="Logo" />
          <span className="text-xl font-semibold">Portfolio</span>
        </Link>
        <NavbarToggle onClick={() => setIsOpen(!isOpen)} />
        <NavbarCollapse className={`flex flex-col md:flex-row items-center justify-between gap-6 ${isOpen ? 'block' : 'hidden'} md:flex`}>
          <Link to="/" className="hover:text-gray-300 pt-2 md:mx-0 mx-auto">Home</Link>
          <Link to="/about" className="hover:text-gray-300 pt-2 md:mx-0 mx-auto">About</Link>
          <Link to="/contact" className="hover:text-gray-300 pt-2 md:mx-0 mx-auto">Contact</Link>
          <img
            className="w-10 h-10 rounded-full object-cover border-2 md:m-0 mt-2 md:mx-0 mx-auto border-gray-400"
            src="./src/assets/images/1721731820291.jpg"
            alt="Profile"
          />
        </NavbarCollapse>
      </Navbar>
    </div>
  );
};

export default Header;
