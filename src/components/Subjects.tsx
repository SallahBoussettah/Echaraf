import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { HiCalculator, HiBeaker, HiGlobeAlt } from "react-icons/hi2";

export function Subjects() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col">
          <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <p className="mb-3 font-semibold text-brand-success md:mb-4">Learn</p>
              <h2 className="mb-5 text-5xl font-bold font-heading md:mb-6 md:text-7xl lg:text-8xl">
                Explore Our Core Subjects for Success
              </h2>
              <p className="md:text-md">
                At Echaraf, we offer a comprehensive curriculum that includes
                mathematics, sciences, languages, and humanities. Our approach
                ensures that each student receives a well-rounded education
                tailored to their unique needs.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col">
              <div className="mb-5 md:mb-6">
                <div className="flex size-12 items-center justify-center rounded-lg" style={{backgroundColor: '#4285F4' + '1A'}}>
                  <HiCalculator className="size-6" style={{color: '#4285F4'}} />
                </div>
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Mathematics: Building Strong Foundations
              </h3>
              <p>
                Our mathematics program emphasizes critical thinking and
                problem-solving skills.
              </p>
            </div>
            <div className="flex w-full flex-col">
              <div className="mb-5 md:mb-6">
                <div className="flex size-12 items-center justify-center rounded-lg" style={{backgroundColor: '#34A853' + '1A'}}>
                  <HiBeaker className="size-6" style={{color: '#34A853'}} />
                </div>
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Sciences: Discovering the World Around Us
              </h3>
              <p>
                Students engage in hands-on experiments to foster curiosity and
                understanding.
              </p>
            </div>
            <div className="flex w-full flex-col">
              <div className="mb-5 md:mb-6">
                <div className="flex size-12 items-center justify-center rounded-lg" style={{backgroundColor: '#EA4335' + '1A'}}>
                  <HiGlobeAlt className="size-6" style={{color: '#EA4335'}} />
                </div>
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Languages: Communicating Across Cultures
              </h3>
              <p>
                Our language courses enhance communication skills and cultural
                awareness.
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
            <Button variant="secondary">Join</Button>
            <Button iconRight={<RxChevronRight />} variant="link" size="link">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
