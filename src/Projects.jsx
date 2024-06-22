import React from "react";

const Projects = () => {
  return (
    <>
      <div className="head text-[40px] mx-[35%]">
        <h1>My Recent Projects</h1>
      </div>
      <div id="projects">
        <div className="flex flex-col bg-white h-auto w-[90vw] p-[20px] m-auto my-10 rounded-3xl hovering xl:w-3/5">
          <div className="mx-[40px] xl:w-2/4 xl:mx-[25%]">
            <img src="randomPassword.png" />
          </div>
          <div className="flex items-center flex-col xl:h-auto">
            <h1 className="text-4xl text-black">Random Password Generator</h1>
            <p className="hidden lg:contents lg:text-xl">
              The application allows you to create a random strong password and
              you can set the length of the password along with the choice to
              add numbers or special characters or both in your password . You
              can also copy the password to clipboard
            </p>
            <a
              href="https://github.com/varun-chandola/React-learning/tree/main/04-Random-password-generator"
              target="_blank"
            >
              <button className="my-[30px] bg-black p-6 w-[230px] rounded-full text-white text-3xl">
                Github
              </button>
            </a>
            <a
              href="https://strong-random-password.netlify.app/"
              target="_blank"
              className="text-2xl font-bold"
            >
              Live Link 🚀
            </a>
          </div>
        </div>

        <div className="flex flex-col bg-white h-auto w-[90vw] p-[20px] m-auto my-10 rounded-3xl hovering xl:w-3/5">
          <div className="mx-[40px]">
            <img src="tic-tac.png" width={850} />
          </div>
          <div className="flex items-center flex-col">
            <h1 className="text-4xl text-black mx-10">TIC TAC TOE</h1>
            <p className="hidden lg:contents lg:text-xl">
              Just A Tic Tac Toe (X/O) Game .
            </p>
            <a
              href="https://github.com/varun-chandola/javascript-learning/tree/main/Projects/X0_game"
              target="_blank"
            >
              <button className="my-[30px] bg-black p-6 w-[230px] rounded-full text-white text-3xl">
                Github
              </button>
            </a>
            <a href="https://xo-app.netlify.app/" target="_blank" className="text-2xl font-bold"
            >
            Live Link 🚀
            </a>
          </div>
        </div>

        <div className="flex flex-col bg-white h-auto w-[90vw] p-[20px] m-auto my-10 rounded-3xl hovering xl:w-3/5">
          <div className="mx-[40px]">
            <img src="rockPaper.png" width={1000} />
          </div>
          <div className="flex items-center flex-col">
            <h1 className="text-4xl text-black mx-10">ROCK PAPER SCISSOR</h1>
            <p className="hidden lg:contents lg:text-xl">
              Rock Paper Scissor Game .It is a player VS computer game . Also
              keep the track of all the games won and tied between the user and
              the Compute
            </p>
            <a
              href="https://github.com/varun-chandola/javascript-learning/tree/main/Projects/rockPaperScissor"
              target="_blank"
            >
              <button className="my-[30px] bg-black p-6 w-[230px] rounded-full text-white text-3xl">
                Github
              </button>
            </a>
            <a
              href="https://rock-paper-scissors-js-game-varun.netlify.app/"
              target="_blank"
              className="text-2xl font-bold"
            >
              Live Link 🚀
            </a>
          </div>
        </div>

        <div className="flex flex-col bg-white h-auto w-[90vw] p-[20px] m-auto my-10 rounded-3xl hovering xl:w-3/5">
          <div className="mx-[40px]">
            <img src="trump.png" width={800} />
          </div>
          <div className="flex items-center flex-col">
            <h1 className="text-4xl text-black flex mx-10">
              Random Quote Generator
            </h1>
            <p className="hidden lg:contents lg:text-xl">
              After Each click it generates a Random funny quote by Donald Trump
            </p>
            <a
              href="https://github.com/varun-chandola/javascript-learning/tree/main/Projects/randomQuotes"
              target="_blank"
            >
              <button className="my-[30px] bg-black p-6 w-[230px] rounded-full text-white text-3xl">
                Github
              </button>
            </a>
            <a href="https://random-trump-quote.netlify.app/" target="_blank" className="text-2xl font-bold"
            >
            Live Link 🚀
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
