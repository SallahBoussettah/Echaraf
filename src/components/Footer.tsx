import React from "react";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-[5%] py-12 md:py-18 lg:py-20 bg-background-secondary">
      <div className="container">
        <div className="grid grid-cols-1 items-center justify-center justify-items-center gap-x-[4vw] gap-y-12 pb-12 md:pb-18 lg:grid-cols-[0.25fr_1fr_0.25fr] lg:justify-between lg:gap-y-4 lg:pb-20">
          <a href="#" className="lg:justify-self-start">
            <div className="text-2xl font-bold text-primary">Echaraf</div>
          </a>
          <ul className="grid grid-flow-row grid-cols-1 items-start justify-center justify-items-center gap-6 md:grid-flow-col md:grid-cols-[max-content] md:justify-center md:justify-items-start">
            <li className="font-semibold">
              <a href="#" className="hover:text-primary transition-colors">About Us</a>
            </li>
            <li className="font-semibold">
              <a href="#" className="hover:text-primary transition-colors">Our Courses</a>
            </li>
            <li className="font-semibold">
              <a href="#" className="hover:text-primary transition-colors">Student Portal</a>
            </li>
            <li className="font-semibold">
              <a href="#" className="hover:text-primary transition-colors">Contact Us</a>
            </li>
            <li className="font-semibold">
              <a href="#" className="hover:text-primary transition-colors">FAQs</a>
            </li>
          </ul>
          <div className="flex items-start justify-start justify-items-center gap-x-3 lg:justify-self-end">
            <a href="#" className="hover:text-primary transition-colors">
              <BiLogoFacebookCircle className="size-6" />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <BiLogoInstagram className="size-6" />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <FaXTwitter className="size-6 p-0.5" />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <BiLogoLinkedinSquare className="size-6" />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <BiLogoYoutube className="size-6" />
            </a>
          </div>
        </div>
        <div className="h-px w-full bg-border-primary" />
        <div className="flex flex-col-reverse items-center justify-center justify-items-center pt-6 pb-4 text-sm md:flex-row md:gap-x-6 md:pt-8 md:pb-0">
          <p className="mt-8 md:mt-0 text-text-secondary">
            © {currentYear} Echaraf Educational Institution. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}