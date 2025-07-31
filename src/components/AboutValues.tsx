import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { HiTrophy, HiUsers, HiLightBulb, HiArrowTrendingUp } from "react-icons/hi2";

export function AboutValues() {
  const values = [
    {
      icon: HiTrophy,
      title: "Excellence",
      description: "We strive for the highest standards in education and personal development.",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100"
    },
    {
      icon: HiUsers,
      title: "Collaboration",
      description: "We believe in the power of working together to achieve common goals.",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: HiLightBulb,
      title: "Innovation",
      description: "We embrace new ideas and technologies to enhance the learning experience.",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: HiArrowTrendingUp,
      title: "Growth",
      description: "We foster continuous learning and development for students and staff.",
      color: "text-green-600",
      bgColor: "bg-green-100"
    }
  ];

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-background-secondary">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Foundation</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Our Core Values
          </h2>
          <p className="md:text-md">
            The principles that guide everything we do at Echaraf.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-background-primary rounded-lg">
                <div className={`mb-4 flex size-16 items-center justify-center ${value.bgColor} rounded-full`}>
                  <IconComponent className={`size-8 ${value.color}`} />
                </div>
                <h3 className="mb-3 text-xl font-bold md:text-2xl">
                  {value.title}
                </h3>
                <p className="text-sm md:text-base text-text-secondary">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
        <div className="mt-12 text-center md:mt-16">
          <Button
            title="Learn More About Our Mission"
            variant="secondary"
            iconRight={<RxChevronRight />}
          >
            Learn More About Our Mission
          </Button>
        </div>
      </div>
    </section>
  );
}