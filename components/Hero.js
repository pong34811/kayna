import React from "react";

function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen ">
      {/* Left Section: Image */}
      <div className="w-full flex justify-center">
        <img
          src="/kayna.png"
          alt="Kayna Maid Hero"
          className="object-cover"
        />
      </div>

      {/* Right Section: Text and Social Media */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6 mt-8 md:mt-0">
        {/* Text */}
        <h1 className="text-5xl font-extrabold text-white drop-shadow-md">HI, I am Kayna</h1>
        <p className="text-lg text-white leading-relaxed max-w-lg">
          I'm a VTuber.
          <br />
          I'm a cute maid with a pretty face.
          <br />I love streaming games on YouTube!
        </p>

        {/* Social Media Logos */}
        <div className="flex space-x-4">
          {[
            { href: "https://youtube.com", icon: "/icons/youtube.svg", alt: "YouTube" },
            { href: "https://tiktok.com", icon: "/icons/tiktok.svg", alt: "TikTok" },
            { href: "https://discord.com", icon: "/icons/discord.svg", alt: "Discord" },
            { href: "https://facebook.com", icon: "/icons/facebook.svg", alt: "Facebook" },
          ].map(({ href, icon, alt }) => (
            <a
              key={alt}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110"
            >
              <img src={icon} alt={alt} className="w-12 h-12 drop-shadow-md" />
            </a>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="mt-6 flex space-x-6 text-white text-lg ">
          <span>Subscribe : xxxx</span>
          <span>Total View : xxxx</span>
          <span>Video : xxxx</span>
        </div>
      </div>
    </div>
  );
}

export default Hero;