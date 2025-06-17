"use client";

import { useState } from "react";
import {
  Navbar as HeroNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/react";
import { Link } from "@heroui/link";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeroNavbar className="bg-[#FF2492] text-white shadow-md">
      <NavbarBrand>
        <Link
          className="select-none text-2xl font-bold tracking-wide text-white transition-colors hover:text-yellow-100"
          href="/"
        >
          Kayna 🌸
        </Link>
      </NavbarBrand>

      {/* สำหรับหน้าจอใหญ่ */}
      <NavbarContent className="gap-8 hidden sm:flex" justify="end">
        {[
          { href: "#about", label: "เกี่ยวกับฉัน" },
          { href: "#live", label: "ตารางไลฟ์" },
          { href: "#contact", label: "ติดต่อ" },
        ].map(({ href, label }) => (
          <NavbarItem key={href} className="relative group">
            <Link
              className="px-2 py-1 text-white transition-colors hover:text-yellow-200"
              href={href}
            >
              {label}
            </Link>
            <span className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 rounded bg-yellow-200 transition-transform group-hover:scale-x-100" />
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* ปุ่ม toggle เมนู สำหรับมือถือ */}
      <NavbarMenuToggle
        aria-label="Toggle menu"
        className="sm:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      />

      {/* เมนูแบบ dropdown สำหรับมือถือ */}
      <NavbarMenu className="sm:hidden" onClick={() => setMenuOpen(false)}>
        {[
          { href: "#about", label: "เกี่ยวกับฉัน" },
          { href: "#live", label: "ตารางไลฟ์" },
          { href: "#contact", label: "ติดต่อ" },
        ].map(({ href, label }) => (
          <NavbarMenuItem key={href}>
            <Link
              className="block w-full rounded py-2 text-white transition-colors hover:bg-yellow-200 hover:text-[#FF2492]"
              href={href}
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
