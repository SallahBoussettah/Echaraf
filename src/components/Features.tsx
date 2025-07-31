import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Features() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Empower</p>
            <h1 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Personalized Learning for Every Student
            </h1>
            <p className="mb-6 md:mb-8 md:text-md">
              At Echaraf, we tailor education to meet individual needs,
              fostering both academic excellence and personal growth. Our
              dedicated approach ensures that every student thrives in a
              supportive environment.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Student-Centered
                </h6>
                <p>
                  We prioritize each student's unique learning journey and
                  personal development.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Growth Focus
                </h6>
                <p>
                  Our programs encourage curiosity, resilience, and a lifelong
                  love for learning.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Learn" variant="secondary">
                Learn
              </Button>
              <Button
                title="Join"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Join
              </Button>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80"
              className="w-full rounded-image object-cover"
              alt="Personalized learning environment at Echaraf"
            />
          </div>
        </div>
      </div>
    </section>
  );
}