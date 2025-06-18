"use client";
import { Avatar, Card } from "@heroui/react";
import { button as buttonStyles } from "@heroui/theme";
import { FacebookIcon, TwitterIcon, YoutubeIcon } from "lucide-react";
import { Link as HeroLink } from "@heroui/link";

function HeroCard() {
  return (
    <section>
      {/* Hero Section */}
      <Card className="group relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-pink-400 bg-[#FF2492] p-10 shadow-[0_8px_30px_rgba(255,192,203,0.25)] backdrop-blur-md transition-all duration-300">
        <div className="pointer-events-none absolute -inset-px z-0 rounded-[2rem] bg-gradient-to-br from-pink-300/20 to-white/10 opacity-0 blur-[6px] transition-opacity duration-500" />
        <div className="relative z-10 grid grid-cols-1 items-center gap-10 sm:grid-cols-3">
          <div className="flex justify-center">
            <Avatar
              alt="Kayna VTuber"
              className="h-44 w-44 rounded-full border-[10px] border-pink-400 shadow-xl shadow-pink-300 transition-transform duration-300 hover:rotate-[2deg] hover:scale-105"
              size="lg"
              src="/kayna.png"
            />
          </div>
          <div className="space-y-4 text-pink-100 sm:col-span-2">
            <div className="flex justify-center lg:justify-start">
              <h2 className="text-3xl font-bold text-pink-200 drop-shadow">
                สวัสดีค่า~! ฉันคือ Kayna 💖
              </h2>
            </div>
            <div className="flex justify-center lg:justify-start">
              <p className="leading-relaxed">
                VTuber ผู้ชื่นชอบเกม พูดคุย และมอบพลังบวกผ่าน Live สด!
              </p>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-4 lg:justify-start">
              <HeroLink
                isExternal
                className={buttonStyles({
                  className:
                    "flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white p-2 shadow-lg transition-all duration-300",
                  color: "primary",
                  radius: "full",
                  variant: "shadow",
                })}
                href="https://www.youtube.com/@KaynaVtuberTH"
              >
                <YoutubeIcon className="h-4 w-4" />
                YouTube
              </HeroLink>
              <HeroLink
                isExternal
                className={buttonStyles({
                  className:
                    "flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white p-2 shadow-lg transition-all duration-300",
                  color: "primary",
                  radius: "full",
                  variant: "shadow",
                })}
                href="https://www.facebook.com/KaynaVTB/"
              >
                <FacebookIcon className="h-4 w-4" />
                Facebook
              </HeroLink>
              <HeroLink
                isExternal
                className={buttonStyles({
                  className:
                    "flex items-center gap-1 bg-black hover:bg-gray-800 text-white p-3 shadow-lg transition-all duration-300",
                  color: "primary",
                  radius: "full",
                  variant: "shadow",
                })}
                href="https://x.com/kaynavtuber"
              >
                <TwitterIcon className="h-4 w-4" />
                X.com
              </HeroLink>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}

export default HeroCard;
