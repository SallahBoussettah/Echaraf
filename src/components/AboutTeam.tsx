import { Button } from "@relume_io/relume-ui";
import React from "react";
import { BiLogoDribbble, BiLogoLinkedinSquare } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

export function AboutTeam() {
  const teamMembers = [
    {
      name: "David Kim",
      role: "Language Coach",
      description: "Helping students communicate effectively through language and culture.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      name: "Emily Carter",
      role: "Humanities Teacher",
      description: "Encouraging students to explore history and social issues critically.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80"
    },
    {
      name: "Jessica Brown",
      role: "Art Educator",
      description: "Nurturing creativity and self-expression through various art forms.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
    }
  ];

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Empower</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Our Team
          </h2>
          <p className="md:text-md">
            Meet the dedicated educators shaping our students' futures.
          </p>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-x-8 gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col text-center">
              <div className="rb-5 mb-5 flex w-full items-center justify-center md:mb-6">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  className="aspect-square size-full object-cover rounded-lg"
                />
              </div>
              <div className="mb-3 md:mb-4">
                <h5 className="text-md font-semibold md:text-lg">
                  {member.name}
                </h5>
                <h6 className="md:text-md text-text-secondary">{member.role}</h6>
              </div>
              <p className="text-sm md:text-base">
                {member.description}
              </p>
              <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center">
                <a href="#" className="hover:text-primary transition-colors">
                  <BiLogoLinkedinSquare className="size-6" />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <FaXTwitter className="size-6 p-0.5" />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <BiLogoDribbble className="size-6" />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-14 w-full max-w-md text-center md:mt-20 lg:mt-24">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            We're hiring!
          </h4>
          <p className="md:text-md">
            Join our team of passionate educators and leaders.
          </p>
          <div className="mt-6 flex items-center justify-center gap-x-4 text-center md:mt-8">
            <Button title="Open positions" variant="secondary">
              Open positions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}