import React from 'react'

const Nav = () => {
  return (
    <div className="sticky top-0 z-50 bg-[#033f47] w-[150vw] text-white py-5 sm:flex sm:justify-between sm:py-5 sm:sticky sm:top-0 sm:z-50 sm:bg-[#023031] sm:text-white sm:w-full">
        <span className="px-5 text-2xl">
          <a href="https://github.com/varun-chandola" target="_blank">Varun Chandola</a>
        </span>
        <div className="flex justify-around">
          <a className="px-5 home" href="/">
            Home
          </a>
          <a className="px-5 about" href="#about">
            About
          </a>
          <a className="px-5 project" href="#projects">
            Projects
          </a>
          <a className="px-5 contact" href="#contactMe">
            Contact
          </a>
          <a className="px-5 interest" href="#blog">
            Blogs
          </a>
          <a className='px-5'href="Resume Varun Chandola.pdf" target="_blank">Resume</a>
        </div>
      </div>
  )
}

export default Nav