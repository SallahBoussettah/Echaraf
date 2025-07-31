import {
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@relume_io/relume-ui";
import React from "react";
import { BiCheck } from "react-icons/bi";

export function CoursePricing() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-8 max-w-lg text-center md:mb-10 lg:mb-12">
          <p className="mb-3 font-semibold text-brand-success md:mb-4">Affordable</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold font-heading md:mb-6 md:text-7xl lg:text-8xl">
            Course Pricing
          </h2>
          <p className="md:text-md">
            Explore our competitive pricing and financial aid options designed to make quality education accessible.
          </p>
        </div>
        <Tabs defaultValue="monthly">
          <TabsList className="mx-auto mb-12 w-fit">
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="yearly">Yearly</TabsTrigger>
          </TabsList>
          <TabsContent
            value="monthly"
            className="grid grid-cols-1 gap-8 data-[state=active]:animate-tabs md:grid-cols-2"
          >
            <div className="flex h-full flex-col justify-between px-6 py-8 md:p-8 bg-white rounded-lg border border-gray-200 shadow-sm">
              <div>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="rb-4 mb-4 flex flex-col items-start justify-end">
                      <div className="flex size-12 items-center justify-center rounded-lg" style={{backgroundColor: '#4285F4' + '1A'}}>
                        <span className="text-2xl" style={{color: '#4285F4'}}>📚</span>
                      </div>
                    </div>
                    <h5 className="mb-2 text-xl font-bold font-heading md:text-2xl">
                      Basic Plan
                    </h5>
                    <p>Ideal for individual learners</p>
                  </div>
                  <div className="text-right">
                    <h1 className="text-6xl font-bold font-heading md:text-9xl lg:text-10xl text-brand-primary">
                      $19<span className="text-2xl">/mo</span>
                    </h1>
                  </div>
                </div>
                <div className="my-8 h-px w-full shrink-0 bg-gray-200" />
                <p className="font-semibold mb-4">Includes:</p>
                <div className="mt-4 mb-8 grid grid-cols-1 gap-x-6 gap-y-4 py-2 lg:grid-cols-2">
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6 text-brand-success" />
                    </div>
                    <p>Access to all courses</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6 text-brand-success" />
                    </div>
                    <p>Personalized learning plans</p>
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
                    <p>Dedicated support team</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6 text-brand-success" />
                    </div>
                    <p>Flexible scheduling options</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6 text-brand-success" />
                    </div>
                    <p>Interactive learning resources</p>
                  </div>
                </div>
              </div>
              <div>
                <Button title="Get started" className="w-full bg-brand-primary hover:bg-brand-primary/90">
                  Get started
                </Button>
              </div>
            </div>
            <div className="flex h-full flex-col justify-between px-6 py-8 md:p-8 bg-white rounded-lg border-2 shadow-lg" style={{borderColor: '#FBBC05'}}>
              <div>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="rb-4 mb-4 flex flex-col items-start justify-end">
                      <div className="flex size-12 items-center justify-center rounded-lg" style={{backgroundColor: '#FBBC05' + '1A'}}>
                        <span className="text-2xl" style={{color: '#FBBC05'}}>⭐</span>
                      </div>
                    </div>
                    <h5 className="mb-2 text-xl font-bold font-heading md:text-2xl">
                      Premium Plan
                    </h5>
                    <p>Perfect for serious learners</p>
                    <div className="mt-2 px-3 py-1 bg-brand-highlight text-white text-sm rounded-full inline-block">
                      Most Popular
                    </div>
                  </div>
                  <div className="text-right">
                    <h1 className="text-6xl font-bold font-heading md:text-9xl lg:text-10xl text-brand-highlight">
                      $39<span className="text-2xl">/mo</span>
                    </h1>
                  </div>
                </div>
                <div className="my-8 h-px w-full shrink-0 bg-gray-200" />
                <p className="font-semibold mb-4">Everything in Basic, plus:</p>
                <div className="mt-4 mb-8 grid grid-cols-1 gap-x-6 gap-y-4 py-2 lg:grid-cols-2">
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6 text-brand-success" />
                    </div>
                    <p>Priority support</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6 text-brand-success" />
                    </div>
                    <p>1-on-1 tutoring sessions</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6 text-brand-success" />
                    </div>
                    <p>Advanced analytics</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6 text-brand-success" />
                    </div>
                    <p>Custom learning paths</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6 text-brand-success" />
                    </div>
                    <p>Exam preparation tools</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6 text-brand-success" />
                    </div>
                    <p>Certificate programs</p>
                  </div>
                </div>
              </div>
              <div>
                <Button title="Get started" className="w-full bg-brand-highlight hover:bg-brand-highlight/90">
                  Get started
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="yearly"
            className="grid grid-cols-1 gap-8 data-[state=active]:animate-tabs md:grid-cols-2"
          >
            <div className="flex h-full flex-col justify-between px-6 py-8 md:p-8 bg-white rounded-lg border border-gray-200 shadow-sm">
              <div>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="rb-4 mb-4 flex flex-col items-start justify-end">
                      <div className="flex size-12 items-center justify-center rounded-lg" style={{backgroundColor: '#4285F4' + '1A'}}>
                        <span className="text-2xl" style={{color: '#4285F4'}}>📚</span>
                      </div>
                    </div>
                    <h5 className="mb-2 text-xl font-bold font-heading md:text-2xl">
                      Basic Plan
                    </h5>
                    <p>Best value for individuals</p>
                  </div>
                  <div className="text-right">
                    <h1 className="text-6xl font-bold font-heading md:text-9xl lg:text-10xl text-brand-primary">
                      $180<span className="text-2xl">/yr</span>
                    </h1>
                    <p className="mt-2 font-medium text-brand-success">Save 20%</p>
                  </div>
                </div>
                <div className="my-8 h-px w-full shrink-0 bg-gray-200" />
                <p className="font-semibold mb-4">Annual benefits include:</p>
                <div className="mt-4 mb-8 grid grid-cols-1 gap-x-6 gap-y-4 py-2 lg:grid-cols-2">
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6 text-brand-success" />
                    </div>
                    <p>All basic plan features</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6 text-brand-success" />
                    </div>
                    <p>Annual progress reports</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6 text-brand-success" />
                    </div>
                    <p>Exclusive webinars</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6 text-brand-success" />
                    </div>
                    <p>Premium content access</p>
                  </div>
                </div>
              </div>
              <div>
                <Button title="Get started" className="w-full bg-brand-primary hover:bg-brand-primary/90">
                  Get started
                </Button>
              </div>
            </div>
            <div className="flex h-full flex-col justify-between px-6 py-8 md:p-8 bg-white rounded-lg border-2 shadow-lg" style={{borderColor: '#FBBC05'}}>
              <div>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="rb-4 mb-4 flex flex-col items-start justify-end">
                      <div className="flex size-12 items-center justify-center rounded-lg" style={{backgroundColor: '#FBBC05' + '1A'}}>
                        <span className="text-2xl" style={{color: '#FBBC05'}}>⭐</span>
                      </div>
                    </div>
                    <h5 className="mb-2 text-xl font-bold font-heading md:text-2xl">
                      Premium Plan
                    </h5>
                    <p>Best for dedicated students</p>
                    <div className="mt-2 px-3 py-1 bg-brand-highlight text-white text-sm rounded-full inline-block">
                      Best Value
                    </div>
                  </div>
                  <div className="text-right">
                    <h1 className="text-6xl font-bold font-heading md:text-9xl lg:text-10xl text-brand-highlight">
                      $380<span className="text-2xl">/yr</span>
                    </h1>
                    <p className="mt-2 font-medium text-brand-success">Save 25%</p>
                  </div>
                </div>
                <div className="my-8 h-px w-full shrink-0 bg-gray-200" />
                <p className="font-semibold mb-4">Everything in Premium, plus:</p>
                <div className="mt-4 mb-8 grid grid-cols-1 gap-x-6 gap-y-4 py-2 lg:grid-cols-2">
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6 text-brand-success" />
                    </div>
                    <p>Unlimited tutoring</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6 text-brand-success" />
                    </div>
                    <p>College prep courses</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6 text-brand-success" />
                    </div>
                    <p>Career counseling</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6 text-brand-success" />
                    </div>
                    <p>Priority enrollment</p>
                  </div>
                </div>
              </div>
              <div>
                <Button title="Get started" className="w-full bg-brand-highlight hover:bg-brand-highlight/90">
                  Get started
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}