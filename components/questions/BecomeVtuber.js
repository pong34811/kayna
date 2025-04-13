import React from "react";

function BecomeVtuber() {
  return (
    <section
      id="BecomeVtuber"
      className="flex flex-col lg:flex-row text-white "
    >
      <div className="flex-1 flex flex-col space-y-3 justify-center items-center text-white p-10">
        <h2 className="text-4xl font-extrabold drop-shadow-lg bg-gradient-to-r from-white via-pink-200 to-white bg-clip-text text-transparent animate-gradient">
          ทำไมถึงมาเป็น Vtuber?
        </h2>

        <div className="w-full max-w-3xl rounded-2xl bg-white/10 backdrop-blur-lg p-8 shadow-xl border border-white/20 transition hover:shadow-2xl">
          <div className="space-y-3">
            {/* Main Definition */}
            <div className="border-b border-white-600 pb-6">
              <p className="text-white leading-relaxed">
                เมื่อก่อนช่วงโควิด 19 เคมีโอกาสได้ดูไลฟ์สตรีมของ Vtuber ในเเอป
                Reality เเละรู้สึกสนุกมากๆ มีความสุข จนอยู่มาวันหนึ่ง Vtuber
                ที่เคชืนชอบได้เลิกสตรีมไปทำให้ช่วงนั้นรู้สึกเหงา
                ช่วงนั้นเลยคิดว่า “ทำไมเราไม่ลองเป็น Vtuber ดูบ้าง”
                เเละส่วนตัวเคมีเองก็ชอบเล่นเกมอยู่เเล้ว เลยเริ่มศึกษาการทำ
                Vtuber เเละการสตรีมมาจนถึงทุกวันนี้
                <br />
                *หากพี Urana Ch. กำลังอ่านอยู่
                เคขอขอบคุณพี่มากๆนะคะที่ทำให้เคได้รู้จักกับ Vtuber
                พีเป็นบุคคลที่มีอิทธิพลต่อเคมากๆเลยครับ*
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BecomeVtuber;
