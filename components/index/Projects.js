import React from "react";

function Projects() {
  return (
    <section id="projects" className="py-10 text-center bg-gradient-to-r from-[#FF2492] via-[#FF5FA8] to-[#FF8FC4] text-white p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-8 text-center">Projects</h2>
        <div className="text-center mb-12">
          <p className="text-xl mb-4">เราให้บริการโปรโมทในสองแพลตฟอร์มหลัก:</p>
          <div className="flex justify-center space-x-8">
            <div className="mb-16">
              <p className="text-xl md:text-2xl mb-8 font-medium max-w-2xl mx-auto leading-relaxed">
                เรามอบบริการโปรโมทคุณภาพสูงบนสองแพลตฟอร์มยอดนิยม
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl max-w-md w-full">
                  <div className="flex flex-col items-center">
                    <div className="text-5xl mb-4 animate-bounce">🚀</div>
                    <h3 className="text-2xl font-bold mb-3">
                      รับโปรโมท Discord
                    </h3>
                    <p className="text-white/90 mb-4">
                      เพิ่มสมาชิกและกิจกรรมในเซิร์ฟเวอร์ Discord
                      ของคุณด้วยบริการโปรโมทคุณภาพ
                    </p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl max-w-md w-full">
                  <div className="flex flex-col items-center">
                    <div
                      className="text-5xl mb-4 animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    >
                      🎮
                    </div>
                    <h3 className="text-2xl font-bold mb-3">
                      รับโปรโมท Minecraft Server
                    </h3>
                    <p className="text-white/90 mb-4">
                      ดึงดูดผู้เล่นใหม่และเพิ่มกิจกรรมในเซิร์ฟเวอร์ Minecraft
                      ของคุณ
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
