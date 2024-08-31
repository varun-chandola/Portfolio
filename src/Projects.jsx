import React from "react";
const Projects = () => {
  return (
    <>
        <div className="text-5xl text-green-400 font-extrabold mb-4 underline decoration-wavy ml-10 leading-normal" id="projects">
          <h1>My Recent Projects</h1>
        </div>

        <div className="bg-[#222222] p-8">
          <h2 className="text-3xl text-gray-300 font-semibold mb-10">Here are some of my notable projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hovering">
              <img src="randomPassword.png" alt="Random Password Generator" className="w-full h-40 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl text-white font-bold mb-2">Random Password Generator</h2>
                <p className="text-gray-400 mb-4">Generate strong, random passwords with customizable length and options to include numbers and special characters. Easily copy passwords to clipboard.</p>
                <div className="flex space-x-4">
                  <a href="https://github.com/varun-chandola/React-learning/tree/main/04-Random-password-generator" target="_blank" className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Github</a>
                  <a href="https://strong-random-password.netlify.app/" target="_blank" className="inline-block bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">Live Link 🚀</a>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hovering">
              <img src="tic-tac.png" alt="Tic Tac Toe" className="w-full h-40 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl text-white font-bold mb-2">Tic Tac Toe</h2>
                <p className="text-gray-400 mb-4">A classic Tic Tac Toe game built with JavaScript. Play against the computer or a friend.</p>
                <div className="flex space-x-4">
                  <a href="https://github.com/varun-chandola/javascript-learning/tree/main/Projects/X0_game" target="_blank" className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Github</a>
                  <a href="https://xo-app.netlify.app/" target="_blank" className="inline-block bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">Live Link 🚀</a>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hovering">
              <img src="rockPaper.png" alt="Rock Paper Scissors" className="w-full h-40 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl text-white font-bold mb-2">Rock Paper Scissors</h2>
                <p className="text-gray-400 mb-4">A player vs. computer game with tracking for wins and ties. Simple yet engaging.</p>
                <div className="flex space-x-4">
                  <a href="https://github.com/varun-chandola/javascript-learning/tree/main/Projects/rockPaperScissor" target="_blank" className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Github</a>
                  <a href="https://rock-paper-scissors-js-game-varun.netlify.app/" target="_blank" className="inline-block bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">Live Link 🚀</a>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hovering">
              <img src="trump.png" alt="Random Trump Quote" className="w-full h-40 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl text-white font-bold mb-2">Generate a Random Quote by Donald Trump</h2>
                <p className="text-gray-400 mb-4">Get a random quote from Donald Trump with each refresh. A fun and simple project demonstrating API usage.</p>
                <div className="flex space-x-4">
                  <a href="https://github.com/varun-chandola/javascript-learning/tree/main/Projects/randomQuotes" target="_blank" className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Github</a>
                  <a href="https://random-trump-quote.netlify.app/" target="_blank" className="inline-block bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">Live Link 🚀</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Projects;
