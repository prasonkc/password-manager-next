"use client"
import React, { useState } from "react";
// Icon import
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    // Navbar
    <nav className="flex items-center justify-between h-20 bg-slate-900 text-slate-100 p-10">
      {/* Hamburger Icon */}
      <button
        className="md:hidden"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Menu */}
      {open && (
        <ul className="absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-center space-y-4 py-6 md:hidden">
          <Link to="/password-manager">
            <li onClick={() => setOpen(false)}>Password Manager</li>
          </Link>
          <Link to="/password-display">
            <li onClick={() => setOpen(false)}>Display your passwords</li>
          </Link>
          <Link to="/password-generator">
            <li onClick={() => setOpen(false)}>Password Generator</li>
          </Link>
        </ul>
      )}

      {/* Logo */}
      <div className="logo font-bold cursor-pointer">Password Manager</div>

      <ul className="flex gap-4">
        {/* <li className='hover:font-bold'><a href="#">Home</a></li>
            <li className='hover:font-bold'><a href="#">About</a></li>
            <li className='hover:font-bold'><a href="#">Contact</a></li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
