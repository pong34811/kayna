import React from "react";

function KeywordVtuber() {
  return (
    <section
      id="KeywordVtuber"
      className="flex flex-col lg:flex-row text-white"
    >
      <div className="flex-1 flex flex-col space-y-6 justify-center items-center px-6">
        <h2 className="text-4xl font-extrabold drop-shadow-lg bg-gradient-to-r from-white via-pink-200 to-white bg-clip-text text-transparent animate-gradient text-center">
          ที่มาของชื่อ Kayna?
        </h2>

        <div className="w-full max-w-3xl rounded-2xl bg-white/10 backdrop-blur-lg p-8 shadow-xl border border-white/20 transition hover:shadow-2xl">
          <div className="space-y-4">
            <div className="border-b border-white/20 pb-4">
              <p className="text-white text-lg leading-relaxed tracking-wide">
                "เค" (Kay) เป็นชื่อเล่นในชีวิตจริงของเคนะ
                <br /> "นะ" (na) เป็นคำที่มีความหมายว่า "น่ารัก"
                <br />
                เมื่อนำมารวมกันจะได้ชื่อว่า "Kayna" ซึ่งมีความหมายว่า
                "คนหล่อเท่"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default KeywordVtuber;
