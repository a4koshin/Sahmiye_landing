"use client";

import Image from "next/image";
import Link from "next/link";
import { navbar } from "@/lib/navigation";
import { RiMenu5Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full bg-white backdrop-blur-xl border border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative overflow-hidden rounded-xl p-2 group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/logo.jpeg"
                alt="Sahmiye Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navbar.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 group"
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute inset-x-3 bottom-1 h-0.5 bg-amber-00 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              </Link>
            
            ))}
          </nav>
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="lg:hidden p-2.5 border border-blue-200 rounded-xl bg-blue-50 text-blue-950 hover:bg-blue-100 transition-colors duration-200"
          >
            {isOpen ? (
              <IoMdClose className="text-2xl" />
            ) : (
              <RiMenu5Line className="text-2xl" />
            )}
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="pb-4 pt-2 space-y-1">
          {navbar.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-400 hover:bg-blue-50 rounded-xl transition-all duration-200 group"
            >
              <span className="ml-2">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
