import React, { useState  } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

function Header() {
  const [open, setOpen] = useState(false);
  const menuItems = ['About', 'Contact', 'Works', 'Donate'];



  return (
    <header className="p-5 shadow-md text-white bg-[#FF2492]">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Kayna</h1>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:underline">{item}</a>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="md:hidden flex flex-col items-center mt-4 space-y-2">
          {menuItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:underline" onClick={() => setOpen(false)}>{item}</a>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Header;