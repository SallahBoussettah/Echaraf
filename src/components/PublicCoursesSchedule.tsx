import {
  Badge,
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@relume_io/relume-ui";

export function PublicCoursesSchedule() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col">
          <div className="mb-12 md:mb-18 lg:mb-20">
            <div className="mx-auto max-w-lg text-center">
              <p className="font-semibold text-brand-highlight">Upcoming</p>
              <h1 className="mt-3 text-5xl font-bold font-heading md:mt-4 md:text-7xl lg:text-8xl">
                Schedule
              </h1>
              <p className="mt-5 text-base md:mt-6 md:text-md">
                Explore our timetable for upcoming public courses and important
                dates to enhance your learning journey.
              </p>
            </div>
          </div>
          <Tabs
            defaultValue="fri-09-feb"
            className="flex flex-col justify-start"
          >
            <TabsList className="mb-12 ml-[-5vw] flex no-scrollbar w-screen items-center overflow-auto pl-[5vw] md:ml-0 md:w-full md:justify-center md:overflow-hidden md:pl-0">
              <TabsTrigger
                value="fri-09-feb"
                className="px-4 data-[state=active]:border data-[state=active]:border-border-primary data-[state=active]:bg-transparent data-[state=active]:text-neutral-black data-[state=inactive]:border-transparent"
              >
                Fri 09 Feb
              </TabsTrigger>
              <TabsTrigger
                value="sat-10-feb"
                className="px-4 data-[state=active]:border data-[state=active]:border-border-primary data-[state=active]:bg-transparent data-[state=active]:text-neutral-black data-[state=inactive]:border-transparent"
              >
                Sat 10 Feb
              </TabsTrigger>
              <TabsTrigger
                value="sun-11-feb"
                className="px-4 data-[state=active]:border data-[state=active]:border-border-primary data-[state=active]:bg-transparent data-[state=active]:text-neutral-black data-[state=inactive]:border-transparent"
              >
                Sun 11 Feb
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="fri-09-feb"
              className="data-[state=active]:animate-tabs"
            >
              <div className="grid grid-cols-1 items-center gap-4 border-t border-border-primary py-6 md:grid-cols-[6rem_1fr_max-content] md:gap-8 md:py-8">
                <span className="text-md md:text-lg">8:00 am</span>
                <div className="grid grid-cols-1 items-center gap-2 lg:grid-cols-[1fr_.25fr_.25fr] lg:gap-4">
                  <div className="flex w-full flex-wrap items-center gap-2 sm:gap-4">
                    <h5 className="text-xl font-bold md:text-2xl">
                      Math Workshop
                    </h5>
                    <div className="flex items-center gap-2">
                      <Badge>In-person</Badge>
                      <Badge>Online</Badge>
                    </div>
                  </div>
                  <span>Mr. Smith</span>
                  <span>Room 101</span>
                </div>
                <div className="flex">
                  <Button variant="secondary" size="sm">
                    <a href="#">View details</a>
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-1 items-center gap-4 border-t border-border-primary py-6 md:grid-cols-[6rem_1fr_max-content] md:gap-8 md:py-8">
                <span className="text-md md:text-lg">9:00 am</span>
                <div className="grid grid-cols-1 items-center gap-2 lg:grid-cols-[1fr_.25fr_.25fr] lg:gap-4">
                  <div className="flex w-full flex-wrap items-center gap-2 sm:gap-4">
                    <h5 className="text-xl font-bold md:text-2xl">
                      Science Fair
                    </h5>
                    <div className="flex items-center gap-2">
                      <Badge>Online</Badge>
                    </div>
                  </div>
                  <span>Dr. Jones</span>
                  <span>Virtual</span>
                </div>
                <div className="flex">
                  <Button variant="secondary" size="sm">
                    <a href="#">View details</a>
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-1 items-center gap-4 border-t border-border-primary py-6 md:grid-cols-[6rem_1fr_max-content] md:gap-8 md:py-8">
                <span className="text-md md:text-lg">10:00 am</span>
                <div className="grid grid-cols-1 items-center gap-2 lg:grid-cols-[1fr_.25fr_.25fr] lg:gap-4">
                  <div className="flex w-full flex-wrap items-center gap-2 sm:gap-4">
                    <h5 className="text-xl font-bold md:text-2xl">
                      Literature Discussion
                    </h5>
                    <div className="flex items-center gap-2">
                      <Badge>Online</Badge>
                    </div>
                  </div>
                  <span>Ms. Brown</span>
                  <span>Zoom</span>
                </div>
                <div className="flex">
                  <Button variant="secondary" size="sm">
                    <a href="#">View details</a>
                  </Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="sat-10-feb"
              className="data-[state=active]:animate-tabs"
            >
              <div className="grid grid-cols-1 items-center gap-4 border-t border-border-primary py-6 md:grid-cols-[6rem_1fr_max-content] md:gap-8 md:py-8">
                <span className="text-md md:text-lg">8:00 am</span>
                <div className="grid grid-cols-1 items-center gap-2 lg:grid-cols-[1fr_.25fr_.25fr] lg:gap-4">
                  <div className="flex w-full flex-wrap items-center gap-2 sm:gap-4">
                    <h5 className="text-xl font-bold md:text-2xl">
                      History Lecture
                    </h5>
                    <div className="flex items-center gap-2">
                      <Badge>In-person</Badge>
                      <Badge>Online</Badge>
                    </div>
                  </div>
                  <span>Mr. Lee</span>
                  <span>Auditorium</span>
                </div>
                <div className="flex">
                  <Button variant="secondary" size="sm">
                    <a href="#">View details</a>
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-1 items-center gap-4 border-t border-border-primary py-6 md:grid-cols-[6rem_1fr_max-content] md:gap-8 md:py-8">
                <span className="text-md md:text-lg">9:00 am</span>
                <div className="grid grid-cols-1 items-center gap-2 lg:grid-cols-[1fr_.25fr_.25fr] lg:gap-4">
                  <div className="flex w-full flex-wrap items-center gap-2 sm:gap-4">
                    <h5 className="text-xl font-bold md:text-2xl">
                      Art Workshop
                    </h5>
                    <div className="flex items-center gap-2">
                      <Badge>In-person</Badge>
                    </div>
                  </div>
                  <span>Ms. Green</span>
                  <span>Studio</span>
                </div>
                <div className="flex">
                  <Button variant="secondary" size="sm">
                    <a href="#">View details</a>
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-1 items-center gap-4 border-t border-border-primary py-6 md:grid-cols-[6rem_1fr_max-content] md:gap-8 md:py-8">
                <span className="text-md md:text-lg">10:00 am</span>
                <div className="grid grid-cols-1 items-center gap-2 lg:grid-cols-[1fr_.25fr_.25fr] lg:gap-4">
                  <div className="flex w-full flex-wrap items-center gap-2 sm:gap-4">
                    <h5 className="text-xl font-bold md:text-2xl">
                      Physics Seminar
                    </h5>
                    <div className="flex items-center gap-2">
                      <Badge>In-person</Badge>
                    </div>
                  </div>
                  <span>Dr. Adams</span>
                  <span>Lab 2</span>
                </div>
                <div className="flex">
                  <Button variant="secondary" size="sm">
                    <a href="#">View details</a>
                  </Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="sun-11-feb"
              className="data-[state=active]:animate-tabs"
            >
              <div className="grid grid-cols-1 items-center gap-4 border-t border-border-primary py-6 md:grid-cols-[6rem_1fr_max-content] md:gap-8 md:py-8">
                <span className="text-md md:text-lg">8:00 am</span>
                <div className="grid grid-cols-1 items-center gap-2 lg:grid-cols-[1fr_.25fr_.25fr] lg:gap-4">
                  <div className="flex w-full flex-wrap items-center gap-2 sm:gap-4">
                    <h5 className="text-xl font-bold md:text-2xl">
                      Chemistry Workshop
                    </h5>
                    <div className="flex items-center gap-2">
                      <Badge>In-person</Badge>
                      <Badge>Online</Badge>
                    </div>
                  </div>
                  <span>Mr. Taylor</span>
                  <span>Room 202</span>
                </div>
                <div className="flex">
                  <Button variant="secondary" size="sm">
                    <a href="#">View details</a>
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-1 items-center gap-4 border-t border-border-primary py-6 md:grid-cols-[6rem_1fr_max-content] md:gap-8 md:py-8">
                <span className="text-md md:text-lg">9:00 am</span>
                <div className="grid grid-cols-1 items-center gap-2 lg:grid-cols-[1fr_.25fr_.25fr] lg:gap-4">
                  <div className="flex w-full flex-wrap items-center gap-2 sm:gap-4">
                    <h5 className="text-xl font-bold md:text-2xl">
                      Debate Club
                    </h5>
                    <div className="flex items-center gap-2">
                      <Badge>In-person</Badge>
                    </div>
                  </div>
                  <span>Ms. White</span>
                  <span>Hall A</span>
                </div>
                <div className="flex">
                  <Button variant="secondary" size="sm">
                    <a href="#">View details</a>
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-1 items-center gap-4 border-t border-border-primary py-6 md:grid-cols-[6rem_1fr_max-content] md:gap-8 md:py-8">
                <span className="text-md md:text-lg">10:00 am</span>
                <div className="grid grid-cols-1 items-center gap-2 lg:grid-cols-[1fr_.25fr_.25fr] lg:gap-4">
                  <div className="flex w-full flex-wrap items-center gap-2 sm:gap-4">
                    <h5 className="text-xl font-bold md:text-2xl">
                      Creative Writing
                    </h5>
                    <div className="flex items-center gap-2">
                      <Badge>In-person</Badge>
                    </div>
                  </div>
                  <span>Mr. Black</span>
                  <span>Room 303</span>
                </div>
                <div className="flex">
                  <Button variant="secondary" size="sm">
                    <a href="#">View details</a>
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}