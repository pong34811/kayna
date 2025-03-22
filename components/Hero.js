"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  FaYoutube,
  FaTiktok,
  FaDiscord,
  FaFacebook,
  FaUserFriends,
  FaEye,
  FaVideo,
} from "react-icons/fa";
import { fetchChannelData } from "../controllers/channelData";
import Image from "next/image";

function Hero() {
  const [channelData, setChannelData] = useState({
    subscriberCount: 0,
    videoCount: 0,
    viewCount: 0,
  });

  useEffect(() => {
    const getChannelData = async () => {
      const data = await fetchChannelData();
      setChannelData(data);
    };
    getChannelData();
  }, []);

  return (
    <>
      <section className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row">
        <div className="basis-4/6">
          <Image
            src="/kayna.png"
            alt="Kayna Maid Hero"
            className="w-full sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full"
            width={1920}
            height={6000}
          />
        </div>
        <div className="basis-1/3 justify-between px-6 py-20">
          <h1 className="text-4xl  sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-white font-bold">
            HI, I am Kayna
          </h1>

          <p className="text-lg sm:text-md md:text-md lg:text-md xl:text-xl 2xl:text-2xl text-white  mt-5 ">
            I&apos;m a VTuber.
            <br />
            I&apos;m a cute maid with a pretty face.
            <br />I love streaming games on YouTube!
          </p>

          <div className="flex flex-row space-x-4 text-4xl mt-6">
            <Link
              href="https://www.youtube.com/channel/UCC_P34t35REbiPzbHO_bifA"
              target="_blank"
              className="text-red-500 transition-transform duration-300 hover:scale-110"
            >
              <FaYoutube />
            </Link>
            <Link
              href="https://masuru.in.th/th/s/kayna"
              target="_blank"
              className="text-blue-400 transition-transform duration-300 hover:scale-110"
            >
              <FaDiscord />
            </Link>
            <Link
              href="https://www.facebook.com/KaynaVTB"
              target="_blank"
              className="text-blue-600 transition-transform duration-300 hover:scale-110"
            >
              <FaFacebook />
            </Link>
            <Link
              href="https://www.tiktok.com/@kayna_channel"
              target="_blank"
              className="text-black transition-transform duration-300 hover:scale-110"
            >
              <FaTiktok />
            </Link>
          </div>

          {/* Statistics Section */}
          <div className="grid  text-white mt-6 font-bold sm:grid-cols-3 gap-2 ">
            <div className="flex flex-col items-center bg-white/10 shadow-md rounded-lg p-4">
              <FaUserFriends className="text-4xl text-yellow-400 mb-2" />
              <span className="text-2xl sm:text-2xl md:text-lg lg:text-xl xl:text-2xl ">
                {channelData.subscriberCount}
              </span>
              <span className="text-2xl sm:text-xs md:text-xs">
                Subscribers
              </span>
            </div>
            <div className="flex flex-col items-center bg-white/10 shadow-md rounded-lg p-4">
              <FaEye className="text-4xl text-blue-400 mb-2 sm:text-4xl md:text-4xl lg:text-4xl" />
              <span className="text-2xl sm:text-2xl md:text-lg lg:text-xl xl:text-2xl ">
                {channelData.viewCount}
              </span>
              <span className="text-2xl sm:text-xs md:text-xs">
                Total Views
              </span>
            </div>
            <div className="flex flex-col items-center bg-white/10 shadow-md rounded-lg p-4">
              <FaVideo className="text-4xl text-red-400 mb-2" />
              <span className="text-2xl sm:text-2xl md:text-lg lg:text-xl xl:text-2xl ">
                {channelData.videoCount}
              </span>
              <span className="text-2xl sm:text-xs md:text-xs">Videos</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
