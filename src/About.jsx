import React from "react";
import Nav from "./Nav";

const About = () => {
  return (
    <>
      <Nav />
      <div className="flex items-center justify-center flex-col px-4 md:px-12 lg:px-24" id="about">
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold mt-10">ABOUT ME</h2>
        </div>
        <div>
          <h1>Hey , my name is Varun Chandola , i am from Haldwani</h1>
          <h2>Currently i am in my B.Tech Final Year (2025 Grad)</h2>
          <h2>College : Graphic Era Hill University , Dehradun</h2>
        </div>
      </div>
    </>
  );
};

export default About;
