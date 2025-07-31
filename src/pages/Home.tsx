import React from "react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { Subjects } from "../components/Subjects";
import { StudentPortal } from "../components/StudentPortal";
import { JoinCommunitySection } from "../components/JoinCommunitySection";
import { Testimonials } from "../components/Testimonials";
import { EarlyAccessSection } from "../components/EarlyAccessSection";
import { NewsletterSection } from "../components/NewsletterSection";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="bg-white border-b border-gray-100">
        <Hero />
      </div>
      <div className="bg-gray-50 border-b border-gray-200">
        <Features />
      </div>
      <div className="section-light-blue border-b border-blue-100">
        <Subjects />
      </div>
      <div className="bg-white border-b border-gray-100">
        <StudentPortal />
      </div>
      <div className="section-light-green border-b border-green-100">
        <JoinCommunitySection />
      </div>
      <div className="bg-gray-50 border-b border-gray-200">
        <Testimonials />
      </div>
      <div className="section-light-red border-b border-red-100">
        <EarlyAccessSection />
      </div>
      <div className="section-light-yellow border-b border-yellow-100">
        <NewsletterSection />
      </div>
      <div className="bg-gray-100 border-t border-gray-300">
        <Footer />
      </div>
    </div>
  );
}
