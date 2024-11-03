import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import VideoPlex from "./images/videoPlex.png"
import Postify from "./images/blog.png"
import ideaHub from "./images/ideaHub.png"

const Projects = () => {
  const projects = [
    {
      image: VideoPlex,
      name: `VideoPlex`,
      github: `https://github.com/varun-chandola/VideoPlex`,
      live: ``,
      status: `building`
    },
    {
      image: Postify,
      name: `Postify`,
      github: `https://github.com/varun-chandola/Postify`,
      live: ``,
      status: `building`
    },
    {
      image: ideaHub,
      name: `IdeaHub`,
      github: `https://github.com/varun-chandola/IdeaHub`,
      live: `https://ideahub-nywg.onrender.com/`,
      status: `deployed`
    },
  ]
  return (
    <>
      <Nav />
      <div className="p-8">
        <h2 className="text-3xl font-semibold mb-10 flex items-center justify-center">Here are some of my projects</h2>

        {projects.map(each => (
          <div key={each.name} className={`relative flex flex-row w-[65vw] justify-center items-center m-auto rounded-2xl bg-gray-100 mb-10 hover:shadow-gray-900 hover:shadow-xl hover:scale-y-105 hover:scale-x-105 hover:transition duration-75 lg:w-[55vw] md:w-[50vw]`}>
            <div className="p-8">
              <img src={each.image} />
            </div>

            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl">
              <div className="flex flex-col gap-3 text-center">
                <div className="flex flex-col p-4">
                  <h1 className="font-bold text-white text-4xl">{each.name}</h1>
                </div>
                <Link className="bg-black p-2 rounded-2xl text-white font-bold hover:bg-gray-800" to={each.github} target="_blank">
                  Github
                </Link>
                <Link className="bg-blue-400 p-2 rounded-2xl text-white font-bold hover:bg-blue-600" to={each.live} target="_blank">
                  Live
                </Link>
                <p className="font-bold underline text-gray-800">{each.status}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
