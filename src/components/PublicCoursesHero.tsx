import { Button } from "@relume_io/relume-ui";

export function PublicCoursesHero() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col gap-5 md:flex-row md:gap-12 lg:gap-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold text-brand-primary md:mb-4">Empower</p>
            <h1 className="text-6xl font-bold font-heading md:text-9xl lg:text-10xl">
              Unlock Your Potential
            </h1>
          </div>
          <div className="w-full max-w-lg">
            <p className="md:text-md">
              At Echaraf, our public courses are designed to provide every
              student with the tools they need for academic success. We
              prioritize accessibility and excellence, ensuring that quality
              education is within reach for all.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Enroll" className="bg-brand-primary hover:bg-brand-primary/90">Enroll</Button>
              <Button title="Learn More" variant="secondary">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}