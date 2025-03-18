import React, { useState ,useEffect  } from 'react';
import { FaYoutube, FaTiktok, FaDiscord, FaFacebook } from "react-icons/fa";

function Hero() {
    const [channelData, setChannelData] = useState({
      subscriberCount: 0,
      videoCount: 0,
      viewCount: 0,
    });
  
    useEffect(() => {
      fetch(
        "https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=UCC_P34t35REbiPzbHO_bifA&key=AIzaSyDcsfn7EkqklHYJwMS83-mfm7_O0uDHJAc"
      )
        .then((response) => response.json())
        .then((data) => {
          const { subscriberCount, videoCount, viewCount } = data.items[0].statistics;
          setChannelData({ subscriberCount, videoCount, viewCount });
        })
        .catch((error) => console.error("Error fetching data:", error));
    }, []);
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      {/* Left Section: Image */}
      <div className="w-full flex justify-center ">
        <img
          src="/kayna.png"
          alt="Kayna Maid Hero"
          className="object-cover "
        />
      </div>

      {/* Right Section: Text and Social Media */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6 mt-8 md:mt-0">
        {/* Text */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-md">HI, I am Kayna</h1>
        <p className="text-base sm:text-lg text-white leading-relaxed max-w-md">
          I'm a VTuber.
          <br />I'm a cute maid with a pretty face.
          <br />I love streaming games on YouTube!
        </p>

        {/* Social Media Logos */}
        <div className="flex space-x-3 sm:space-x-4 text-white text-3xl">
          {[
            { href: "https://youtube.com", icon: <FaYoutube />, alt: "YouTube" },
            { href: "https://tiktok.com", icon: <FaTiktok />, alt: "TikTok" },
            { href: "https://discord.com", icon: <FaDiscord />, alt: "Discord" },
            { href: "https://facebook.com", icon: <FaFacebook />, alt: "Facebook" },
          ].map(({ href, icon, alt }) => (
            <a
              key={alt}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="mt-6 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-6 text-white text-lg text-center">
          <span>Subscribe : {channelData.subscriberCount}</span>
          <span>Total View : {channelData.videoCount}</span>
          <span>Video : {channelData.viewCount}</span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
