import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { RxChevronDown, RxChevronRight } from "react-icons/rx";
import {
  HiAcademicCap,
  HiBookOpen,
  HiUserGroup,
  HiPhone,
  HiArrowTrendingUp,
  HiTrophy,
  HiSparkles,
  HiPencilSquare,
} from "react-icons/hi2";

const useRelume = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const openOnMobileDropdownMenu = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const openOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(true);
  };
  const closeOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(false);
  };
  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateMobileMenuButtonSpan = isMobileMenuOpen
    ? ["open", "rotatePhase"]
    : "closed";
  const animateDropdownMenu = isDropdownOpen ? "open" : "close";
  const animateDropdownMenuIcon = isDropdownOpen ? "rotated" : "initial";
  return {
    toggleMobileMenu,
    openOnDesktopDropdownMenu,
    closeOnDesktopDropdownMenu,
    openOnMobileDropdownMenu,
    animateMobileMenu,
    animateMobileMenuButtonSpan,
    animateDropdownMenu,
    animateDropdownMenuIcon,
  };
};

export function Navbar() {
  const useActive = useRelume();
  return (
    <section
      id="relume"
      className="relative z-[999] flex w-full items-center justify-between border-b border-border-primary bg-background-primary lg:min-h-18 lg:px-[5%]"
    >
      <div className="size-full lg:flex lg:items-center lg:justify-between">
        <div className="lg:flex">
          <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
            <a href="/" className="flex items-center">
              <div className="text-2xl font-bold font-heading">
                <span className="text-brand-primary">Echaraf</span>
              </div>
            </a>
            <button
              className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
              onClick={useActive.toggleMobileMenu}
            >
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-black"
                animate={useActive.animateMobileMenuButtonSpan}
                variants={{
                  open: { translateY: 8, transition: { delay: 0.1 } },
                  rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
                  closed: {
                    translateY: 0,
                    rotate: 0,
                    transition: { duration: 0.2 },
                  },
                }}
              />
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-black"
                animate={useActive.animateMobileMenu}
                variants={{
                  open: { width: 0, transition: { duration: 0.1 } },
                  closed: {
                    width: "1.5rem",
                    transition: { delay: 0.3, duration: 0.2 },
                  },
                }}
              />
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-black"
                animate={useActive.animateMobileMenuButtonSpan}
                variants={{
                  open: { translateY: -8, transition: { delay: 0.1 } },
                  rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
                  closed: {
                    translateY: 0,
                    rotate: 0,
                    transition: { duration: 0.2 },
                  },
                }}
              />
            </button>
          </div>
          <motion.div
            variants={{
              open: { height: "var(--height-open, 100dvh)" },
              close: { height: "var(--height-closed, 0)" },
            }}
            initial="close"
            exit="close"
            animate={useActive.animateMobileMenu}
            transition={{ duration: 0.4 }}
            className="overflow-auto px-[5%] lg:ml-6 lg:flex lg:items-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]"
          >
            <a
              href="/"
              className="block py-3 text-md first:pt-7 lg:px-4 lg:py-6 lg:text-base first:lg:pt-6"
            >
              Home Page
            </a>
            <a
              href="/about-us"
              className="block py-3 text-md first:pt-7 lg:px-4 lg:py-6 lg:text-base first:lg:pt-6"
            >
              About Us
            </a>
            <a
              href="/courses"
              className="block py-3 text-md first:pt-7 lg:px-4 lg:py-6 lg:text-base first:lg:pt-6"
            >
              Courses
            </a>
            <div
              onMouseEnter={useActive.openOnDesktopDropdownMenu}
              onMouseLeave={useActive.closeOnDesktopDropdownMenu}
            >
              <button
                className="flex w-full items-center justify-between gap-x-2 py-3 text-center text-md lg:w-auto lg:flex-none lg:justify-start lg:px-4 lg:py-6 lg:text-base"
                onClick={useActive.openOnMobileDropdownMenu}
              >
                <span>Student Portal</span>
                <motion.span
                  variants={{
                    rotated: { rotate: 180 },
                    initial: { rotate: 0 },
                  }}
                  animate={useActive.animateDropdownMenuIcon}
                  transition={{ duration: 0.3 }}
                >
                  <RxChevronDown />
                </motion.span>
              </button>
              <motion.div
                variants={{
                  open: {
                    visibility: "visible",
                    opacity: 1,
                    height: "var(--height-open, auto)",
                  },
                  close: {
                    visibility: "hidden",
                    opacity: "0",
                    height: "var(--height-close, 0)",
                  },
                }}
                initial="close"
                exit="close"
                animate={useActive.animateDropdownMenu}
                transition={{ duration: 0.3 }}
                className="top-full bottom-auto left-0 w-full max-w-full min-w-full overflow-hidden bg-background-primary lg:absolute lg:w-[100vw] lg:border-b lg:border-border-primary lg:px-[5%] lg:[--height-close:auto]"
              >
                <div className="mx-auto flex size-full max-w-full items-center justify-between">
                  <div className="w-full lg:flex">
                    <div className="grid flex-1 gap-x-8 gap-y-6 py-4 pr-8 md:grid-cols-2 md:px-0 md:py-8 lg:py-8 lg:pr-8">
                      <div className="grid auto-rows-max grid-cols-1 grid-rows-[max-content] gap-y-2 md:gap-y-4">
                        <h4 className="text-sm leading-[1.3] font-semibold">
                          Explore Our Pages
                        </h4>
                        <a
                          href="#"
                          className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                        >
                          <div className="flex size-6 flex-col items-center justify-center">
                            <HiAcademicCap className="size-4" style={{color: '#4285F4'}} />
                          </div>
                          <div className="flex flex-col items-start justify-center">
                            <h5 className="font-semibold">Admissions Info</h5>
                            <p className="hidden text-sm md:block">
                              Learn about our admission process today!
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                        >
                          <div className="flex size-6 flex-col items-center justify-center">
                            <HiBookOpen className="size-4" style={{color: '#34A853'}} />
                          </div>
                          <div className="flex flex-col items-start justify-center">
                            <h5 className="font-semibold">
                              Curriculum Overview
                            </h5>
                            <p className="hidden text-sm md:block">
                              Discover our comprehensive curriculum offerings.
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                        >
                          <div className="flex size-6 flex-col items-center justify-center">
                            <HiUserGroup className="size-4" style={{color: '#EA4335'}} />
                          </div>
                          <div className="flex flex-col items-start justify-center">
                            <h5 className="font-semibold">Faculty Team</h5>
                            <p className="hidden text-sm md:block">
                              Meet our dedicated faculty members.
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                        >
                          <div className="flex size-6 flex-col items-center justify-center">
                            <HiPhone className="size-4" style={{color: '#FBBC05'}} />
                          </div>
                          <div className="flex flex-col items-start justify-center">
                            <h5 className="font-semibold">Contact Us</h5>
                            <p className="hidden text-sm md:block">
                              Get in touch for inquiries or support.
                            </p>
                          </div>
                        </a>
                      </div>
                      <div className="grid auto-rows-max grid-cols-1 grid-rows-[max-content] gap-y-2 md:gap-y-4">
                        <h4 className="text-sm leading-[1.3] font-semibold">
                          Latest Articles
                        </h4>
                        <a
                          href="#"
                          className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                        >
                          <div className="flex size-6 flex-col items-center justify-center">
                            <HiArrowTrendingUp className="size-4" style={{color: '#4285F4'}} />
                          </div>
                          <div className="flex flex-col items-start justify-center">
                            <h5 className="font-semibold">Education Trends</h5>
                            <p className="hidden text-sm md:block">
                              Stay updated on the latest in education.
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                        >
                          <div className="flex size-6 flex-col items-center justify-center">
                            <HiTrophy className="size-4" style={{color: '#FBBC05'}} />
                          </div>
                          <div className="flex flex-col items-start justify-center">
                            <h5 className="font-semibold">Student Success</h5>
                            <p className="hidden text-sm md:block">
                              Read about our students' achievements.
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                        >
                          <div className="flex size-6 flex-col items-center justify-center">
                            <HiSparkles className="size-4" style={{color: '#34A853'}} />
                          </div>
                          <div className="flex flex-col items-start justify-center">
                            <h5 className="font-semibold">Community Events</h5>
                            <p className="hidden text-sm md:block">
                              Join us for upcoming community events.
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                        >
                          <div className="flex size-6 flex-col items-center justify-center">
                            <HiPencilSquare className="size-4" style={{color: '#EA4335'}} />
                          </div>
                          <div className="flex flex-col items-start justify-center">
                            <h5 className="font-semibold">Blog Highlights</h5>
                            <p className="hidden text-sm md:block">
                              Check out our latest blog posts.
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="relative flex max-w-none flex-1 p-6 md:py-8 md:pr-0 md:pl-8 lg:max-w-md">
                      <div className="relative z-10 grid w-full auto-cols-fr auto-rows-max grid-cols-1 grid-rows-[max-content_max-content] gap-4">
                        <h4 className="text-sm leading-[1.3] font-semibold">
                          Featured Articles
                        </h4>
                        <div className="grid auto-cols-fr grid-cols-1 grid-rows-[auto_auto] items-start gap-y-2 lg:grid-rows-[auto]">
                          <a
                            href="#"
                            className="flex auto-cols-fr grid-cols-[0.6fr_1fr] flex-col gap-x-6 py-2 md:grid"
                          >
                            <div className="relative w-full pt-[66.66%]">
                              <img
                                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                alt="Innovative Learning Methods"
                                className="absolute inset-0 size-full object-cover"
                              />
                            </div>
                            <div className="rt-4 mt-4 flex flex-col justify-start md:mt-0">
                              <h5 className="mb-1 font-semibold">
                                Innovative Learning
                              </h5>
                              <p className="text-sm">
                                Explore innovative approaches to education.
                              </p>
                              <div className="mt-1.5">
                                <Button
                                  title="Read more"
                                  variant="link"
                                  size="link"
                                  className="text-sm underline"
                                >
                                  Read more
                                </Button>
                              </div>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="flex auto-cols-fr grid-cols-[0.6fr_1fr] flex-col gap-x-6 py-2 md:grid"
                          >
                            <div className="relative w-full pt-[66.66%]">
                              <img
                                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                alt="Student Life at Echaraf"
                                className="absolute inset-0 size-full object-cover"
                              />
                            </div>
                            <div className="rt-4 mt-4 flex flex-col justify-start md:mt-0">
                              <h5 className="mb-1 font-semibold">
                                Student Life
                              </h5>
                              <p className="text-sm">
                                Discover what life is like at Echaraf.
                              </p>
                              <div className="mt-1.5">
                                <Button
                                  title="Read more"
                                  variant="link"
                                  size="link"
                                  className="text-sm underline"
                                >
                                  Read more
                                </Button>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="flex items-center">
                          <Button
                            title="See all articles"
                            variant="link"
                            size="link"
                            iconRight={<RxChevronRight />}
                          >
                            See all articles
                          </Button>
                        </div>
                      </div>
                      <div className="absolute top-0 right-auto bottom-0 left-0 min-w-full bg-background-secondary lg:min-w-[100vw]" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="mt-6 flex w-full flex-col gap-y-4 pb-24 lg:hidden lg:pb-0">
              <Button
                className="w-full"
                title="Button"
                variant="secondary"
                size="sm"
              >
                Button
              </Button>
              <Button className="w-full" title="Button" size="sm">
                Button
              </Button>
            </div>
          </motion.div>
        </div>
        <div className="hidden lg:flex lg:gap-4">
          <Button title="Join" variant="secondary" size="sm">
            Join
          </Button>
          <Button title="Learn" size="sm">
            Learn
          </Button>
        </div>
      </div>
    </section>
  );
}
