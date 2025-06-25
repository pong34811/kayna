import React from "react";

import ContactUs from "@/components/contacts/contactUs";
import { Facebook, Mail, MessageSquare, ExternalLink } from "lucide-react";

function page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-10 bg-transparent p-10 text-white">
      <section className="relative w-full overflow-hidden rounded-2xl border border-pink-300/50 bg-[#FF2492]/90 shadow-xl backdrop-blur-md transition-all duration-500 hover:shadow-pink-500/25 p-6">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 drop-shadow-lg">
          ติดต่อเรา
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          หากคุณมีคำถามหรือข้อสงสัยเกี่ยวกับบริการของเรา สามารถติดต่อได้ที่:
        </p>

        <div className="space-y-4">
          {/* Facebook */}
          <div className="flex items-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
              <Facebook className="w-5 h-5 text-blue-300" />
            </div>
            <div className="flex-grow">
              <div className="flex items-center gap-2 mb-1">
                <strong className="text-white font-semibold">Facebook</strong>
                <span className="px-2 py-0.5 text-xs bg-green-500/20 text-green-300 rounded-full border border-green-400/30">
                  แนะนำ
                </span>
              </div>
              <a
                href="https://www.facebook.com/KaynaVTB"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors duration-200 group-hover:translate-x-1"
              >
                KaynaVTB
                <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100" />
              </a>
            </div>
          </div>

          {/* Gmail */}
          <div className="flex items-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <div className="flex-shrink-0 w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
              <Mail className="w-5 h-5 text-red-300" />
            </div>
            <div className="flex-grow">
              <strong className="text-white font-semibold block mb-1">
                Gmail
              </strong>
              <a
                href="mailto:pong34811@gmail.com"
                className="flex items-center gap-2 text-red-200 hover:text-white transition-colors duration-200 group-hover:translate-x-1"
              >
                pong34811@gmail.com
                <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100" />
              </a>
            </div>
          </div>

          {/* Discord */}
          <div className="flex items-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <div className="flex-shrink-0 w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-purple-300" />
            </div>
            <div className="flex-grow">
              <strong className="text-white font-semibold block mb-1">
                Discord
              </strong>
              <div className="flex items-center gap-2 text-purple-200">
                <span>kayna001</span>
                <span className="text-white/60">/</span>
                <a
                  href="https://discord.gg/EPF4zcyy8G"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors duration-200 group-hover:translate-x-1"
                >
                  เข้าร่วมเซิร์ฟเวอร์
                  <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
       <ContactUs />
    </div>
  );
}

export default page;
