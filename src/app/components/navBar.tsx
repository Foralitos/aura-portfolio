"use client";
import React, { useState, useEffect } from "react";

function NavBar() {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex flex-col ">
      <header
        className={`bg-[#EAEAEA] fixed top-0 left-0 w-full px-4 lg:px-6 py-4 pt-2 ${
          scroll ? "shadow-md" : ""
        }`}
        style={{
          zIndex: 1000,
        }}
      >
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold">
            AURA
          </a>
          <nav className="hidden lg:flex gap-6">
            <a
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              About
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Projects
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Contact
            </a>
          </nav>
          <button className="lg:hidden" onClick={handleToggleMenu}>
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
          {menuOpen && (
            <div
              className="absolute top-12 left-0 w-full h-32 bg-[#EAEAEA] shadow-md py-4"
              style={{
                zIndex: 1001,
              }}
            >
              <ul className="flex flex-col gap-4">
                <li>
                  <a
                    href="#"
                    className="text-sm font-medium hover:underline underline-offset-4"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm font-medium hover:underline underline-offset-4"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm font-medium hover:underline underline-offset-4"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default NavBar;
