
import NavBar from "../components/Navbar";
import { FaLinkedinIn, FaGithub, FaJava } from "react-icons/fa";

import html5 from "../assets/html5.png";
import css3 from "../assets/css3.png";
import js from "../assets/js.png";
import nodejs from "../assets/nodejs.png";
import reactLogo from "../assets/react.png";
import spring from "../assets/spring.png";
import figma from "../assets/figma.png";
import firebase from "../assets/Firebase.png";

export default function Home() {
  return (
    <div className="bg-black min-h-screen w-full text-white flex flex-col justify-between">
      {/* Navbar */}
      <NavBar pname="h" colorLinkNavbar="#FFF714" />

      {/* Hero Section */}
      <div className="w-full px-6 md:px-24 py-16 flex flex-col items-center justify-center text-center my-auto">
        <div className="flex flex-col items-center gap-5 max-w-3xl">
          <h1 className="text-white text-5xl lg:text-7xl font-bold leading-tight">
            Full Stack Web
            <br />
            Developer !
          </h1>

          <p className="text-white text-lg font-normal">
            Hi, I'm arnon888. A passionate Full Stack Web Developer based in Thailand.
          </p>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-4 mt-3">
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white hover:bg-gray-200 transition-colors"
            >
              <FaLinkedinIn className="text-black text-2xl" />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white hover:bg-gray-200 transition-colors"
            >
              <FaGithub className="text-black text-2xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Tech Stacks */}
      <div className="w-full pb-10 flex flex-col items-center gap-4">
        <span className="text-white text-base font-semibold">
          My Tech Stacks
        </span>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 px-4">
          <img src={html5} alt="HTML5" className="h-10 w-auto" />
          <img src={css3} alt="CSS3" className="h-10 w-auto" />
          <img src={js} alt="JavaScript" className="h-10 w-auto" />
          <img src={nodejs} alt="Node.js" className="h-10 w-auto" />
          <img src={reactLogo} alt="React" className="h-10 w-auto" />
          <img src={spring} alt="Spring Boot" className="h-10 w-auto" />
          <FaJava className="text-[#E76F00] text-4xl" />
          <img src={figma} alt="Figma" className="h-10 w-auto" />
          <img src={firebase} alt="Firebase" className="h-10 w-auto" />
        </div>
      </div>
    </div>
  );
}
