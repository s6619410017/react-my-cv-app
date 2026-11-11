import NavBar from "../components/Navbar";
import { FaLinkedinIn, FaGithub, FaJava } from "react-icons/fa";

import html5 from "../assets/html5.png";
import css3 from "../assets/css3.png";
import js from "../assets/js.png";
import nodejs from "../assets/nodejs.png";
import reactLogo from "../assets/react.svg";
import spring from "../assets/spring.png";
import figma from "../assets/figma.png";
import firebase from "../assets/Firebase.png";
import profile from "../assets/Profile.jpg";

export default function Home() {
  return (
    <div className="bg-black min-h-screen w-full text-white flex flex-col justify-between font-sans selection:bg-[#FFF714] selection:text-black">
      {/* ส่วนของ Navbar ด้านบน */}
      <NavBar pname="h" colorLinkNavbar="#FFF714" />

      {/* ส่วน Hero Section แนวนอนเต็มจอ */}
      <div className="w-full px-8 md:px-16 lg:px-24 py-12 flex flex-col md:flex-row items-center justify-between gap-12 my-auto max-w-7xl mx-auto">
        {/* ข้อความรายละเอียดด้านซ้าย */}
        <div className="flex flex-col gap-6 max-w-2xl">
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
            Full Stack Web <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
              Developer !
            </span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl font-normal tracking-wide leading-relaxed">
            Hi, I'm <span className="text-[#FFF714] font-semibold">arnon888</span>. A passionate Full Stack Web Developer based in Thailand.
          </p>

          {/* ปุ่มไอคอนโซเชียล */}
          <div className="flex items-center gap-5 mt-2">
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-black hover:bg-[#FFF714] hover:scale-110 hover:shadow-[0_0_20px_rgba(255,247,20,0.4)] transition-all duration-300"
            >
              <FaLinkedinIn className="text-2xl" />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-black hover:bg-[#FFF714] hover:scale-110 hover:shadow-[0_0_20px_rgba(255,247,20,0.4)] transition-all duration-300"
            >
              <FaGithub className="text-2xl" />
            </a>
          </div>
        </div>

        {/* รูปโปรไฟล์วงกลมด้านขวาพร้อมวงแหวนนีออน */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#FFF714] to-emerald-400 rounded-full blur opacity-25 group-hover:opacity-60 transition duration-500"></div>
          <div className="relative w-[320px] h-[320px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden bg-neutral-900 border-2 border-white/10 flex-shrink-0 shadow-2xl">
            <img
              src={profile}
              alt="arnon888's profile"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* ส่วน Tech Stacks ด้านล่างสุด */}
      <div className="w-full pb-12 flex flex-col items-center gap-6">
        <span className="text-gray-400 text-sm font-bold uppercase tracking-[0.25em]">
          My Tech Stacks
        </span>

        {/* ไอคอนเรียงแนวนอนพร้อมเอฟเฟกต์ Hover */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-10 px-6">
          <img src={html5} alt="HTML5" className="h-10 w-auto hover:scale-125 transition-transform duration-300 grayscale hover:grayscale-0 cursor-pointer" />
          <img src={css3} alt="CSS3" className="h-10 w-auto hover:scale-125 transition-transform duration-300 grayscale hover:grayscale-0 cursor-pointer" />
          <img src={js} alt="JavaScript" className="h-10 w-auto hover:scale-125 transition-transform duration-300 grayscale hover:grayscale-0 cursor-pointer" />
          <img src={nodejs} alt="Node.js" className="h-10 w-auto hover:scale-125 transition-transform duration-300 grayscale hover:grayscale-0 cursor-pointer" />
          <img src={reactLogo} alt="React" className="h-10 w-auto hover:scale-125 transition-transform duration-300 grayscale hover:grayscale-0 cursor-pointer" />
          <img src={spring} alt="Spring Boot" className="h-10 w-auto hover:scale-125 transition-transform duration-300 grayscale hover:grayscale-0 cursor-pointer" />
          <FaJava className="text-gray-400 hover:text-[#E76F00] text-4xl hover:scale-125 transition-all duration-300 cursor-pointer" />
          <img src={figma} alt="Figma" className="h-10 w-auto hover:scale-125 transition-transform duration-300 grayscale hover:grayscale-0 cursor-pointer" />
          <img src={firebase} alt="Firebase" className="h-10 w-auto hover:scale-125 transition-transform duration-300 grayscale hover:grayscale-0 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}