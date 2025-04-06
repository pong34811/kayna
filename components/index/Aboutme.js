import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaYoutube, FaTiktok, FaDiscord, FaTwitch } from "react-icons/fa";

function Aboutme() {
  return (
    <section id='about' className="flex flex-col lg:flex-row bg-gradient-to-r from-[#FF2492] via-[#FF5FA8] to-[#FF8FC4] text-white py-20 px-10 lg:px-20" >
      <div className="flex-1 flex flex-col space-y-6 justify-center items-center  backdrop-blur-md text-white  p-10 sm:justify-center sm:items-center md:justify-center md:items-center lg:justify-start lg:items-start xl:justify-start xl:items-start sm:p-10 md:p-10 lg:p-10 xl:p-16">
        <h2 className="text-4xl font-extrabold mb-6 drop-shadow-lg bg-gradient-to-r from-white via-pink-200 to-white bg-clip-text text-transparent animate-gradient">
          About Me
        </h2>
        <p className="text-lg text-center sm:text-left md:text-left lg:text-left xl:text-left mb-4">
        “เราคือวีทูปเบอร์หน้าดีที่ชอบสตรีทเกมในแพลตฟอร์มยูทูปเบอร”
        </p>
        {/* Information cards with improved styling for pink theme */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6  ">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 shadow-sm  hover:bg-white/10 transition duration-300">
            <p className="text-lg">
              <span className="font-bold">Name:</span> Kayna
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 shadow-sm hover:bg-white/10 transition duration-300">
            <p className="text-lg ">
              <span className="font-bold">Birthday:</span> 23/10/2022
            </p>
          </div>

          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 shadow-sm hover:bg-white/10 transition duration-300 ">
            <p className="text-lg">
              <span className="font-bold">Likes:</span> Streaming ,Games, Editor ,Coding
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 shadow-sm hover:bg-white/10 transition duration-300">
            <p className="text-lg ">
              <span className="font-bold">Vtuber:</span> Live2D, Vroid
            </p>
          </div>
        </div>
        

        {/* Streaming Platforms - Improved with pink theme styling */}
        <div className="w-full bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-sm">
          <p className="text-xl font-bold mb-4 text-center sm:text-left text-white">
            Streaming Platforms
          </p>

          <div className="flex flex-wrap justify-center sm:justify-start gap-4">
            <Link
              href="https://www.youtube.com/channel/UCC_P34t35REbiPzbHO_bifA"
              target="_blank"
              className="relative group"
            >
              <div className="relative flex items-center space-x-2 bg-white text-black p-3 rounded-xl border border-red-500 transition-transform duration-300 hover:scale-105">
                <FaYoutube size={24} className="text-red-500" />
                <span className="font-medium">YouTube</span>
              </div>
            </Link>

            <Link
              href="https://www.tiktok.com/@kaynamaiid"
              target="_blank"
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black to-pink-600 rounded-xl blur opacity-50 group-hover:opacity-80 transition duration-300"></div>
              <div className="relative flex items-center space-x-2 bg-white text-black p-3 rounded-xl border border-gray-400 transition-transform duration-300 hover:scale-105">
                <FaTiktok size={24} className="text-black" />
                <span className="font-medium">TikTok</span>
              </div>
            </Link>

            <Link
              href="https://www.twitch.tv/kaynavtuberth"
              target="_blank"
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-50 group-hover:opacity-80 transition duration-300"></div>
              <div className="relative flex items-center space-x-2 bg-white text-black p-3 rounded-xl border border-purple-500 transition-transform duration-300 hover:scale-105">
                <FaTwitch size={24} className="text-purple-500" />
                <span className="font-medium">Twitch</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Community - Similar styling for consistency with pink theme */}
        <div className="w-full bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-sm">
          <p className="text-xl font-bold mb-4 text-center sm:text-left text-white">
            Community
          </p>

          <div className="flex flex-wrap justify-center sm:justify-start gap-4">
            <Link
              href="https://masuru.in.th/th/s/kayna"
              target="_blank"
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-pink-600 rounded-xl blur opacity-50 group-hover:opacity-80 transition duration-300"></div>
              <div className="relative flex items-center space-x-2 bg-white text-black p-3 rounded-xl border border-blue-400 transition-transform duration-300 hover:scale-105">
                <FaDiscord size={24} className="text-blue-400" />
                <span className="font-medium">Discord</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Call to action - Matching the pink theme */}
        <div className="w-full mt-4">
          <button className="w-full py-3 px-6 bg-gradient-to-r from-pink-500 to-pink-400 rounded-xl font-bold text-lg shadow-sm hover:from-pink-600 hover:to-pink-500 transition duration-300 transform hover:scale-[1.02]">
            Join My Stream!
          </button>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="flex-1 flex items-center justify-center mt-10 lg:mt-0">
        <Image
          src="/aboutme.png"
          alt="Kayna About Me"
          className="w-55 sm:w-65 md:w-75 lg:w-75 xl:w-75 2xl:w-75"
          width={600}
          height={600}
        />
      </div>
    </section>
  );
}

export default Aboutme;
