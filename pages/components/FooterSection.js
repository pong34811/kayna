import React from "react";
import { FaYoutube, FaFacebook, FaTwitter, FaTiktok } from "react-icons/fa";
import Link from 'next/link'

function FooterSection() {
  return (
    <>
      <footer className="py-10 md:py-16 ">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center">
            <h1 className="font-medium text-pink-700 text-3xl md:text-4xl mb-5">
              ติดต่อ Kayna
            </h1>

            <p className="font-normal text-pink-600 text-md md:text-lg mb-10">
              สามารถติดตามและติดต่อฉันได้ผ่านช่องทางเหล่านี้เลยนะคะ! 💖
            </p>

            <div className="flex items-center justify-center space-x-6">
              {/* YouTube */}
              <Link
                href="https://www.youtube.com/channel/UCC_P34t35REbiPzbHO_bifA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-200 hover:bg-pink-300 transition ease-in-out duration-300"
              >
                <FaYoutube className="text-pink-700 text-2xl hover:text-pink-800" />
              </Link>

              {/* Facebook */}
              <Link
                href="https://www.facebook.com/KaynaVTB"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-200 hover:bg-pink-300 transition ease-in-out duration-300"
              >
                <FaFacebook className="text-pink-700 text-2xl hover:text-pink-800" />
              </Link>

              {/* X (Twitter) */}
              <Link
                href="https://x.com/kaynavtuber"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-200 hover:bg-pink-300 transition ease-in-out duration-300"
              >
                <FaTwitter className="text-pink-700 text-2xl hover:text-pink-800" />
              </Link>

              {/* TikTok */}
              <Link
                href="https://www.tiktok.com/@kayna_channel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-200 hover:bg-pink-300 transition ease-in-out duration-300"
              >
                <FaTiktok className="text-pink-700 text-2xl hover:text-pink-800" />
              </Link>
            </div>

            <div className="mt-10">
              <p className="font-normal text-pink-600 text-sm md:text-base">
                © 2025 Kayna Channel. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default FooterSection;