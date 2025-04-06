import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

function Header() {
  const [open, setOpen] = useState(false);

  // Define menu items with custom paths
  const menuItems = [
    { name: "About", path: "/#about" },
    { name: "Schedule", path: "/#schedule" },
    { name: "Projects", path: "/#projects" },
    { name: "Q&A", path: "/questions/" },
  ];

  return (
    <header className="p-5 shadow-md text-white bg-[#FF2492]">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          <h1 className="text-xl font-bold">Kayna</h1>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <Link key={item.name} href={item.path} className="hover:underline">
              {item.name}
            </Link>
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
            <Link
              key={item.name}
              href={item.path}
              className="hover:underline"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Header;
