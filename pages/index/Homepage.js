"use client";

import React from "react";
import HeroSection from "../components/HeroSection";
import ProfileSection from "../components/ProfileSection";
import FooterSection from "../components/FooterSection";

export default function Homepage() {
  return (
    <div className="container-fluid" style={{ overflowX: "hidden" }}>
        <HeroSection />
        <ProfileSection />
        <FooterSection />
    </div>
  );
}