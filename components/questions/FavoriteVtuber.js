import React from 'react'

function FavoriteVtuber() {
  return (
    <section
      id="FavoriteVtuber"
      className="flex flex-col lg:flex-row text-white "
    >
      <div className="flex-1 flex flex-col space-y-3 justify-center items-center text-white p-10">
        <h2 className="text-4xl font-extrabold drop-shadow-lg bg-gradient-to-r from-white via-pink-200 to-white bg-clip-text text-transparent animate-gradient">
          Vtuber ที่เคนะชอบ?
        </h2>

        <div className="w-full max-w-3xl rounded-2xl bg-white/10 backdrop-blur-lg p-8 shadow-xl border border-white/20 transition hover:shadow-2xl">
          <div className="space-y-3">
            {/* Main Definition */}
            <div className="border-b border-white-600 pb-6">
              <p className="text-white leading-relaxed">
                1. Urana Ch (ยูรานะ) เป็น Vtuber ที่เคนะชอบมากที่สุด เป็นเเรงบันดาลใจให้เคมาเป็น Vtuber
                <br />
                2. Sora A.C.G.(โชระ) เคนะเริ่มติดตามผลงานของโชระตั้งแต่ช่วงที่เป็น YouTuber จนกระทั่งปัจจุบันที่กลายมาเป็น Vtuber ซึ่งโชระเป็นแรงบันดาลใจสำคัญที่ทำให้เคนะเริ่มทำคลิปแนวแคสเกม
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FavoriteVtuber