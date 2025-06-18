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
              className="text-white hover:text-red-400 transition"
              href="https://www.youtube.com/@KaynaVtuberTH"
              title="YouTube"
            >
              <YoutubeIcon className="h-6 w-6" />
            </Link>
            <Link
              isExternal
              className="text-white hover:text-blue-500 transition"
              href="https://www.facebook.com/KaynaVTB/"
              title="Facebook"
            >
              <FacebookIcon className="h-6 w-6" />
            </Link>
            <Link
              isExternal
              className="text-white hover:text-gray-400 transition"
              href="https://x.com/kaynavtuber"
              title="Twitter/X"
            >
              <TwitterIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>

        {/* Divider & Credit */}
        <div className="mt-6 border-t border-white/30 pt-4 text-center text-sm text-white/70">
          Powered by{" "}
          <Link
            isExternal
            className="underline hover:text-white"
            href="https://heroui.com"
          >
            HeroUI
          </Link>
        </div>
      </div>
    </footer>
  );
}
