import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Hero() {
  return (
    <section
      id="relume"
      className="grid grid-cols-1 items-center gap-y-16 pt-16 md:pt-24 lg:grid-cols-2 lg:pt-0"
    >
      <div className="mx-[5%] sm:max-w-md md:justify-self-start lg:mr-20 lg:ml-[5vw] lg:justify-self-end">
        <h1 className="mb-5 text-6xl font-bold font-heading md:mb-6 md:text-9xl lg:text-10xl">
          Empower Your Future with Echaraf Education
        </h1>
        <p className="md:text-md">
          At Echaraf, we nurture academic excellence and personal growth for
          middle and high school students. Discover our personalized learning
          approach and join a community dedicated to your success.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
          <Button title="Learn More">Learn More</Button>
          <Button title="Enroll" variant="secondary">
            Enroll
          </Button>
        </div>
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Students learning together at Echaraf"
          className="w-full object-cover lg:h-screen lg:max-h-[60rem]"
        />
      </div>
    </section>
  );
}