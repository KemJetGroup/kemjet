"use client";

import Logo from "@/components/layout/logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const nav = [
    {
      name: "home",
      href: "/",
      isActive: pathname === "/",
    },
    {
      name: "products",
      href: "/",
      isActive: pathname === "/",
    },
    {
      name: "hugging face",
      href: "/",
      isActive: pathname === "/",
    },
    {
      name: "research",
      href: "/",
      isActive: pathname === "/",
    },
  ];

  return (
    <div className="relative flex items-center justify-between w-11/12 pt-5 mx-auto">
      <Logo />

      {/* Desktop Navigation */}
      <div className="hidden gap-8 md:flex">
        {nav.map((item) => (
          <Link key={item.name} href={item.href}>
            <span
              className={
                item.isActive
                  ? "text-white uppercase text-[14px] font-inter "
                  : "underline"
              }
            >
              {item.name}
            </span>
          </Link>
        ))}
      </div>

      {/* Desktop Right Links */}
      <div className="items-center hidden gap-6 md:flex">
        <Link href="/" className="text-white uppercase text-[14px] font-inter">
          about us
        </Link>
        <Link href="/" className="text-white uppercase text-[14px] font-inter">
          contact
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="text-white md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute left-0 right-0 z-50 bg-black md:hidden top-full bg-opacity-90 backdrop-blur-sm">
          <div className="flex flex-col items-center py-8 space-y-6">
            {nav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                <span
                  className={
                    item.isActive
                      ? "text-white uppercase text-[16px] font-inter"
                      : "text-gray-300 uppercase text-[16px] font-inter hover:text-white"
                  }
                >
                  {item.name}
                </span>
              </Link>
            ))}
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-white uppercase text-[16px] font-inter"
            >
              about us
            </Link>
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-white uppercase text-[16px] font-inter"
            >
              contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
