import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(prev => !prev);
  };

  const location = useLocation()
  return (
    <>
      <div className={`bg-neutral-100 max-w-60 h-screen transition-all duration-300 fixed overflow-y-auto p-6 py-10 flex flex-col`}>
        <div className="flex gap-3">
          <div>
            <img src={`./varun.jpg`} width={'35'} className="rounded-3xl" />
          </div>
          <div>
            <p className="font-bold">Varun Chandola</p>
            <p>Developer</p>
          </div>
        </div>
        <div className="flex flex-col justify-between mt-10">
          <div className="flex flex-col justify-center">
            <Link className={`flex items-center gap-x-2 py-2 px-2 rounded-md text-xl mb-3 mt-5 
              ${location.pathname == `/` ? `shadow-lg bg-white` : ''}`} to='/'>
              <svg xmlns="http://www.w3.org/2000/svg" width={'24'} height={'24'} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={`h-4 w-4 flex-shrink-0 ${location.pathname == '/' ? `text-sky-400` : `text-gray-500`}`}>
                <path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" ></path>
              </svg>
              <span className={`${location.pathname == '/' ? `text-black` : `text-gray-500`}`}>Home</span>
            </Link>

            <Link className={`flex items-center gap-x-2 py-2 px-2 rounded-md text-xl mb-3 
            ${location.pathname == '/projects' ? `bg-white shadow-lg` : ``}
              `} to='/projects'>
              <svg xmlns="http://www.w3.org/2000/svg" width={'24'} height={'24'} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={`h-4 w-4 flex-shrink-0 ${location.pathname == '/projects' ? `text-sky-400` : `text-gray-500`}`}>
                <path d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9z"></path>
                <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
              <span className={`${location.pathname == '/projects' ? `text-black` : `text-gray-500`}`}>Projects</span>
            </Link>
          </div>

          <div className="mt-10">
            <p className="mb-2 font-bold text-gray-500">Socials</p>
            <a href='mailto:varun7122001@gmail.com' target="_blank" className="flex items-center gap-4 text-gray-700 hover:text-black hover:shadow-lg hover:bg-white mb-3 py-2 rounded-xl px-2">
              <svg xmlns="http://www.w3.org/2000/svg" width={'24'} height={'24'} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4 flex">
                <path d="M16 20h3a1 1 0 0 0 1 -1v-14a1 1 0 0 0 -1 
            -1h-3v16z"></path>
                <path d="M5 20h3v-16h-3a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1z"></path>
                <path d="M16 4l-4 4l-4 -4"></path>
                <path d="M4 6.5l8 7.5l8 -7.5"></path>
              </svg>
              <span>Gmail</span>
            </a>

            <a href='https://x.com/VarunChandola7' target="_blank" className="flex items-center gap-4 text-gray-700 hover:text-black hover:shadow-lg hover:bg-white mb-3 py-2 rounded-xl px-2" >
              <svg xmlns="http://www.w3.org/2000/svg" width={'24'} height={'24'} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4 flex-shrink-0">
                <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z"></path>

              </svg>
              <span>Twitter</span>
            </a>

            <a href='https://www.linkedin.com/in/varun-chandola/' target="_blank" className="flex items-center gap-4 text-gray-700 hover:text-black hover:shadow-lg  hover:bg-white py-2 rounded-xl mb-3 px-2">
              <svg xmlns="http://www.w3.org/2000/svg" width={'24'} height={'24'} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4 flex-shrink-0">
                <path d="M16 20h3a1 1 0 0 0 1 -1v-14a1 1 0 0 0 -1 
            -1h-3v16z"></path>
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M8 11l0 5"></path>
                <path d="M8 8l0 .01"></path>
                <path d="M12 16l0 -5"></path>
                <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
              </svg>
              <span>LinkedIn</span>
            </a>

            <a href='https://github.com/varun-chandola/' target="_blank" className="flex items-center gap-4 text-gray-700 hover:text-black hover:shadow-lg hover:bg-white py-2 rounded-xl mb-8 px-2">
              <svg xmlns="http://www.w3.org/2000/svg" width={'24'} height={'24'} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4 flex-shrink-0">
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
              </svg>
              <span>Github</span>
            </a>
          </div>
        </div>
        <div className="">
          <Link to='VarunChandola-LatestResume.pdf' target="_blank"><button className="bg-black rounded-xl p-2 w-full text-white font-bold">Resume</button></Link>
        </div>
      </div>
    </>
  );
};

export default Nav;