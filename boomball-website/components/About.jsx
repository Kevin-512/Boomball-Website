"use client";

import Image from "next/image";
import YouTube from "react-youtube";

const characters = [
  {
    link: "/characters/popper.jpg",
    name: "The Popper",
    description: "Explodes to hurl anything nearby away",
  },
  {
    link: "/characters/stopper.jpg",
    name: "The Stopper",
    description: "Expands to create an immovable wall to block attacks",
  },
  {
    link: "/characters/hopper.jpg",
    name: "The Hopper",
    description: "Launches like a missile at the ball",
  },
];

const About = () => {
  return (
    <section className="" id="about">
      <div className="container mx-auto py-8">
        <h2 className="h2 text-primary justify-center text-center lg:text-start my-4">
          About
        </h2>
        <div className="flex lg:flex-row flex-col gap-4 items-center pb-4">
          <p className="max-w-[800px] lg:text-start text-center pb-8 text-xl justify-center">
            BoomBall Extreme is a chaotically exciting, fun football game
            created for PC and Console gamers everywhere! This fast paced
            experience pits players against their friends or an AI in the
            ultimate 1 VS 1 game of BoomBall EXTREME! Each player controls a
            team of 6 unique and wacky characters each with their own abilities
            and play-styles to obtain the ultimate win.
          </p>
          <div className="hidden lg:flex">
            <YouTube videoId="PGwnZwb3AuM" id="video" />
          </div>
        </div>

        <h4 className="text-3xl text-primary justify-center text-center lg:text-start my-4">
          The Lineup
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-16">
          {characters.map((character, index) => {
            return (
              <div
                className="flex flex-col justify-center items-center gap-4 border-8 border-[#000C66] rounded-md p-10 bg-accent"
                key={index}
              >
                <div className="flex h-[200px] w-[200px] border-4 border-black rounded-md">
                  <Image
                    className=""
                    src={character.link}
                    width={200}
                    height={200}
                    alt=""
                  />
                </div>

                <div>
                  <h4 className="text-4xl text-primary">{character.name}</h4>
                  <p>{character.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
