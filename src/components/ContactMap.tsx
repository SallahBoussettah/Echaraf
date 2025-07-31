import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";

export function ContactMap() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div>
          <div className="mb-12 grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:mb-20 md:grid-cols-[1fr_.75fr] md:gap-x-20 md:gap-y-16">
            <div className="rb-12 max-w-lg">
              <p className="mb-3 font-semibold text-brand-highlight md:mb-4">Visit Us</p>
              <h2 className="rb-5 mb-5 text-5xl font-bold font-heading md:mb-6 md:text-7xl lg:text-8xl">
                Find Our Location
              </h2>
              <p className="md:text-md">
                Visit our campus to experience our learning environment firsthand.
                We're conveniently located and easily accessible.
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
        <div className="relative">
          <div className="w-full h-[400px] md:h-[516px] bg-gray-200 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <BiMap className="size-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 font-semibold">Interactive Map</p>
              <p className="text-sm text-gray-500 mt-2">
                123 Education Street, Learning District, City 12345
              </p>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-brand-primary text-white rounded-lg hover:bg-brand-primary/90 transition-colors"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}