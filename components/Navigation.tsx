"use client";

import Image from "next/image";
import Link from "next/link";
import { navbar } from "@/lib/navigation";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { Button } from "./ui/button";
import { IoMenu } from "react-icons/io5";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center group"
          >
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
                <span className="absolute inset-x-3 bottom-1 h-0.5 origin-center scale-x-0 transform bg-amber-400 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>
          <Button
            asChild
            className="hidden bg-blue-600 hover:bg-blue-500 lg:inline-flex"
          >
            <Link href="/contact">Contact us</Link>
          </Button>
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            className="lg:hidden p-2.5  text-blue-500  transition-colors duration-200"
          >
            {isOpen ? (
              <IoMdClose className="text-4xl" />
            ) : (
              <IoMenu className="text-4xl" />
            )}
          </button>
        </div>
      </div>
      <div
        id="mobile-nav"
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl space-y-2 px-4 pb-4 pt-2 sm:px-6 lg:px-8">
          <nav className="space-y-1">
            {navbar.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center rounded-xl px-4 py-3 text-base font-medium text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-400"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <Button asChild className="w-full bg-blue-600 hover:bg-blue-500">
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              Contact us
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
