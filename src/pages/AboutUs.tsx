import { Navbar } from "../components/Navbar";
import { AboutHero } from "../components/AboutHero";
import { AboutMission } from "../components/AboutMission";
import { AboutPrograms } from "../components/AboutPrograms";
import { AboutTimeline } from "../components/AboutTimeline";
import { AboutTeam } from "../components/AboutTeam";
import { AboutTestimonials } from "../components/AboutTestimonials";
import { AboutValues } from "../components/AboutValues";
import { AboutFAQ } from "../components/AboutFAQ";
import { Footer } from "../components/Footer";

export default function AboutUs() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16 md:pt-18">
        <AboutHero />
      </div>
      <AboutMission />
      <AboutPrograms />
      <AboutTimeline />
      <AboutTeam />
      <AboutTestimonials />
      <AboutValues />
      <AboutFAQ />
      <Footer />
    </div>
  );
}
