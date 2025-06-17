"use client";

import { useState } from "react";
import {
  Navbar as HeroNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/react";
import { Link } from "@heroui/link";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeroNavbar className="bg-[#FF2492] text-white shadow-md">
      <NavbarBrand>
        <Link
          href="/"
          className="text-2xl font-bold tracking-wide text-white hover:text-yellow-100 transition-colors select-none"
        >
          Kayna 🌸
        </Link>
      </NavbarBrand>

      {/* สำหรับหน้าจอใหญ่ */}
      <NavbarContent className="hidden sm:flex gap-8" justify="end">
        {[
          { href: "#about", label: "เกี่ยวกับฉัน" },
          { href: "#live", label: "ตารางไลฟ์" },
          { href: "#contact", label: "ติดต่อ" },
        ].map(({ href, label }) => (
          <NavbarItem key={href} className="relative group">
            <Link
              href={href}
              className="text-white hover:text-yellow-200 transition-colors px-2 py-1"
            >
              {label}
            </Link>
            {/* underline on hover */}
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-200 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded"></span>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* ปุ่ม toggle เมนู สำหรับมือถือ */}
      <NavbarMenuToggle
        className="sm:hidden"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen(!menuOpen)}
      />

      {/* เมนูแบบ dropdown สำหรับมือถือ */}
      <NavbarMenu
        className="sm:hidden"
        onClick={() => setMenuOpen(false)}
      >
        {[
          { href: "#about", label: "เกี่ยวกับฉัน" },
          { href: "#live", label: "ตารางไลฟ์" },
          { href: "#contact", label: "ติดต่อ" },
        ].map(({ href, label }) => (
          <NavbarMenuItem key={href}>
            <Link
              href={href}
              className="block w-full py-2 text-white hover:bg-yellow-200 hover:text-[#FF2492] transition-colors rounded"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </HeroNavbar>
  );
}
