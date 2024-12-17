"use client";
import Header from "./Header";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="h-[800px] relative bg-primary">
      <Header />
      <div className="container mx-auto h-full">
        <div className="relative z-20 h-full w-full md:max-w-[768px] flex flex-col items-center md:items-start justify-center text-center md:text-left pt-10">
          {/* Image for the mobile size image*/}
          <div className="md:hidden relative w-[420px] h-[250px] z-40 mt-20 mb-4">
            <Image
              src="/hero/heroImg5.png"
              alt=""
              fill
              quality="100"
              priority
              className="object-fill rounded-3xl"
            />
          </div>
          {/* Introduction text */}
          <h1 className="h1 font-normal text-accent">
            Dive into
            <br />
            the <br />
            <span className="text-accent-hover">
              Boomball
              <br /> Arena
            </span>
          </h1>
        </div>

        {/* Image for desktop size screen  */}
        <div className="hidden md:flex w-[55vw] h-[800px] absolute top-10 right-0">
          <div className="absolute w-[400px] lg:w-[800px] h-[200px] lg:h-[500px] bottom-80 lg:bottom-32 z-40">
            <Image
              src="/hero/heroImg5.png"
              alt=""
              fill
              quality="100"
              priority
              className="object-fill rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
