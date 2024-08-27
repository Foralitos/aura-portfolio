import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Hero() {
  return (
    <div className=" min-h-screen md:mt-14 bg-[#EAEAEA] text-[#2B2C32] flex flex-col">
      <main className="flex-grow flex items-center px-4 lg:px-20 ">
        <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-4">
              TIME TO DISCOVER YOUR
              <br />
              <span className="text-7xl lg:text-9xl">DIGITAL FUTURE</span>
            </h1>
            <div className="w-12 h-1 bg-gray-900 mb-6"></div>
            <p className="text-lg mb-8">
              Finding the perfect digital solution can be a challenge. Our team
              of creatives and specialists makes web and mobile development
              easy.
            </p>
          </div>
          <div className="lg:w-1/2 relative">
            {/* <Image
          src="/placeholder.svg?height=600&width=600"
          alt="Modern home exterior"
          width={600}
          height={600}
          className="rounded-lg"
        /> */}
            <div className="absolute -top-4 -right-4 w-12 h-12">
              <div className="w-full h-full border-8 border-gray-900 rounded-full animate-spin"></div>
            </div>
          </div>
        </div>
      </main>
      <footer className="p-4 flex justify-center space-x-4">
        <a href="https://www.instagram.com/aura_mexico/">
          <FontAwesomeIcon icon={faInstagram} className="w-8 h-8" />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faGithub} className="w-8 h-8" />
        </a>
      </footer>
    </div>
  );
}

export default Hero;
