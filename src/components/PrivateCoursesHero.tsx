import { Button } from "@relume_io/relume-ui";

export function PrivateCoursesHero() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="relative z-10 container">
        <div className="w-full max-w-lg">
          <p className="mb-3 font-semibold text-white md:mb-4">Empower</p>
          <h1 className="mb-5 text-6xl font-bold font-heading text-white md:mb-6 md:text-9xl lg:text-10xl">
            Unlock Your Potential
          </h1>
          <p className="text-white md:text-md">
            Discover personalized learning tailored to your needs with our
            exclusive private courses designed for individual success.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Button
              title="Learn More"
              className="bg-brand-primary hover:bg-brand-primary/90"
            >
              Learn More
            </Button>
            <Button
              title="Sign Up"
              variant="secondary"
              className="bg-white text-black hover:bg-gray-100"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
          className="size-full object-cover"
          alt="Private tutoring session at Echaraf"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
