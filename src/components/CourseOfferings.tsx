import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { HiUsers, HiUser, HiClock } from "react-icons/hi2";

export function CourseOfferings() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
            <p className="mb-3 font-semibold text-brand-primary md:mb-4">Explore</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold font-heading md:mb-6 md:text-7xl lg:text-8xl">
              Discover Our Diverse Course Offerings
            </h2>
            <p className="md:text-md">
              At Echaraf, we provide a wide range of public and private courses
              tailored to meet the unique needs of each student. Our curriculum
              is designed to foster academic excellence and personal growth.
            </p>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-5 mb-5 md:mb-6">
                <div className="flex size-12 items-center justify-center rounded-lg" style={{backgroundColor: '#4285F4' + '1A'}}>
                  <HiUsers className="size-6" style={{color: '#4285F4'}} />
                </div>
              </div>
              <h3 className="mb-5 text-2xl font-bold font-heading md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Public Courses for Every Learner
              </h3>
              <p>Our public courses are accessible to all students seeking quality education in a collaborative environment.</p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-5 mb-5 md:mb-6">
                <div className="flex size-12 items-center justify-center rounded-lg" style={{backgroundColor: '#34A853' + '1A'}}>
                  <HiUser className="size-6" style={{color: '#34A853'}} />
                </div>
              </div>
              <h3 className="mb-5 text-2xl font-bold font-heading md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Private Courses for Personalized Learning
              </h3>
              <p>
                Private courses offer tailored instruction for individual needs with one-on-one attention from expert teachers.
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-5 mb-5 md:mb-6">
                <div className="flex size-12 items-center justify-center rounded-lg" style={{backgroundColor: '#EA4335' + '1A'}}>
                  <HiClock className="size-6" style={{color: '#EA4335'}} />
                </div>
              </div>
              <h3 className="mb-5 text-2xl font-bold font-heading md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Flexible Learning Options Available
              </h3>
              <p>Choose from various formats and schedules to fit your lifestyle and learning preferences.</p>
            </div>
          </div>
          <div className="mt-10 flex items-center gap-4 md:mt-14 lg:mt-16">
            <Button variant="secondary">Learn More</Button>
            <Button iconRight={<RxChevronRight />} variant="link" size="link">
              Sign Up Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}