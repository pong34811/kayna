import React from "react";

function Vtubers() {
  return (
    <section id="Vtubers" className="flex flex-col lg:flex-row text-white">
      <div className="flex-1 flex flex-col space-y-3 justify-center items-center text-white ">
        <h2 className="text-4xl font-extrabold  drop-shadow-lg bg-gradient-to-r from-white via-pink-200 to-white bg-clip-text text-transparent animate-gradient">
          VTuber คืออะไร?
        </h2>

        <div className="w-full max-w-3xl rounded-2xl bg-white/10 backdrop-blur-lg p-8 shadow-xl border border-white/20 transition hover:shadow-2xl">
          <div className="space-y-3">
            {/* Main Definition */}
            <div className="border-b border-white-600 pb-6">
              <p className="text-white leading-relaxed">
                VTuber (เรียกเต็มๆว่า Virtual YouTuber) คือ
                ผู้สร้างคอนเทนต์ที่ใช้อวตารดิจิทัลเป็นตัวแทนของตนเองในการถ่ายทอดสดและสร้างวิดีโอ
                โดยส่วนใหญ่จะเป็นตัวละครที่ได้แรงบันดาลใจมาจากอนิเมะ
                ซึ่งสามารถจับการเคลื่อนไหวและการแสดงออกทางสีหน้าของผู้ใช้งานได้แบบเรียลไทม์
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vtubers;
