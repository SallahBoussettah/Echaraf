import { Button } from "@relume_io/relume-ui";
import React from "react";

export function AboutHero() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="relative z-10 container">
        <div className="w-full max-w-lg">
          <p className="mb-3 font-semibold text-text-alternative md:mb-4">
            Empower
          </p>
          <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
            Inspire Future Leaders
          </h1>
          <p className="text-text-alternative md:text-md">
            At Echaraf, we cultivate academic excellence and personal growth in
            every student through innovative learning.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Button title="Learn More">Learn More</Button>
            <Button title="Join Us" variant="secondary-alt">
              Join Us
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          className="size-full object-cover"
          alt="Students engaged in collaborative learning at Echaraf"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}