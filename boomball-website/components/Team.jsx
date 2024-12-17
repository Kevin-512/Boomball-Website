"use client";
import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const teamData = [
  {
    icon: "/profiles/jamesD.jpg",
    name: "James",
    title: "Team Leader",
    description: "",
  },
  {
    icon: "/profiles/maxC.jpg",
    name: "Max",
    title: "Audio Engineer",
    description: "",
  },
  {
    icon: "/profiles/hualiangZ.jpg",
    name: "Hualiang",
    title: "Programmer",
    description: "",
  },
  {
    icon: "/profiles/kennethC.jpg",
    name: "Kenneth",
    title: "Programmer",
    description: "",
  },

  {
    icon: "/profiles/oliverF.jpg",
    name: "Oliver",
    title: "Artist/Animator",
    description: "",
  },
];

const Team = () => {
  return (
    <section className="m-12 xl:mb-24" id="our team">
      <div className="container mx-auto">
        <h2 className="h2 text-primary justify-center text-center lg:text-start my-4">
          Our Team
        </h2>
        {/* Creates a slideshow that displays 2 slides if the screen size is small and 3 if the screen is big */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="h-[300px]"
        >
          {teamData.map((person, index) => {
            // Creates each individual slide using information from constant json
            return (
              <SwiperSlide key={index}>
                <Card className="bg-[#FF5D00] p-8 min-h-300px border-8 border-[#000C66] rounded-3xl">
                  <CardHeader className="p-0 mb-10">
                    <div className="flex items-center gap-x-4">
                      <Image
                        className="border-black border-4 rounded-xl"
                        src={person.icon}
                        width={100}
                        height={100}
                        alt=""
                        priority
                      />
                      <div className="flex flex-col">
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.title}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-primary font-secondary">
                    {person.description}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Team;
