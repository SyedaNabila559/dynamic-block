"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="bg-background/50 shadow-lg sticky top-0 backdrop-blur border-b z-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-4xl font-bold">
              SYEDA BLOG
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex text-lg items-center space-x-6">
            <Link href="/" className="hover:text-slate-500 transition-all duration-300">
              Home
            </Link>
            <Link href="/about" className="hover:text-slate-500 transition-all duration-300">
              About
            </Link>
            <Link href="/blog" className="hover:text-slate-500 transition-all duration-300">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-slate-500 transition-all duration-300">
              Contact
            </Link>
           
          </div>

          <div className="md:hidden flex items-center">
            <Button
            variant={"outline"}
              className="outline-none mobile-menu-button mx-4"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </Button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
          <Link
            href="/"
            className="block px-3 py-2 rounded-md text-base hover:bg-red-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block px-3 py-2 rounded-md text-base hover:bg-red-300"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/blog"
            className="block px-3 py-2 rounded-md text-base hover:bg-red-300"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="block px-3 py-2 rounded-md text-base hover:bg-red-300"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          

        </div>
      </div>
    </nav>
  );
};

export default Navbar;