import React, { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex flex-col md:flex-row items-center p-3">
      <div className="w-full flex justify-between items-center mb-4 md:mb-0">
        <a href='https://github.com/varun-chandola/' target="_blank">
          <img src='../github-mark-white.png' width={40} alt="GitHub" />
        </a>
        {/* Hamburger Icon */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={handleToggle}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {/* Navigation Links */}
      <div
        className={`w-full flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0 ${isOpen ? 'block' : 'hidden'} md:flex`}
      >
        <a className="text-white hover:text-yellow-300 hover:underline hover:decoration-wavy" href="#about">About</a>
        <a className="text-white hover:text-yellow-300 hover:underline hover:decoration-wavy" href='#projects'>Projects</a>
        <a className="text-white hover:text-yellow-300 hover:underline hover:decoration-wavy" href='#skills'>Skills</a>
        <a className="text-white hover:text-yellow-300 hover:underline hover:decoration-wavy" href='#contact'>Contact</a>
        <a href='/Resume Varun Chandola.pdf' target="_blank" className="text-white hover:text-yellow-300 hover:underline hover:decoration-wavy">Resume</a>
      </div>
    </header>
  );
};

export default Nav;
