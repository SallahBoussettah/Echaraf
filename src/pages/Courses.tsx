import React from "react";
import { Navbar } from "../components/Navbar";
import { CoursesHero } from "../components/CoursesHero";
import { CourseOfferings } from "../components/CourseOfferings";
import { CoursePricing } from "../components/CoursePricing";
import { AboutFAQ } from "../components/AboutFAQ";
import { Footer } from "../components/Footer";

export default function Courses() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16 md:pt-18 bg-white border-b border-gray-100">
        <CoursesHero />
      </div>
      <div className="section-light-blue border-b border-blue-100">
        <CourseOfferings />
      </div>
      <div className="bg-gray-50 border-b border-gray-200">
        <CoursePricing />
      </div>
      <div className="section-light-green border-b border-green-100">
        <AboutFAQ />
      </div>
      <div className="bg-gray-100 border-t border-gray-300">
        <Footer />
      </div>
    </div>
  );
}