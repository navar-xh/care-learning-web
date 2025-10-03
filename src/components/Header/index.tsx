"use client"
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { HeaderLinks } from "@/data/HeaderLinks";
import "./index.css";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header
      className={`navbar-sticky fixed w-full mx-auto transition-all duration-300 ${
        isScrolled ? "header-fixed shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto">
        <nav className="flex justify-between items-center">
          <div className="w-[130px] md:w-[200px] flex items-center logo-col">
            <Link href="">Care learning</Link>
          </div>
          <div className="flex items-center gap-3 flex-1 mx-auto">
            <div className="navLinks duration-500 mx-auto gradient-border">
              <ul className="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-8">
                {HeaderLinks.map(
                  (link: { id: number; title: string; href: string }) => (
                    <li key={link.id} className="">
                      <Link href={link.href}>{link.title}</Link>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="">
              <button className="text-[30px] cursor-pointer md:hidden">
                <Image
                  src="/images/icons/icon-hamburger.svg"
                  alt="Care Learning"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </div>
          <div className="location-col flex-end">
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
  );
}

export default Header;
