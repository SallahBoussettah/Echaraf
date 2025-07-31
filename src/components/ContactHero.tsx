import { Button } from "@relume_io/relume-ui";

export function ContactHero() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="w-full max-w-lg">
          <p className="mb-3 font-semibold text-brand-primary md:mb-4">Connect</p>
          <h1 className="mb-5 text-6xl font-bold font-heading md:mb-6 md:text-9xl lg:text-10xl">
            Get in Touch
          </h1>
          <p className="md:text-md">
            We're here to answer your questions and support your journey at
            Echaraf. Reach out to us for any inquiries about our courses, enrollment, or educational programs.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Button title="Learn More" className="bg-brand-primary hover:bg-brand-primary/90">Learn More</Button>
            <Button title="Sign Up" variant="secondary">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}