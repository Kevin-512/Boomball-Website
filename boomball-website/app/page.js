import About from "@/components/About";
import Hero from "@/components/Hero";
import Blog from "@/components/Blog";
import Team from "@/components/Team";
import React from "react";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="bg-[#EFF1DB]">
      <Hero />
      <About />
      <Blog />
      <Team />
      <Footer />
    </div>
  );
};

export default Home;
