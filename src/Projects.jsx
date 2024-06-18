import React from "react";

const Projects = () => {
  return (
    <>
      <div className="head text-[40px] mx-[35%]">
        <h1>My Recent Projects</h1>
      </div>
      <div id="projects">
        <div className="flex mx-[30px] bg-white h-[350px] p-[20px] my-[50px] rounded-3xl hovering">
          <div className="mx-[40px]">
            <img src="randomPassword.png" />
          </div>
          <div>
            <h1 className="text-4xl text-black">Random Password Generator</h1>
            <p>The application allows you to create a random strong password and you can set the length of the password along with the choice to add numbers or special characters or both in your password . You can also copy the password to clipboard</p>
            <a href="https://github.com/varun-chandola/React-learning/tree/main/04-Random-password-generator" target="_blank" ><button className="my-[30px] bg-black p-6 w-[230px] text-white text-3xl">Github</button></a>
          </div>
        </div>


        <div className="flex mx-[30px] bg-white h-[450px] p-[20px] my-[50px] rounded-3xl hovering">
          <div className="mx-[40px]">
            <img src="tic-tac.png" width={850} />
          </div>
          <div>
            <h1 className="text-4xl text-black">TIC TAC TOE</h1>
            <p>Just A Tic Tac Toe (X/O) Game .</p>
            <a href="https://github.com/varun-chandola/javascript-learning/tree/main/Projects/X0_game" target="_blank" ><button className="my-[30px] bg-black p-6 w-[230px] text-white text-3xl">Github</button></a>
          </div>
        </div>


        <div className="flex mx-[30px] bg-white h-[450px] p-[20px] my-[50px] rounded-3xl hovering">
          <div className="mx-[40px]">
            <img src="rockPaper.png" width={1000} />
          </div>
          <div>
            <h1 className="text-4xl text-black">ROCK PAPER SCISSOR</h1>
            <p>Rock Paper Scissor Game .It is a player VS computer game . Also keep the track of all the games won and tied between the user and the Compute</p>
            <a href="https://github.com/varun-chandola/javascript-learning/tree/main/Projects/rockPaperScissor" target="_blank" ><button className="my-[30px] bg-black p-6 w-[230px] text-white text-3xl">Github</button></a>
          </div>
        </div>


        <div className="flex mx-[30px] bg-white h-[450px] p-[20px] my-[50px] rounded-3xl hovering">
          <div className="mx-[40px]">
            <img src="trump.png" width={800} />
          </div>
          <div>
            <h1 className="text-4xl text-black">Random Quote Generator</h1>
            <p>After Each click it generates a Random funny quote by Donald Trump</p>
            <a href="https://github.com/varun-chandola/javascript-learning/tree/main/Projects/randomQuotes" target="_blank" ><button className="my-[30px] bg-black p-6 w-[230px] text-white text-3xl">Github</button></a>
          </div>
        </div>

      </div>
    </>
  );
};

export default Projects;
