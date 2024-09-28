"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" backdrop-blur-xl sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              <Link href="/"> illusion</Link>
            </span>
          </div>
          <div className="hidden md:flex md:space-x-8 items-center text-white">
            <a href="/" className=" hover:text-blue-600">
              Home
            </a>
            <a href="#" className=" hover:text-blue-600">
              About
            </a>
            <a href="#project" className=" hover:text-blue-600">
              Project
            </a>
            <a href="#" className=" hover:text-blue-600">
              Contact
            </a>
          </div>
          <div className="flex items-center md:hidden">
            <button
              title="av"
              type="button"
              className="text-gray-500 hover:text-gray-900 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block text-gray-600 hover:text-gray-900">
              Home
            </a>
            <a href="#" className="block text-gray-600 hover:text-gray-900">
              About
            </a>
            <a href="#" className="block text-gray-600 hover:text-gray-900">
              Services
            </a>
            <a href="#" className="block text-gray-600 hover:text-gray-900">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
