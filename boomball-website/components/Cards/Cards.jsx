"use client";
import Card from "./Card";

// Const data for journey
const journey = [
  {
    company: "ExCeL London",
    logoURL: "/events/egx.jpg",
    event: "EGX Showcase",
    duration: "October 2024",
    description:
      "Showcasing the game at one of the biggest events hosted in the UK. Lots of great exposure with some amazing responses from the public.",
  },
  {
    company: "Michelin Scotland Innovation Parc (MSIP) Dundee",
    logoURL: "/events/protoplay.jpg",
    event: "Protoplay",
    duration: "September 2024",
    description:
      "After three months of working with Transfuzer, all our hard work manifested into 3 days of presenting the game to the public, industry leaders and potential investors.",
  },
  {
    company: "Staffordshire University",
    logoURL: "/events/gamesrepublic.jpg",
    event: "Games Republic",
    duration: "June 2024",
    description:
      "A competition where universities and colleges across the north of England came together to showcase a variety of games.",
  },
];

const Cards = () => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Display content */}
      <div>
        {journey.map((card, index) => {
          return <Card key={index} {...card} />;
        })}
      </div>
    </div>
  );
};

export default Cards;
