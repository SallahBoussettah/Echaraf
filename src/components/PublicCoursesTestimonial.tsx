export function PublicCoursesTestimonial() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container w-full max-w-lg">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 md:mb-8">
            <div className="flex items-center justify-center">
              <div className="text-2xl font-bold font-heading text-brand-primary">
                Echaraf
              </div>
            </div>
          </div>
          <blockquote className="text-xl font-bold md:text-2xl">
            "Echaraf's public courses transformed my understanding of math and
            science. The personalized attention I received made all the
            difference in my academic journey."
          </blockquote>
          <div className="mt-6 flex flex-col items-center justify-center md:mt-8">
            <div className="mb-3 md:mb-4">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt="Alex Johnson - Student testimonial"
                className="size-16 min-h-16 min-w-16 rounded-full object-cover"
              />
            </div>
            <p className="font-semibold">Alex Johnson</p>
            <p className="text-gray-600">Student, Echaraf</p>
          </div>
        </div>
      </div>
    </section>
  );
}