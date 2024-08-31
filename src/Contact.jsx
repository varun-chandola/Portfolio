import React from "react";

const Contact = () => {
  return (
    <>
      <div className="text-4xl flex justify-center" id='contact'>
        <h1 className="text-green-400 underline decoration-wavy leading-loose">DM me anything . </h1>
      </div>
      <div id="contactMe" className="my-10 p-8 bg-[#333333] rounded-lg shadow-lg">
        <h1 className="text-4xl text-white font-extrabold mb-6 text-center">Connect with Me</h1>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-800 hover:bg-gray-700 transition duration-300 ease-in-out">
            <a href="https://www.instagram.com/varunchandola/?next=%2F" target="_blank" aria-label="Instagram Profile">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwH--J-ZMUg8puNfUxE6YXQi3yVHuAORDxow&s" alt="Instagram" className="w-full h-full object-cover" />
            </a>
          </div>
          <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-800 hover:bg-gray-700 transition duration-300 ease-in-out">
            <a href="mailto:varun7122001@gmail.com" aria-label="Email">
              <img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" alt="Email" className="w-full h-full object-cover" />
            </a>
          </div>
          <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-800 hover:bg-gray-700 transition duration-300 ease-in-out">
            <a href="https://www.linkedin.com/in/varun-chandola/" target="_blank" aria-label="LinkedIn Profile">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png" alt="LinkedIn" className="w-full h-full object-cover" />
            </a>
          </div>
          <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-800 hover:bg-gray-700 transition duration-300 ease-in-out">
            <a href="https://x.com/VarunChandola7" target="_blank" aria-label="Twitter Profile">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/X_logo.jpg/1200px-X_logo.jpg" alt="Twitter" className="w-full h-full object-cover" />
            </a>
          </div>
        </div>
      </div>

    </>
  );
};

export default Contact;