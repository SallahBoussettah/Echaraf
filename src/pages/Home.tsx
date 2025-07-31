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
      <Hero />
      <Features />
      <Subjects />
      <StudentPortal />
      <JoinCommunitySection />
      {/* <Testimonials /> */}
      <EarlyAccessSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
