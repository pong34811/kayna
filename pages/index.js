import Header from '@/components/Header'
import Hero from '@/components/Hero'
import React from 'react'

function index() {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-[#FF2492] via-[#FF2492] to-[#FBBADA]">
      <div className="absolute inset-0 bg-[url('/bg.webp')] bg-cover bg-center opacity-10"></div>
      <div className="relative z-10">
        <Header />
        <Hero />
      </div>
    </div>
  )
}

export default index