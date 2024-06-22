import React from "react";
import { useState } from "react";

const Nav = () => {
  const [symbol, setSymbol] = useState("+");
  const toggleNav = () => {
    symbol === "+" ? setSymbol("X") : setSymbol("+");
    const val = document.querySelector('.allNavs')
    symbol === "+" ? val.classList.remove('hidden') : val.classList.add('hidden')
  };

  return (
    <div className="sticky top-0 z-50 bg-[#033f47] info py-2">
      <div className="flex justify-between flex-wrap m-2 p-5 text-xl xl:flex xl:p-0">
        <a
          href="https://github.com/varun-chandola"
          target="_blank"
          className="p-3 text-3xl"
        >
          Varun Chandola
        </a>
        <button className="md:hidden" onClick={() => toggleNav()}>{symbol}</button>
        <div className="flex flex-wrap hidden allNavs md:contents">
          <a className='px-5 home w-80 lg:my-3 xl:w-auto' href="/">
            Home
          </a>
          <a className="px-5 about w-80 lg:my-3 xl:w-auto" href="#about">
            About
          </a>
          <a className="px-5 project w-80 lg:my-3 xl:w-auto" href="#projects">
            Projects
          </a>
          <a className="px-5 contact  w-80 lg:my-3 xl:w-auto" href="#contactMe">
            Contact
          </a>
          <a className="px-5 interest  w-80 lg:my-3 xl:w-auto" href="#blog">
            Blogs
          </a>
          <a
            className="px-5 w-80 lg:my-3"
            href="Resume.pdf"
            target="_blank"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;