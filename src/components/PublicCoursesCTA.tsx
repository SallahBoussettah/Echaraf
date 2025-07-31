import { Button } from "@relume_io/relume-ui";

export function PublicCoursesCTA() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="rb-5 mb-5 text-5xl font-bold font-heading md:mb-6 md:text-7xl lg:text-8xl">
              Join Our Public Courses Today
            </h2>
            <p className="md:text-md">
              Unlock your potential with our engaging public courses designed
              for every student's success. Start your learning journey with Echaraf.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Enroll" className="bg-brand-primary hover:bg-brand-primary/90">Enroll</Button>
              <Button title="Contact" variant="secondary">
                Contact
              </Button>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              className="w-full rounded-lg object-cover"
              alt="Students learning together at Echaraf"
            />
          </div>
        </div>
      </div>
    </section>
  );
}