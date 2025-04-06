import React from 'react'

function Vtubers() {
  return (
    <section id="About" className="flex flex-col lg:flex-row text-white ">
      <div className="flex-1 flex flex-col space-y-6 justify-center items-center text-white p-10">
        <h2 className="text-4xl font-extrabold mb-8 drop-shadow-lg bg-gradient-to-r from-white via-pink-200 to-white bg-clip-text text-transparent animate-gradient">
          VTuber คืออะไร?
        </h2>

        <div className="w-full max-w-4xl shadow-2xl rounded-lg p-8 backdrop-blur-md">
          <div className="space-y-6">
            {/* Main Definition */}
            <div className="border-b border-white-600 pb-6">
              <h3 className="text-2xl font-bold mb-4 text-pink-200">Virtual YouTuber (VTuber)</h3>
              <p className="text-white leading-relaxed">
                VTuber (เรียกเต็มๆว่า Virtual YouTuber) คือ ผู้สร้างคอนเทนต์ที่ใช้อวตารดิจิทัลเป็นตัวแทนของตนเองในการถ่ายทอดสดและสร้างวิดีโอ โดยส่วนใหญ่จะเป็นตัวละครที่ได้แรงบันดาลใจมาจากอนิเมะ ซึ่งสามารถจับการเคลื่อนไหวและการแสดงออกทางสีหน้าของผู้ใช้งานได้แบบเรียลไทม์
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Vtubers