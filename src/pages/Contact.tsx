import { Navbar } from "../components/Navbar";
import { ContactHero } from "../components/ContactHero";
import { ContactInfo } from "../components/ContactInfo";
import { ContactForm } from "../components/ContactForm";
import { ContactMap } from "../components/ContactMap";
import { ContactFAQ } from "../components/ContactFAQ";
import { Footer } from "../components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16 md:pt-18 bg-white border-b border-gray-100">
        <ContactHero />
      </div>
      <div className="section-light-blue border-b border-blue-100">
        <ContactInfo />
      </div>
      <div className="bg-gray-50 border-b border-gray-200">
        <ContactForm />
      </div>
      <div className="section-light-green border-b border-green-100">
        <ContactMap />
      </div>
      <div className="bg-white border-b border-gray-100">
        <ContactFAQ />
      </div>
      <div className="bg-gray-100 border-t border-gray-300">
        <Footer />
      </div>
    </div>
  );
}