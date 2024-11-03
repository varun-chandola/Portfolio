import React from "react";
import Nav from "./Nav";

const Home = () => {

  return (
    <>
      <Nav />
      <div className="flex items-center justify-center flex-col h-[85vh]">
        <div className="mb-32 h-[40vh] flex flex-col items-center justify-center max-w-[50vw] sm:flex sm: flex-col sm:text-center">
          <h1 className="font-bold text-5xl">
            👋Hello there ! I am Varun
          </h1>
          <h2 className="text-2xl text-gray-500">I am a Full Stack Dev , who loves to build new projects</h2>
        </div>
        <div className="text-center h-[40vh] flex flex-col items-center justify-center">
          <h1 className="font-bold text-xl mb-5 text-gray-600">Tech Stack</h1>
          <div className="flex gap-4">
            <img src={`https://cdn.iconscout.com/icon/free/png-256/free-mongodb-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-freebies-pack-logos-icons-1175140.png?f=webp&w=256`} className="h-12" />
            
            <img src={`https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png`} className="h-12 rounded-full" />

            <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s`} className="h-12 rounded-full" />

            <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBwzWqFVu66ck-2u_nDBgLTZbR3cNjpUCbWg&s`} className="h-12 rounded-full" />


            <img src={`https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png`} className="h-12 rounded-full" />

            <img src={`https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png`} className="h-12 rounded-xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
