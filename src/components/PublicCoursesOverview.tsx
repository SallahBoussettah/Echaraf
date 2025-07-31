import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import { HiCalculator, HiBeaker, HiGlobeAlt } from "react-icons/hi2";

export function PublicCoursesOverview() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
            <p className="mb-3 font-semibold text-brand-success md:mb-4">Explore</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold font-heading md:mb-6 md:text-7xl lg:text-8xl">
              Discover Our Engaging Public Courses
            </h2>
            <p className="md:text-md">
              At Echaraf, we offer a diverse range of public courses designed to
              foster academic excellence. Our curriculum spans core subjects,
              ensuring students receive a well-rounded education.
            </p>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-5 mb-5 md:mb-6">
                <div className="flex size-12 items-center justify-center rounded-lg" style={{backgroundColor: '#4285F4' + '1A'}}>
                  <HiCalculator className="size-6" style={{color: '#4285F4'}} />
                </div>
              </div>
              <h3 className="mb-5 text-2xl font-bold font-heading md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Mathematics: Building Problem-Solving Skills
              </h3>
              <p>
                Our mathematics courses focus on critical thinking and
                analytical skills essential for academic success.
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-5 mb-5 md:mb-6">
                <div className="flex size-12 items-center justify-center rounded-lg" style={{backgroundColor: '#34A853' + '1A'}}>
                  <HiBeaker className="size-6" style={{color: '#34A853'}} />
                </div>
              </div>
              <h3 className="mb-5 text-2xl font-bold font-heading md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Sciences: Exploring the Wonders of Nature
              </h3>
              <p>
                Students delve into biology, chemistry, and physics, sparking
                curiosity and understanding of the natural world.
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-5 mb-5 md:mb-6">
                <div className="flex size-12 items-center justify-center rounded-lg" style={{backgroundColor: '#EA4335' + '1A'}}>
                  <HiGlobeAlt className="size-6" style={{color: '#EA4335'}} />
                </div>
              </div>
              <h3 className="mb-5 text-2xl font-bold font-heading md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Languages: Cultivating Communication and Culture
              </h3>
              <p>
                Our language courses enhance communication skills and cultural
                understanding for global citizenship.
              </p>
            </div>
          </div>
          <div className="mt-10 flex items-center gap-4 md:mt-14 lg:mt-16">
            <Button variant="secondary">Learn More</Button>
            <Button iconRight={<RxChevronRight />} variant="link" size="link">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}