import About from "@/components/About";
import Hero from "@/components/Hero";
import Blog from "@/components/Blog";
import Team from "@/components/Team";
import React from "react";

const Home = () => {
  return (
    <div className="bg-tertiary">
      <Hero />
      <About/>
      <Team/>
      <Blog/>
      <div className="h-[500px]"></div>
    </div>
  );
};

export default Home;
