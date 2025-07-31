import { Navbar } from "../components/Navbar";
import { PublicCoursesHero } from "../components/PublicCoursesHero";
import { PublicCoursesOverview } from "../components/PublicCoursesOverview";
import { PublicCoursesFeatures } from "../components/PublicCoursesFeatures";
import { PublicCoursesSchedule } from "../components/PublicCoursesSchedule";
import { PublicCoursesTestimonial } from "../components/PublicCoursesTestimonial";
import { PublicCoursesCTA } from "../components/PublicCoursesCTA";
import { Footer } from "../components/Footer";

export default function PublicCourses() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16 md:pt-18 bg-white border-b border-gray-100">
        <PublicCoursesHero />
      </div>
      <div className="section-light-blue border-b border-blue-100">
        <PublicCoursesOverview />
      </div>
      <div className="bg-gray-50 border-b border-gray-200">
        <PublicCoursesFeatures />
      </div>
      <div className="section-light-green border-b border-green-100">
        <PublicCoursesSchedule />
      </div>
      <div className="bg-white border-b border-gray-100">
        <PublicCoursesTestimonial />
      </div>
      <div className="section-light-red border-b border-red-100">
        <PublicCoursesCTA />
      </div>
      <div className="bg-gray-100 border-t border-gray-300">
        <Footer />
      </div>
    </div>
  );
}