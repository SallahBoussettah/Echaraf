import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

export function PublicCoursesFeatures() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <h2 className="text-4xl leading-[1.2] font-bold font-heading md:text-5xl lg:text-6xl">
              Enroll in Echaraf's Public Courses for a Bright Academic Future
            </h2>
          </div>
          <div>
            <p className="md:text-md">
              At Echaraf, enrolling in public courses is a straightforward
              process. Students can easily navigate our platform to select
              courses that align with their interests and academic goals. With
              personalized support and resources, we ensure a smooth transition
              into your chosen subjects.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12">
          <div className="w-full">
            <div className="mb-6 md:mb-8">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                alt="Students collaborating in public course"
                className="w-full rounded-lg object-cover"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold font-heading md:mb-4 md:text-2xl">
              Discover the Benefits of Our Public Course Offerings
            </h3>
            <p>
              Experience tailored learning that fosters both academic success
              and personal growth in a collaborative environment.
            </p>
            <div className="mt-6 flex items-center gap-4 md:mt-8">
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Enroll
              </Button>
            </div>
          </div>
          <div className="w-full">
            <div className="mb-6 md:mb-8">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Interactive learning in classroom"
                className="w-full rounded-lg object-cover"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold font-heading md:mb-4 md:text-2xl">
              What to Expect from Our Engaging Public Courses
            </h3>
            <p>
              Students will engage in interactive lessons designed to enhance
              understanding and retention through innovative teaching methods.
            </p>
            <div className="mt-6 flex items-center gap-4 md:mt-8">
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Learn
              </Button>
            </div>
          </div>
          <div className="w-full">
            <div className="mb-6 md:mb-8">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80"
                alt="Community of learners studying together"
                className="w-full rounded-lg object-cover"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold font-heading md:mb-4 md:text-2xl">
              Join a Community of Learners Committed to Excellence
            </h3>
            <p>
              Collaborate with peers and educators to achieve your academic
              aspirations in a supportive learning environment.
            </p>
            <div className="mt-6 flex items-center gap-4 md:mt-8">
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}