import React from "react";
import Image from "next/image";

function ProfileSection() {
  return (
    <section className=" py-10 md:py-16 bg-pink-50" id="ProfileSection">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="mb-10 lg:mb-0 text-center lg:text-left">
            <h1 className="font-medium text-pink-700 text-3xl md:text-4xl mb-5">
              🎀 เคนะのプロフィール 🎀
            </h1>
            <p className="font-normal text-pink-600 text-sm md:text-lg mb-8">
              เมดน้อยผู้เปี่ยมไปด้วยพลังแห่งความน่ารัก
              <br />
              พร้อมส่งมอบความสุขในทุกมิติให้คุณ!
            </p>
            <div className="flex justify-center lg:justify-start">
              <Image
                src="/Mascot.webp"
                width={320}
                height={320}
                alt="Kayna Mascot"
                className="w-full max-w-xs rounded-xl border-4 border-gray-500 shadow-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col space-y-10 lg:space-y-24">
            {/* Card 1 */}
            <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
              <h1 className="font-normal text-pink-700 text-3xl md:text-4xl">
                🌸
              </h1>
              <span className="w-20 md:w-28 h-0.5 bg-pink-200 my-4 md:my-0"></span>
              <div>
                <h1 className="font-normal text-pink-700 text-3xl md:text-4xl mb-5">
                  เกี่ยวกับฉัน
                </h1>
                <p className="font-normal text-pink-600 text-sm md:text-lg">
                  สวัสดีค่า~!
                  <br />
                  เคนะเป็นเมดเสมือนสุดคิวท์ที่ชื่นชอบการสร้างคอนเทนต์สนุกๆ 🎮
                  <br />
                  พร้อมให้บริการทั้งการเล่นเกมแบบอินเตอร์แอคทีฟ
                  <br />
                  และสร้างความบันเทิงในรูปแบบที่หลากหลายให้ทุกคนค่ะ!
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
              <h1 className="font-normal text-blue-700 text-3xl md:text-4xl">
                📮
              </h1>
              <span className="w-20 md:w-28 h-0.5 bg-blue-200 my-4 md:my-0"></span>
              <div>
                <h1 className="font-normal text-blue-700 text-3xl md:text-4xl mb-5">
                  ติดต่อ合作
                </h1>
                <div className="font-normal text-blue-600 text-sm md:text-lg space-y-3">
                  <p>
                    🏮 Facebook:
                    <a
                      href="https://facebook.com/KaynaVTB"
                      className="text-pink-500 hover:underline ml-2"
                    >
                      KaynaVTB Page
                    </a>
                  </p>
                  <p>
                    🎴 Discord:
                    <span className="bg-blue-100 p-1 rounded ml-2">
                      477423203019653130
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
              <h1 className="font-normal text-purple-700 text-3xl md:text-4xl">
                ✨
              </h1>
              <span className="w-20 md:w-28 h-0.5 bg-purple-200 my-4 md:my-0"></span>
              <div>
                <h1 className="font-normal text-purple-700 text-3xl md:text-4xl mb-5">
                  คนวาด && คนริก
                </h1>
                <div className="font-normal text-purple-600 text-sm md:text-lg space-y-2">
                  <p>
                    🎨 ママ Artist:
                    <span className="text-blue-500 ml-1">@Lunyatic</span>
                  </p>
                  <p>
                    🛠️ ป๊าป้า Engineer:
                    <span className="text-green-500 ml-1">@masaomiayu863</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-20 text-center animate-bounce">
          <p className="text-2xl md:text-3xl font-semibold text-pink-500">
            ✨ มาเริ่มการผจญภัยสนุกๆ ไปด้วยกันนะ! 🎉
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProfileSection;
