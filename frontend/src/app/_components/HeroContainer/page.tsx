import React from "react";
import NavBar from "./_navBar/page";
import HeroSection from "./_heroSection/page";

function HeroContainer() {
  return (
      <div className="h-container w-full rounded-xl">
        <div className="hero-container rounded-xl bg-primary w-full">
          <NavBar />
          <HeroSection />
        </div>
      </div>
  );
}

export default HeroContainer;
