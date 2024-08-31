import React from "react";

const About = () => {
  return (
    <div className="my-10 px-4 md:px-12 lg:px-24" id="about">
      <div className="mb-12">
        <h2 className="text-4xl font-extrabold text-green-400 underline decoration-wavy">ABOUT ME</h2>
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        <div id="education" className="flex flex-col w-full lg:w-1/2">
          <h1 className="text-3xl font-semibold text-white mb-6">Education</h1>
          <div
            className="bg-[#033f47] p-6 rounded-lg mb-8 shadow-md hovering"
            style={{ height: "130px" }}
          >
            <h1 className="text-lg font-semibold text-white">
              Bachelor of Technology in Computer Science Engineering
            </h1>
            <h3 className="text-sm text-gray-300 mt-2">
              Graphic Era Hill University, Dehradun (2021 - 2025)
            </h3>
          </div>
          <div className="bg-[#033f47] p-6 rounded-lg shadow-md hovering">
            <h1 className="text-lg font-semibold text-white">
              Schooling From Aryaman Vikram Birla Institute of Learning
            </h1>
            <h3 className="text-sm text-gray-300 mt-2">Senior Secondary</h3>
          </div>
        </div>

        <div id="certification" className="flex flex-col w-full lg:w-1/2">
          <h1 className="text-3xl font-semibold text-white mb-6">Certification</h1>
          <div className="bg-[#212121] p-3 rounded-lg mb-4 shadow-md flex justify-center items-center hovering">
            <a
              href="https://www.udemy.com/certificate/UC-b6b4354d-0939-4d5d-892c-d72bbeaf1f22/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="UC-b6b4354d-0939-4d5d-892c-d72bbeaf1f22.jpg"
                alt="Javascript Certificate"
                className="max-w-[250px] h-auto"
              />
            </a>
          </div>
          <div className="bg-[#212121] p-3 rounded-lg shadow-md flex justify-center items-center hovering">
            <a
              href="https://www.udemy.com/certificate/UC-fa58529a-1f94-40b0-afa6-d7e003b08a79/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="UC-fa58529a-1f94-40b0-afa6-d7e003b08a79.jpg"
                alt="Udemy DSA certificate"
                className="max-w-[250px] h-auto"
              />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
