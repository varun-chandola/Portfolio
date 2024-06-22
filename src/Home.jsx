import React from "react";

const Home = () => {
  return (
    <>
      <div className="mb-20 mt-10 lg:flex xl:h-screen">
        <div className="flex flex-col items-center m-3 lg:w-1/2 xl:py-36">
          <h1 className="info text-2xl">Hi , I am</h1>
          <h1 className="head text-4xl">Varun Chandola</h1>
          <p className="info flex flex-col text-2xl items-center lg:text-3xl">
            <br />I am a <span className="head">FrontEnd developer !</span>
            Upskilling to become a <br />
            Full Stack Developer
          </p>
        </div>
        <div className="hovering rounded-full overflow-hidden m-auto h-60 w-48 lg:h-4/5 lg:w-auto lg:rounded-2xl">
          <img src="varun.jpg" className="w-full h-full object-cover lg:h-[600px]" />
        </div>
      </div>
    </>
  );
};

export default Home;