import { Navbar } from "../components/Navbar";
import { PrivateCoursesHero } from "../components/PrivateCoursesHero";
import { PrivateCoursesFeatures } from "../components/PrivateCoursesFeatures";
import { PrivateCoursesOverview } from "../components/PrivateCoursesOverview";
import { PrivateCoursesLogos } from "../components/PrivateCoursesLogos";
import { PrivateCoursesTestimonial } from "../components/PrivateCoursesTestimonial";
import { PrivateCoursesPricing } from "../components/PrivateCoursesPricing";
import { PrivateCoursesCTA } from "../components/PrivateCoursesCTA";
import { PrivateCoursesContact } from "../components/PrivateCoursesContact";
import { Footer } from "../components/Footer";

export default function PrivateCourses() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16 md:pt-18">
        <PrivateCoursesHero />
      </div>
      <div className="bg-white border-b border-gray-100">
        <PrivateCoursesFeatures />
      </div>
      <div className="section-light-blue border-b border-blue-100">
        <PrivateCoursesOverview />
      </div>
      <div className="bg-white border-b border-gray-100">
        <PrivateCoursesLogos />
      </div>
      <div className="bg-gray-50 border-b border-gray-200">
        <PrivateCoursesTestimonial />
      </div>
      <div className="section-light-green border-b border-green-100">
        <PrivateCoursesPricing />
      </div>
      <div className="pt-16 md:pt-18">
        <PrivateCoursesCTA />
      </div>
      <div className="bg-white border-b border-gray-100">
        <PrivateCoursesContact />
      </div>
      <div className="bg-gray-100 border-t border-gray-300">
        <Footer />
      </div>
    </div>
  );
}