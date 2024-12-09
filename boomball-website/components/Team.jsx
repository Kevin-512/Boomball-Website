"use client";
import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const teamData = [
  {
    icon: "/BoomballChar1.png",
    name: "James",
    title: "Attracted to Beer",
    description: "Really Really likes beer",
  },
  {
    icon: "/BoomballChar1.png",
    name: "James",
    title: "Attracted to Beer",
    description: "Really Really likes beer",
  },
  {
    icon: "/BoomballChar1.png",
    name: "James",
    title: "Attracted to Beer",
    description: "Really Really likes beer",
  },
  {
    icon: "/BoomballChar1.png",
    name: "James",
    title: "Attracted to Beer",
    description: "Really Really likes beer",
  },
  {
    icon: "/BoomballChar1.png",
    name: "James",
    title: "Attracted to Beer",
    description: "Really Really likes beer",
  },
];

const Team = () => {
  return (
    <section className="mb-12 xl:mb-32" id="our team">
      <div className="container mx-auto">
        <h2 className="h2 text-primary justify-center text-center lg:text-start my-4">
          Our Team
        </h2>
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="h-[320px]"
        >
          {teamData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-accent p-8 min-h-300px">
                  <CardHeader className="p-0 mb-10">
                    <div className="flex items-center gap-x-4">
                      <Image
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
                  <CardDescription className="text-primary">{person.description}</CardDescription>
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
