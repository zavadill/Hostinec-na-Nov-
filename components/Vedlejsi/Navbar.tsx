'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 1);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div
        className={`${
          scrolled ? 'bg-white text-[var(--black)] h-17 shadow-sm shadow-[var(--gray)]' : 'bg-transparent text-[var(--black)] h-20'
        } fixed w-full transition-all duration-300 z-50`}
      >
        <div className="max-w-10/12 mx-auto flex justify-between items-center h-full px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-[var(--brown-btn)] text-2xl font-bold" onClick={closeMobileMenu}>
            Hostinec na Nové
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-row space-x-7 items-center">
            <Link href="/" className="hover:text-[var(--brown-btn)]">Domů</Link>
            <Link href="/onas" className="hover:text-[var(--brown-btn)]">O nás</Link>
            <Link href="/menu" className="hover:text-[var(--brown-btn)]">Menu</Link>
            <Link href="/prostory" className="hover:text-[var(--brown-btn)]">Prostory</Link>
            <Link href="/akce" className="hover:text-[var(--brown-btn)]">Svatby a akce</Link>
            <Link href="/galerie" className="hover:text-[var(--brown-btn)]">Galerie</Link>
            <Link href="/kontakt" className="hover:text-[var(--brown-btn)]">Kontakt</Link>
            <Link href="/rezervace" className="custom-btn-green">
              Rezervovat
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              aria-label="Otevřít menu"
              className="text-[var(--brown-btn)] focus:outline-none"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileMenuOpen ? (
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
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className={`md:hidden fixed top-17 left-0 w-full bg-white shadow-lg z-40 transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          } ${scrolled ? 'top-17' : 'top-20'}`} // Adjust top based on scrolled state
        >
          <div className="max-w-10/12 mx-auto flex flex-col items-center space-y-5 py-5">
            <Link href="/" className="hover:text-[var(--brown-btn)]" onClick={closeMobileMenu}>Domů</Link>
            <Link href="/onas" className="hover:text-[var(--brown-btn)]" onClick={closeMobileMenu}>O nás</Link>
            <Link href="/menu" className="hover:text-[var(--brown-btn)]" onClick={closeMobileMenu}>Menu</Link>
            <Link href="/prostory" className="hover:text-[var(--brown-btn)]" onClick={closeMobileMenu}>Prostory</Link>
            <Link href="/akce" className="hover:text-[var(--brown-btn)]" onClick={closeMobileMenu}>Svatby a akce</Link>
            <Link href="/galerie" className="hover:text-[var(--brown-btn)]" onClick={closeMobileMenu}>Galerie</Link>
            <Link href="/kontakt" className="hover:text-[var(--brown-btn)]" onClick={closeMobileMenu}>Kontakt</Link>
            <Link href="/rezervace" className="custom-btn-green mt-3" onClick={closeMobileMenu}>
              Rezervovat
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;