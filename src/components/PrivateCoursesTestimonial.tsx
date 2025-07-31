import { BiSolidStar } from "react-icons/bi";

export function PrivateCoursesTestimonial() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto w-full max-w-lg text-center">
          <div className="mb-6 flex items-center justify-center md:mb-8">
            <BiSolidStar className="size-6 text-brand-highlight" />
            <BiSolidStar className="size-6 text-brand-highlight" />
            <BiSolidStar className="size-6 text-brand-highlight" />
            <BiSolidStar className="size-6 text-brand-highlight" />
            <BiSolidStar className="size-6 text-brand-highlight" />
          </div>
          <blockquote className="text-xl font-bold md:text-2xl">
            "Echaraf's private courses transformed my learning experience. The
            personalized attention I received made all the difference in my
            academic journey."
          </blockquote>
          <div className="mt-6 flex w-full flex-col items-center justify-center gap-3 text-center md:mt-8 md:w-auto md:flex-row md:gap-5 md:text-left">
            <div>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt="Emily Johnson - Student testimonial"
                className="size-14 min-h-14 min-w-14 rounded-full object-cover"
              />
            </div>
            <div className="mb-4 md:mb-0">
              <p className="font-semibold">Emily Johnson</p>
              <p className="text-gray-600">Student, Echaraf</p>
            </div>
            <div className="hidden w-px self-stretch bg-gray-300 md:block" />
            <div>
              <div className="flex items-center justify-center">
                <div className="text-lg font-bold font-heading text-brand-primary">
                  Echaraf
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
