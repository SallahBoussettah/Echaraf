import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";

export function ContactInfo() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div>
          <div className="mb-12 grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:mb-20 md:grid-cols-[1fr_.75fr] md:gap-x-20 md:gap-y-16">
            <div className="rb-12 max-w-lg">
              <p className="mb-3 font-semibold text-brand-success md:mb-4">Connect</p>
              <h2 className="rb-5 mb-5 text-5xl font-bold font-heading md:mb-6 md:text-7xl lg:text-8xl">
                Get in Touch
              </h2>
              <p className="md:text-md">
                We're here to assist you with any inquiries or support you may
                need. Contact us through any of the methods below.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="grid auto-cols-fr grid-cols-1 gap-x-4 gap-y-6 py-2">
                <div className="flex flex-row">
                  <div className="mr-4 md:mb-4">
                    <div className="flex size-6 items-center justify-center">
                      <BiEnvelope className="size-6 text-brand-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-md leading-[1.4] font-bold md:text-xl">
                      Email
                    </h3>
                    <a className="text-brand-primary hover:underline" href="mailto:info@echaraf.edu">
                      info@echaraf.edu
                    </a>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="mr-4 md:mb-4">
                    <div className="flex size-6 items-center justify-center">
                      <BiPhone className="size-6 text-brand-success" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-md leading-[1.4] font-bold md:text-xl">
                      Phone
                    </h3>
                    <a className="text-brand-success hover:underline" href="tel:+1234567890">
                      +1 (234) 567-8900
                    </a>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="mr-4 md:mb-4">
                    <div className="flex size-6 items-center justify-center">
                      <BiMap className="size-6 text-brand-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-md leading-[1.4] font-bold md:text-xl">
                      Office
                    </h3>
                    <p>123 Education Street, Learning District, City 12345</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
            className="w-full rounded-lg object-cover"
            alt="Echaraf educational facility"
          />
        </div>
      </div>
    </section>
  );
}