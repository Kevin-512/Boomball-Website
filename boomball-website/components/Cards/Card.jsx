import Image from "next/image";
import React from "react";
import { FaBomb } from "react-icons/fa";

const Card = ({ logoURL, event, duration, description, company }) => {
  return (
    <div className="w-full h-[350px] overflow-hidden flex items-center sticky top-12">
      <div className="w-full h-[330px] border border-accent/80 bg-accent/90 rounded-[8px]">
        <div className="flex flex-col h-full">
          <div className="h-[80px] xl:h-[68px] bg-accent flex flex-col xl:flex-row justify-center xl:justify-between items-center px-6 md:px-[84px] rounded-tl-[8px] rounded-tr-[8px]">
            <div className="flex gap-2">
              {/* Accompanying icon alongside titles */}
              <FaBomb className="text-white mt-1.5 items-center" />
              <h3 className="text-lg font-semibold text-primary">
                {/* Display in correct section depending on category */}
                {event}
              </h3>
            </div>
            <p className="text-base">
              {duration}
            </p>
          </div>
          <div className="flex-1 flex items-center justify-center xl:justify-start md:py-8 md:px-16">
            <div className="flex flex-col xl:flex-row items-center gap-4 text-center xl:text-left xl:gap-10 px-4 xl:px-0">
              <div className="relative w-[300px] h-[100px] xl:h-[150px]">
                <Image src={logoURL} fill alt="" className="object-contain" />
              </div>
              {/* Display the location of the skill */}
              <div className="xl:border-l xl:border-secondary/10 xl:pl-12 w-full">
                <h3 className="hidden xl:flex h3 mb-2 xl:mb-4">{company}</h3>
                <p className="text-base max-w-[660px]">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
