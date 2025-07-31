import { Button } from "@relume_io/relume-ui";

export function PrivateCoursesCTA() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="relative z-10 container">
        <div className="w-full max-w-lg">
          <h2 className="mb-5 text-5xl font-bold font-heading text-white md:mb-6 md:text-7xl lg:text-8xl">
            Unlock Your Potential with Us
          </h2>
          <p className="text-white md:text-md">
            Join our private courses today and take the first step towards
            academic excellence and personal growth with personalized attention.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Button title="Enroll" className="bg-brand-primary hover:bg-brand-primary/90">Enroll</Button>
            <Button title="Contact" variant="secondary" className="bg-white text-black hover:bg-gray-100">
              Contact
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          className="size-full object-cover"
          alt="Students achieving success with private tutoring"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}