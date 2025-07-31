import React from "react";

export function AboutMission() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h2 className="rb-5 mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl">
              Echaraf: Where Academic Excellence Meets Personalized Learning for
              Every Student
            </h2>
            <p className="mb-6 md:mb-8 md:text-md">
              At Echaraf, we believe that every student deserves a tailored
              educational experience that fosters both academic success and
              personal growth. Our commitment to excellence ensures that
              students are equipped with the skills they need to thrive in their
              future endeavors.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                  Commitment
                </h3>
                <p>Personalized learning for every student's unique needs.</p>
              </div>
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                  Excellence
                </h3>
                <p>Empowering students to achieve their highest potential.</p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80"
              className="w-full rounded-image object-cover"
              alt="Students working together in modern learning environment"
            />
          </div>
        </div>
      </div>
    </section>
  );
}