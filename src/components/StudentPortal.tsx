import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { HiUser, HiBookOpen, HiChatBubbleLeftRight } from "react-icons/hi2";

export function StudentPortal() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-start">
          <div className="rb-12 mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
            <h3 className="text-4xl leading-[1.2] font-bold md:text-5xl lg:text-6xl">
              Seamless Sign-Up and Sign-In for Students and Parents
            </h3>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div>
              <div className="rb-5 mb-5 md:mb-6">
                <div className="flex size-12 items-center justify-center bg-blue-100 rounded-lg">
                  <HiUser className="size-6 text-blue-600" />
                </div>
              </div>
              <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl">
                Manage Your Learning Journey with Ease
              </h3>
              <p className="mb-5 md:mb-6">
                Our intuitive system allows students and parents to easily
                create and access profiles.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button
                  iconRight={<RxChevronRight />}
                  variant="link"
                  size="link"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div>
              <div className="rb-5 mb-5 md:mb-6">
                <div className="flex size-12 items-center justify-center bg-green-100 rounded-lg">
                  <HiBookOpen className="size-6 text-green-600" />
                </div>
              </div>
              <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl">
                Stay Updated with Course Materials and Progress Tracking
              </h3>
              <p className="mb-5 md:mb-6">
                Access course materials and track academic progress all in one
                place.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button
                  iconRight={<RxChevronRight />}
                  variant="link"
                  size="link"
                >
                  Sign Up
                </Button>
              </div>
            </div>
            <div>
              <div className="rb-5 mb-5 md:mb-6">
                <div className="flex size-12 items-center justify-center bg-purple-100 rounded-lg">
                  <HiChatBubbleLeftRight className="size-6 text-purple-600" />
                </div>
              </div>
              <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl">
                Effortless Communication Between Teachers, Students, and Parents
              </h3>
              <p className="mb-5 md:mb-6">
                Teachers can easily publish schedules and communicate directly
                with students.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button
                  iconRight={<RxChevronRight />}
                  variant="link"
                  size="link"
                >
                  Join Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}