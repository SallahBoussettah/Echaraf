import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function AboutPrograms() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Empower</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Unlock Your Potential
            </h2>
            <p className="md:text-md">
              Programs designed for academic and personal excellence.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <div className="grid grid-cols-1 sm:col-span-2 sm:row-span-1 sm:grid-cols-2 bg-background-primary rounded-lg border border-border-primary shadow-sm">
              <div className="flex flex-1 flex-col justify-center p-6">
                <div>
                  <p className="mb-2 text-sm font-semibold">Growth</p>
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">
                    Fostering Community and Collaboration
                  </h3>
                  <p>Join us in building a supportive learning environment.</p>
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-4 md:mt-6">
                  <Button
                    title="Learn More"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                  alt="Students collaborating in group study"
                  className="size-full object-cover rounded-r-lg"
                />
              </div>
            </div>
            <div className="flex flex-col bg-background-primary rounded-lg border border-border-primary shadow-sm">
              <div className="flex flex-col justify-center p-6">
                <div>
                  <p className="mb-2 text-sm font-semibold">Success</p>
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">
                    STEM Programs
                  </h3>
                  <p>
                    Advanced science and mathematics programs that prepare students for future careers.
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
                  <Button
                    title="Explore"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Explore
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Students working on STEM projects"
                  className="w-full object-cover rounded-b-lg"
                />
              </div>
            </div>
            <div className="flex flex-col bg-background-primary rounded-lg border border-border-primary shadow-sm">
              <div className="flex flex-col justify-center p-6">
                <div>
                  <p className="mb-2 text-sm font-semibold">Excellence</p>
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">
                    Arts & Humanities
                  </h3>
                  <p>
                    Creative programs that develop critical thinking and cultural awareness.
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
                  <Button
                    title="Discover"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Discover
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Students engaged in arts and creative activities"
                  className="w-full object-cover rounded-b-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}