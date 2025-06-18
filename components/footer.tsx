import React from "react";
import { Link } from "@heroui/link";
import { FacebookIcon, TwitterIcon, YoutubeIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#FF2492] text-white shadow-inner p-5">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <p className="text-lg font-semibold tracking-wide">
              Kayna VTuber © {new Date().getFullYear()}
            </p>
            <p className="text-sm text-pink-100">
              ส่งพลังบวกทุกวัน 💖 เล่นเกม พูดคุย และ Live สด!
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <Link
              isExternal
              href="https://www.youtube.com/@KaynaVtuberTH"
              title="YouTube"
              className="text-white hover:text-red-400 transition"
            >
              <YoutubeIcon className="h-6 w-6" />
            </Link>
            <Link
              isExternal
              href="https://www.facebook.com/KaynaVTB/"
              title="Facebook"
              className="text-white hover:text-blue-500 transition"
            >
              <FacebookIcon className="h-6 w-6" />
            </Link>
            <Link
              isExternal
              href="https://x.com/kaynavtuber"
              title="Twitter/X"
              className="text-white hover:text-gray-400 transition"
            >
              <TwitterIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>

        {/* Divider & Credit */}
        <div className="mt-6 border-t border-white/30 pt-4 text-center text-sm text-white/70">
          Powered by <Link href="https://heroui.com" isExternal className="underline hover:text-white">HeroUI</Link>
        </div>
      </div>
    </footer>
  );
}
