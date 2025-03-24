import { Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <div className='bg-black'>
      <Navbar fluid>
        <NavbarBrand href="/">
          <img src="./src/assets/icons/favicon-log.svg" className="h-6 sm:h-9" alt="Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Portfolio
          </span>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </NavbarCollapse>
      </Navbar>
    </div>
  )
}

export default Header