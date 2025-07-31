import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import { useState, useEffect, useRef } from "react";

export function PrivateCoursesFeatures() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const increment = 100 / (duration / 16); // 60fps
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= 100) {
          setCount(100);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-brand-success md:mb-4">Tailored</p>
            <h2 className="mb-5 text-5xl font-bold font-heading md:mb-6 md:text-7xl lg:text-8xl">
              Unlock Your Potential with Personalized Learning
            </h2>
            <p className="mb-6 md:mb-8 md:text-md">
              Our private courses are designed to meet each student's unique
              learning style and pace. With personalized learning plans,
              students can focus on their strengths while addressing areas for
              improvement.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div ref={counterRef}>
                <h3 className="mb-2 text-5xl font-bold font-heading md:text-7xl lg:text-8xl text-brand-accent">
                  {count}%
                </h3>
                <p>Achieve your academic goals with customized support.</p>
              </div>
              <div>
                <h3 className="mb-2 text-5xl font-bold font-heading md:text-7xl lg:text-8xl text-brand-success">
                  Flexible
                </h3>
                <p>Adaptable courses that fit your schedule and needs.</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Learn More" variant="secondary">
                Learn More
              </Button>
              <Button
                title="Sign Up"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Sign Up
              </Button>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80"
            className="w-full rounded-lg object-cover"
            alt="Personalized learning environment"
          />
        </div>
      </div>
    </section>
  );
}