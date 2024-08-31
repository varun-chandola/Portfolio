import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-4 h-screen">
      <div className="text-center md:text-left mb-8 md:mb-0 md:w-1/2">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-snug md:leading-relaxed p-4 md:p-8">
          Hi, I am 
          <span className="text-green-500 text-3xl md:text-5xl lg:text-6xl underline decoration-wavy block mt-2">
            Varun Chandola
          </span>
          <br className="hidden md:block" />
          I am a Front-End Developer!
          <br />
          Upskilling to become a Full Stack Developer
        </h1>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="hovering h-40 md:h-56 lg:h-64 w-40 md:w-56 lg:w-64 rounded-full overflow-hidden flex items-center justify-center">
          <img src="varun_.jpg" alt="Varun Chandola" className="object-cover w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Home;
