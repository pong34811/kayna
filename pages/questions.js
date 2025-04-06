import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Vtubers from "@/components/questions/Vtubers";

function questions() {
  return (
    <>
      <Header />
      <div className="relative min-h-screen bg-gradient-to-r from-[#FF2492] via-[#FF2492] to-[#FBBADA]">
        <div className="absolute inset-0 bg-[url('/bg.webp')] bg-cover bg-center opacity-10"></div>
        <Vtubers />
      </div>
      <Footer />
    </>
  );
}

export default questions;
