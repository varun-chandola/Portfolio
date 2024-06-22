const About = () => {
  return (
    <div className="my-[150px]">
      <div className="px-[50px]">
        <h2 className="head">ABOUT ME</h2>
      </div>
      <div className="h-screen flex" id="about">
        <div id="education" className="flex w-[50%] flex-col mx-[15px]">
          <h1 className="info mx-[35px] text-[40px]">Education</h1>
          <div
            className="bg-white hovering"
            style={{
              background: "#033f47",
              // padding: "10px ",
              borderRadius: "20px",
              margin: "30px",
              height: "130px",
            }}
          >
            <h1 className="info text-[22px]">
              <b>Bachelor of Technology in Computer Science Engineering</b>
            </h1>
            <h3 className="py-5 head text-[19px]">
              Graphic Era Hill University , Dehradun (2021 - 2025)
            </h3>
          </div>
          <div className="hovering info bg-[#033f47] p-[10px] rounded-[20px] m-[30px]">
            <h1 className="info text-[22px]">
              <b>Schooling From Aryaman Vikram Birla Institute of Learning</b>
            </h1>
            <h3 className="py-5 head text-[19px]">
              Senior Secondary
            </h3>
          </div>
        </div>

        <div id="certification" className="flex w-[50%] flex-col">
          <h1 className="info text-[40px]">Certification</h1>
          <div className="hovering text-white m-[20px] p-[20px] w-1/2 rounded-[20px] h-[350px] bg-[#212121]">
            <a
              href="https://www.udemy.com/certificate/UC-b6b4354d-0939-4d5d-892c-d72bbeaf1f22/"
              target="_blank"
            >
              <img
                src="UC-b6b4354d-0939-4d5d-892c-d72bbeaf1f22.jpg"
                alt="Javascript Certificate"
                width={350}
              />
            </a>
          </div>
          <div className="hovering text-white m-[20px] p-[20px] w-1/2 rounded-[20px] h-[350px] bg-[#212121]">
            <a
              href="https://www.udemy.com/certificate/UC-fa58529a-1f94-40b0-afa6-d7e003b08a79/"
              target="_blank"
            >
              <img
                src="UC-fa58529a-1f94-40b0-afa6-d7e003b08a79.jpg"
                alt="Udemy DSA certificate"
                width={350}
              />
            </a>
          </div>
        </div>
      </div>

      <h1 className="head mx-[35px] my-[30px] text-[25px]">SKILLS</h1>
      <h1 className="my-[30px] info text-[40px] mx-[30px]">
        Tech I know how to deal with!
      </h1>
      <div className="flex flex-wrap mx-[30px]">
        <div className="hovering rounded-[30px] bg-[#033f47] w-[400px] h-[400px] flex flex-col mx-[35px]">
          <div className="rounded-[30px]">
            <img
              src="https://img-c.udemycdn.com/course/750x422/5380132_3dad.jpg"
              className="rounded-3xl"
              width={400}
            />
          </div>
          <div className="p-5">
            <h4 className="head">HTML and CSS</h4>
            <h2 className="info">
              <b>
                HTML structures, CSS styles, design web content, enhance user
                experience.
              </b>
            </h2>
          </div>
        </div>

        <div className="hovering rounded-[30px] bg-[#033f47] w-[400px] h-[430px] flex flex-col mx-[35px]">
          <div className="rounded-[30px]">
            <img
              src="https://blog.logrocket.com/wp-content/uploads/2021/02/machine-learning-libraries-javascript.png"
              className="rounded-3xl"
              width={500}
            />
          </div>
          <div className="p-5">
            <h4 className=" head ">JAVASCRIPT</h4>
            <h2 className="info">
              <b>
                JavaScript: Dynamic, versatile, client-side scripting language
                for web development.
              </b>
            </h2>
          </div>
        </div>

        <div className="hovering rounded-[30px] bg-[#033f47] w-[400px] h-[400px] flex flex-col mx-[35px]">
          <div className="rounded-[30px]">
            <img
              src="https://www.freecodecamp.org/news/content/images/2021/12/React-redux-2.png"
              className="rounded-3xl"
              width={660}
            />
          </div>
          <div className="p-5">
            <h4 className="head">REACT.JS and REDUX</h4>
            <h2 className="info">
              <b>
                JavaScript library for building UIs (React JS) and state
                management (Redux) in web applications.
              </b>
            </h2>
          </div>
        </div>

        <div className="hovering rounded-[30px] bg-[#033f47] w-[400px] h-[400px] flex flex-col mx-[35px]">
          <div className="rounded-[30px]">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png"
              className="rounded-3xl"
              width={660}
            />
          </div>
          <div className="p-5">
            <h4 className="head">TAILWIND CSS</h4>
            <h2 className="info">
              <b>
                CSS Framework to build smooth UIs
              </b>
            </h2>
          </div>
        </div>

        <div className="hovering rounded-[30px] bg-[#033f47] w-[400px] h-[400px] flex flex-col m-[35px]">
          <div className="rounded-[30px]">
            <img
              src="https://img-c.udemycdn.com/course/480x270/3352204_9c9a_20.jpg"
              className="rounded-3xl"
              width={450}
            />
          </div>
          <div className="p-5">
            <h4 className="head">GIT / GITHUB</h4>
            <h2 className="info">
              <b>
                Version control system for collaborative coding, tracking
                changes, and hosting repositories.
              </b>
            </h2>
          </div>
        </div>

        <div className="hovering rounded-[30px] bg-[#033f47] w-[400px] h-[400px] flex flex-col m-[35px]">
          <div className="rounded-[30px]">
            <img
              src="https://raw.githubusercontent.com/Benio101/cpp-logo/master/cpp_logo.png"
              width={190}
              className="rounded-3xl"
            />
          </div>
          <div className="p-5">
            <h4 className="head">C / C++</h4>
            <h2 className="info">
              <b>Help i problem solving skills and logic building</b>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;