import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaYoutube, FaTiktok, FaDiscord, FaTwitch } from "react-icons/fa";

function Schedule() {
  return (
    <section id="schedule" className="flex flex-col justify-center items-center  lg:flex-row text-white py-20 px-10 lg:px-20">
      <div className="flex-1 flex items-center justify-center mt-10 lg:mt-0">
        <Image
          src="/Schedule.webp"
          alt="Kayna About Me"
          className="w-55 sm:w-65 md:w-75 lg:w-100 xl:w-100 2xl:w-100"
          width={1920}
          height={6000}
        />
      </div>
      <div className="flex-1 flex flex-col space-y-6 justify-center items-center   text-white  p-10 sm:justify-center sm:items-center md:justify-center md:items-center lg:justify-start lg:items-start xl:justify-start xl:items-start sm:p-10 md:p-10 lg:p-10 xl:p-16">
        <h2 className=" font-extrabold mb-6 drop-shadow-lg text-3xl md:text-4xl">
         Live Stream Schedule
        </h2>
        <p className="text-lg text-center  sm:text-left md:text-left lg:text-left xl:text-left mb-4">
        “อัปเดตเวลาสตรีมของเรา เพื่อไม่ให้พลาดทุกความสนุก!”
        </p>
        <div className="w-full space-y-4">
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold flex items-center gap-2">
               ตารางเวลา
            </h3>
            <div className="mt-3 space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-lg">📆 Monday - Friday</span>
                <span className="text-lg">🕒 19:30 - 20:30</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-lg">⛔ Saturday - Sunday</span>
                <span className="text-lg">No Live Stream</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Schedule;
