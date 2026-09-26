"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { OswalLogo } from "./OswalLogo";
import { Menu, X, ArrowUpRight } from "lucide-react";

export const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-warmWhite transition-all duration-200 border-b border-borderGrey/70 ${
        isScrolled ? "py-2.5 shadow-sm" : "py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <OswalLogo size={isScrolled ? "sm" : "md"} />

        {/* Desktop Anchor Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-medium uppercase tracking-wider text-steel">
          <button
            onClick={() => scrollTo("hero")}
            className="hover:text-charcoal transition-colors focus:outline-none"
          >
            HOME
          </button>
          <button
            onClick={() => scrollTo("about")}
            className="hover:text-charcoal transition-colors focus:outline-none"
          >
            ABOUT
          </button>
          <button
            onClick={() => scrollTo("materials")}
            className="hover:text-charcoal transition-colors focus:outline-none"
          >
            MATERIALS
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="hover:text-charcoal transition-colors focus:outline-none"
          >
            CONTACT
          </button>
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => scrollTo("contact")}
            className="px-4 py-2 bg-charcoal text-warmWhite text-xs font-sans font-medium uppercase tracking-wide hover:bg-graphite transition-colors inline-flex items-center gap-1.5"
          >
            <span>REQUEST A QUOTE</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-steelLight" />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => scrollTo("contact")}
            className="px-3 py-1.5 bg-charcoal text-warmWhite text-xs font-medium uppercase"
          >
            QUOTE
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-1.5 text-charcoal focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-warmWhite border-t border-borderGrey px-4 py-5 space-y-3 font-sans text-xs uppercase tracking-wider">
          <button
            onClick={() => scrollTo("hero")}
            className="block w-full text-left py-2 border-b border-borderSubtle text-charcoal font-medium"
          >
            HOME
          </button>
          <button
            onClick={() => scrollTo("about")}
            className="block w-full text-left py-2 border-b border-borderSubtle text-charcoal font-medium"
          >
            ABOUT
          </button>
          <button
            onClick={() => scrollTo("materials")}
            className="block w-full text-left py-2 border-b border-borderSubtle text-charcoal font-medium"
          >
            MATERIALS
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="block w-full text-left py-2 border-b border-borderSubtle text-charcoal font-medium"
          >
            CONTACT
          </button>
          <div className="pt-2">
            <button
              onClick={() => scrollTo("contact")}
              className="w-full py-2.5 bg-charcoal text-warmWhite text-center text-xs font-medium uppercase tracking-wide block"
            >
              REQUEST A QUOTE
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
