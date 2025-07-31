import { Button } from "@relume_io/relume-ui";
import { BiCheck } from "react-icons/bi";
import { HiClock, HiAcademicCap, HiUser } from "react-icons/hi2";

export function PrivateCoursesPricing() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-8 w-full max-w-lg lg:mb-20">
          <p className="mb-3 font-semibold text-brand-success md:mb-4">Affordable</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold font-heading md:mb-6 md:text-7xl lg:text-8xl">
            Course Pricing
          </h2>
          <p className="md:text-md">
            Explore our competitive pricing for personalized private courses
            tailored to student needs.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 items-center gap-y-12 md:gap-x-12 md:gap-y-16 lg:grid-cols-2 lg:gap-x-20">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2">
            <div className="flex self-start">
              <div className="mr-6 flex-none self-start">
                <div className="flex size-8 items-center justify-center rounded-lg" style={{backgroundColor: '#4285F4' + '1A'}}>
                  <HiClock className="size-5" style={{color: '#4285F4'}} />
                </div>
              </div>
              <div>
                <h3 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Flexible Scheduling
                </h3>
                <p>
                  Choose a schedule that fits your lifestyle and academic
                  commitments perfectly.
                </p>
              </div>
            </div>
            <div className="flex self-start">
              <div className="mr-6 flex-none self-start">
                <div className="flex size-8 items-center justify-center rounded-lg" style={{backgroundColor: '#34A853' + '1A'}}>
                  <HiAcademicCap className="size-5" style={{color: '#34A853'}} />
                </div>
              </div>
              <div>
                <h3 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Expert Instructors
                </h3>
                <p>
                  Learn from experienced educators dedicated to fostering
                  student success and engagement.
                </p>
              </div>
            </div>
            <div className="flex self-start">
              <div className="mr-6 flex-none self-start">
                <div className="flex size-8 items-center justify-center rounded-lg" style={{backgroundColor: '#EA4335' + '1A'}}>
                  <HiUser className="size-5" style={{color: '#EA4335'}} />
                </div>
              </div>
              <div>
                <h3 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Personalized Learning
                </h3>
                <p>
                  Tailored courses designed to meet individual learning styles
                  and academic goals.
                </p>
              </div>
            </div>
          </div>
          <div className="h-full px-6 py-8 md:p-8 bg-white rounded-lg border-2 shadow-lg" style={{borderColor: '#FBBC05'}}>
            <div className="flex items-start justify-between">
              <div>
                <div className="rb-4 mb-4 flex flex-col items-start justify-end">
                  <div className="flex size-12 items-center justify-center rounded-lg" style={{backgroundColor: '#FBBC05' + '1A'}}>
                    <span className="text-2xl" style={{color: '#FBBC05'}}>⭐</span>
                  </div>
                </div>
                <h4 className="mb-2 text-xl font-bold font-heading md:text-2xl">
                  Premium Plan
                </h4>
                <p>Perfect for serious learners</p>
                <div className="mt-2 px-3 py-1 bg-brand-highlight text-white text-sm rounded-full inline-block">
                  Includes Private Tutoring
                </div>
              </div>
              <div className="text-right">
                <h5 className="justify-self-end text-6xl font-bold font-heading md:text-9xl lg:text-10xl text-brand-highlight">
                  $39<span className="text-2xl">/mo</span>
                </h5>
              </div>
            </div>
            <div className="my-8 h-px w-full shrink-0 bg-gray-200" />
            <p className="font-semibold mb-4">Everything in Basic, plus:</p>
            <div className="mt-4 mb-8 grid grid-cols-1 gap-y-4 py-2 md:grid-cols-2 md:gap-x-6">
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6 text-brand-success" />
                </div>
                <p>One-on-one sessions</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6 text-brand-success" />
                </div>
                <p>Custom learning plans</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6 text-brand-success" />
                </div>
                <p>Progress tracking tools</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6 text-brand-success" />
                </div>
                <p>Access to resources</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6 text-brand-success" />
                </div>
                <p>Regular feedback sessions</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6 text-brand-success" />
                </div>
                <p>Community support access</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6 text-brand-success" />
                </div>
                <p>Flexible payment options</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6 text-brand-success" />
                </div>
                <p>Dedicated support team</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6 text-brand-success" />
                </div>
                <p>Interactive learning tools</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6 text-brand-success" />
                </div>
                <p>Monthly progress reports</p>
              </div>
            </div>
            <div className="my-8 h-px w-full shrink-0 bg-gray-200" />
            <div>
              <Button title="Get started" className="w-full bg-brand-highlight hover:bg-brand-highlight/90">
                Get started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}