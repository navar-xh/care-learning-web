"use client"
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { HeaderLinks } from "@/data/HeaderLinks";
import "./index.css";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`navbar-sticky fixed w-full mx-auto transition-all duration-300 ${
          isScrolled ? "header-fixed shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto">
          <nav className="flex justify-between items-center">
            <div className="w-[130px] md:w-[200px] flex items-center logo-col">
              <Link href="/">Care learning</Link>
            </div>
            <div className="flex items-center gap-3 flex-1 mx-auto">
              {/* Desktop Navigation */}
              <div className="navLinks duration-500 mx-auto gradient-border hidden md:block">
                <ul className="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-8">
                  {HeaderLinks.map(
                    (link: { id: number; title: string; href: string }) => (
                      <li key={link.id}>
                        {link.id === 6 ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {link.title}
                          </a>
                        ) : (
                          <Link href={link.href}>{link.title}</Link>
                        )}
                      </li>
                    )
                  )}
                </ul>
              </div>
              {/* Mobile Hamburger Button */}
              <div className="md:hidden ml-auto">
                <button 
                  onClick={toggleMobileMenu}
                  className="text-[30px] cursor-pointer p-2"
                  aria-label="Toggle menu"
                >
                  {isMobileMenuOpen ? (
                    <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <Image
                      src="/images/icons/icon-hamburger.svg"
                      alt="Menu"
                      width={24}
                      height={24}
                    />
                  )}
                </button>
              </div>
            </div>
            {/* Desktop Location Button */}
            <div className="location-col flex-end hidden md:flex">
              <Link
                className="gradient-border loc-btn gap-8 flex items-center"
                href="/"
              >
                Ireland<span> &gt; </span>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-overlay fixed inset-0 bg-black/70 z-40 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMobileMenu}
      />

      {/* Mobile Menu Sidebar */}
      <div
        className={`mobile-menu fixed top-0 right-0 h-full w-[280px] bg-black z-50 md:hidden transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center p-6 border-b border-white/10">
            <span className="text-xl font-semibold text-white">Menu</span>
            <button
              onClick={closeMobileMenu}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Links */}
          <nav className="flex-1 overflow-y-auto py-6">
            <ul className="space-y-1 px-4">
              {HeaderLinks.map((link: { id: number; title: string; href: string }) => (
                <li key={link.id}>
                  {link.id === 6 ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mobile-menu-link block px-4 py-3 text-white/60 font-medium rounded-lg hover:bg-white/5 hover:text-white transition-all"
                      onClick={closeMobileMenu}
                    >
                      {link.title}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="mobile-menu-link block px-4 py-3 text-white/60 font-medium rounded-lg hover:bg-white/5 hover:text-white transition-all"
                      onClick={closeMobileMenu}
                    >
                      {link.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Location Button */}
          <div className="p-6 border-t border-white/10">
            <Link
              href="/"
              className="mobile-location-btn gradient-border block w-full px-6 py-3 text-center text-white/60 font-medium rounded-full hover:opacity-70 transition-opacity"
              onClick={closeMobileMenu}
            >
              Ireland <span className="ml-2">&gt;</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;