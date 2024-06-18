import React from "react";

const Home = () => {
  return (
    <>
      <div className="flex sm:(flex h-screen)">
        <div className="m-10 sm:(w-[50%] border-white flex flex-col justify-center items-center flex-col) ">
          <h1 className="info text-4xl sm:(text-[130px] text-white)">
            Hi , I am
          </h1>
          <h1 className="head text-[50px] sm:(text-[90px] head )">
            Varun Chandola
          </h1>
          <p className="info text-2xl p-10 sm:(info text-[30px] mx-[20px]) "><br/>
            I am a <span className="head">FrontEnd developer</span>! Upskilling to become a <br/>
            Full Stack Developer
          </p>
        </div>
        <div className="hovering rounded-full overflow-hidden m-10">
          <img src="varun.jpg" width={400} />
        </div>
      </div>
    </>
  );
};

export default Home;

/**
 * <div className="flex h-screen">
    <div className='w-[50%] border-white flex justify-center items-center flex-col'>
        <h1 className='text-[130px] text-white'>Hi , I am</h1>
        <h1 className='text-[90px] head '>Varun Chandola</h1>
        <p className='info text-[30px]'>I am a FrontEnd developer !<br /> Upskilling to become a Full Stack Developer</p>
    </div>
    <div className='hovering'>
            <img src="varun.jpg" width={500}/>
    </div>
</div>
 */
