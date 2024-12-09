import About from "@/components/About";
import Hero from "@/components/Hero";
import Blog from "@/components/Blog";
import Team from "@/components/Team";
import React from "react";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="bg-tertiary">
      <Hero />
      <About/>
      <Team/>
      <Blog/>
      <Footer/>
    </div>
  );
};

export default Home;
