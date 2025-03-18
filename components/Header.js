import React from 'react'

function Header() {
  return (
    <header className="p-2 shadow-md text-white bg-[#FF2492]">
      <div className="container mx-auto flex justify-end items-center">
        <nav className="flex space-x-4">
          <a href="#about" className="text-xs">About</a>
          <a href="#contact" className="text-xs">Contact</a>
          <a href="#works" className="text-xs">Works</a>
          <a href="#donet" className="text-xs">Donate</a>
        </nav>
      </div>
    </header>
  )
}

export default Header