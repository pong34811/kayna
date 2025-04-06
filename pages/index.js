import Header from '@/components/Header'
import Hero from '@/components/index/Hero'
import Aboutme from '@/components/index/Aboutme'
import Schedule from '@/components/index/Schedule'
import Footer from '@/components/Footer'
import Projects from '@/components/index/Projects'
import Gallery from '@/components/index/Gallery'
import React from 'react'

function index() {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-[#FF2492] via-[#FF2492] to-[#FBBADA]">
      <div className="absolute inset-0 bg-[url('/bg.webp')] bg-cover bg-center opacity-10"></div>
      <div className="relative z-10">
        <Header />
        <Hero />
        <Aboutme />
        <Schedule />
        <Projects />
        <Gallery />
        {/* Add more components as needed */}
        <Footer />
      </div>
    </div>
  )
}

export default index