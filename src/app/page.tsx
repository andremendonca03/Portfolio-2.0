"use client";

import About from "@/components/about/About";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import IntroSection from "@/components/introSection/IntroSection";
import ProjectsShowcase from "@/components/projectsShowcase/ProjectsShowcase";
import Sidebar from "@/components/sidebar/Sidebar";
import SkillAreas from "@/components/skillAreas/SkillAreas";
import Strip from "@/components/strip/Strip";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { GlobalContext } from "@/contexts/GlobalContext";
import React from "react";

const Homepage = () => {
  const global = React.useContext(GlobalContext);

  return (
    <div className="bg-r-bg relative td-150">
      {global.themeMode === "devMode" ? (
        <BackgroundGradientAnimation
          size="38%"
          interactive={false}
          gradientBackgroundStart="rgb(17, 17, 17)"
          gradientBackgroundEnd="rgb(17,17,17)"
          firstColor={"73, 59, 227"}
          secondColor={"83, 69, 245"}
          thirdColor={"73, 59, 227"}
          fourthColor={"83, 69, 245"}
          fifthColor={"73, 59, 227"}
        />
      ) : (
        <BackgroundGradientAnimation
          size="38%"
          interactive={false}
          gradientBackgroundStart="rgb(256, 256, 256)"
          gradientBackgroundEnd="rgb(256,256,256)"
          firstColor={"227, 68, 47"}
          secondColor={"245, 69, 69"}
          thirdColor={"227, 68, 47"}
          fourthColor={"245, 69, 69"}
          fifthColor={"227, 68, 47"}          
        />
      )}

      <div className="relative z-1 inset-0 w-full h-full">
        <Header />

        <main className="main overflow-hidden">
          <IntroSection />
          <About />
          <Strip />
          <SkillAreas />
          <ProjectsShowcase />
        </main>

        <Footer />
        <Sidebar />
      </div>
    </div>
  );
};

export default Homepage;
