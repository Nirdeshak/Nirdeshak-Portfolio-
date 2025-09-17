import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 bg-gray-900 text-center scroll-mt-24"
    >
      <h1 className="text-3xl md:text-4xl text-white mb-10 animate-textColorChange font-bold">
        CONTACT ME
      </h1>

      <div
        className="flex flex-wrap justify-center gap-6 "
        data-aos="zoom-in-up"
        data-aos-duration="1000"
      >
        {/* <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full bg-gray-800 hover:bg-pink-500 transition-colors  border-sky-500  border-4 animate-borderGradient mb-4"
        >
          <FaInstagram className="text-4xl text-white" />
        </a> */}

        {/* <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full bg-gray-800 hover:bg-pink-500 transition-colors  border-sky-500  border-4 animate-borderGradient mb-4"
        >
          <CiFacebook className="text-4xl text-white" />
        </a> */}

        <a
        href="https://www.linkedin.com/in/nirdeshakwakle" 
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full bg-gray-800 hover:bg-pink-500 transition-colors  border-sky-500  border-4 animate-borderGradient mb-4"
        >
          <CiLinkedin className="text-4xl text-white" />
        </a>

        {/* <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full bg-gray-800 hover:bg-pink-500 transition-colors  border-sky-500  border-4 animate-borderGradient mb-4"
        >
          <FaSquareXTwitter className="text-4xl text-white" />
        </a> */}

        <a
          href="https://github.com/Nirdeshak"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full bg-gray-800 hover:bg-pink-500 transition-colors  border-sky-500  border-4 animate-borderGradient mb-4"
        >
          <FaGithubSquare className="text-4xl text-white" />
        </a>
<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=nirdeshakwakle1304@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="p-4 rounded-full bg-gray-800 hover:bg-pink-500 transition-colors border-sky-500 border-4 animate-borderGradient mb-4"
>
  <SiGmail className="text-4xl text-white" />
</a>
      </div>
    </section>
  );
};

export default Contact;
