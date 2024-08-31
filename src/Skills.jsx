import React from 'react'
const Skills = () => {
    return (

        <div className="bg-[#222222] p-8">
        <h1 className="text-5xl text-green-400 underline decoration-wavy leading-normal font-extrabold mb-4 " id="skills">SKILLS</h1>
        <h2 className="text-3xl text-gray-300 font-semibold mb-8">
          Tech I Know How to Deal With!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hovering">
            <img src="https://img-c.udemycdn.com/course/750x422/5380132_3dad.jpg" alt="HTML and CSS" className="w-full h-32 object-cover rounded-md mb-4" />
            <p className="text-xl text-white font-semibold">HTML and CSS</p>
            <p className="text-gray-400">HTML structures, CSS styles, design web content, enhance user experience.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hovering">
            <img src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png" alt="JavaScript" className="w-full h-32 object-cover rounded-md mb-4" />
            <p className="text-xl text-white font-semibold">JavaScript</p>
            <p className="text-gray-400">Dynamic, versatile, client-side scripting language.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hovering">
            <img src="https://www.freecodecamp.org/news/content/images/2021/12/React-redux-2.png" alt="React.js and Redux" className="w-full h-32 object-cover rounded-md mb-4" />
            <p className="text-xl text-white font-semibold">React.js and Redux</p>
            <p className="text-gray-400">JavaScript library for building UIs (React JS) and state management (Redux) in web applications.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hovering">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png" alt="Tailwind CSS" className="w-full h-32 object-cover rounded-md mb-4" />
            <p className="text-xl text-white font-semibold">Tailwind CSS</p>
            <p className="text-gray-400">CSS Framework to build smooth UIs.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hovering">
            <img src="https://img-c.udemycdn.com/course/480x270/3352204_9c9a_20.jpg" alt="Git / GitHub" className="w-full h-32 object-cover rounded-md mb-4" />
            <p className="text-xl text-white font-semibold">Git / GitHub</p>
            <p className="text-gray-400">Version control system for collaborative coding, tracking changes, and hosting repositories.</p>
          </div>
        </div>
      </div>
      

    )
}
export default Skills