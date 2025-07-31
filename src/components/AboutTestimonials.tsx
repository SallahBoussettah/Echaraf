import React from "react";
import { BiSolidStar } from "react-icons/bi";

export function AboutTestimonials() {
  const testimonials = [
    {
      quote: "Echaraf has transformed my child's approach to learning. The personalized attention is remarkable.",
      name: "Maria Rodriguez",
      role: "Parent",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      quote: "The teachers here really care about each student's success. I've grown so much academically and personally.",
      name: "Ahmed Hassan",
      role: "Grade 11 Student",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      quote: "The innovative teaching methods at Echaraf have made learning enjoyable and effective for my daughter.",
      name: "Jennifer Chen",
      role: "Parent",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    }
  ];

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Success Stories</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            What Our Community Says
          </h2>
          <p className="md:text-md">
            Hear from students and parents about their Echaraf experience.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12 lg:gap-y-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex h-full max-w-lg flex-col items-start justify-start text-left">
              <div className="mb-6 flex md:mb-8">
                {[...Array(5)].map((_, i) => (
                  <BiSolidStar key={i} className="size-6 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-md leading-[1.4] font-bold md:text-xl mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="mt-auto flex w-full items-center gap-4">
                <div className="flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name} avatar`}
                    className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-text-secondary">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}