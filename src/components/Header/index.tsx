"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Header = () => {
  const [stickyMenu, setStickyMenu] = useState(false);

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 w-full z-9999 bg-white transition-all ease-in-out duration-300 ${
        stickyMenu && "shadow"
      }`}
    >
      <div className="max-w-[1170px] mx-auto px-4 sm:px-7.5 xl:px-0">
        <div
          className={`flex items-center justify-between ease-out duration-200 ${
            stickyMenu ? "py-4" : "py-6"
          }`}
        >
          <Link
            className="flex-shrink-0 text-2xl font-bold text-blue-700"
            href="/"
          >
            Pollito Cell
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
