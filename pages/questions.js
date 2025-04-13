import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Vtubers from "@/components/questions/Vtubers";
import BecomeVtuber from "@/components/questions/BecomeVtuber";
import KeywordVtuber from "@/components/questions/KeywordVtuber";
import FavoriteVtuber from "@/components/questions/FavoriteVtuber";

function questions() {
  return (
    <>
      <Header />
      <div className="relative min-h-screen bg-gradient-to-r from-[#FF2492] via-[#FF2492] to-[#FBBADA] p-10">
        <div className=" absolute inset-0 bg-[url('/bg.webp')] bg-cover bg-center opacity-10 "></div>
        <Vtubers />
        <BecomeVtuber />
        <KeywordVtuber />
        <FavoriteVtuber />
        

        {/* Add more components as needed */} 
      </div>
      <Footer />
    </>
  );
}

export default questions;
