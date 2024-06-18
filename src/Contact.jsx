import React from "react";

const Contact = () => {
  return (
    <>
      <div className="head text-4xl flex justify-center">
        <h1>DM me anything . </h1>
      </div>
      <div
        id="contactMe"
        className="my-[30px] socials flex justify-around"
      >
        <div className="hovering m-2 rounded-full overflow-hidden">
          <a href="#" target="_blank">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwH--J-ZMUg8puNfUxE6YXQi3yVHuAORDxow&s" />
          </a>
        </div>
        <div className="hovering m-2 rounded-2xl">
          <a href="mailto:varun7122001@gmail.com">
            <img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" />
          </a>
        </div>
        <div className="hovering m-2 rounded-full overflow-hidden">
          <a href="https://www.linkedin.com/in/varun-chandola/" target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png" />
          </a>
        </div>
        <div className="hovering m-2 rounded-full overflow-hidden">
          <a href="https://x.com/VarunChandola7" target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/X_logo.jpg/1200px-X_logo.jpg" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
