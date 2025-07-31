import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";
import { RxPlus } from "react-icons/rx";

export function AboutFAQ() {
  const faqs = [
    {
      question: "What programs do you offer?",
      answer: "We offer a variety of programs for middle and high school students, including both public and private courses. Our curriculum covers core subjects such as mathematics, sciences, languages, and humanities. Each program is designed to foster academic success and personal growth."
    },
    {
      question: "How do I enroll?",
      answer: "Enrollment is simple! You can start by visiting our website and filling out the online application form. Once submitted, our admissions team will guide you through the next steps."
    },
    {
      question: "What are your policies?",
      answer: "Our policies are designed to ensure a safe and supportive learning environment. We prioritize academic integrity, respect, and inclusivity. For detailed information, please refer to our policy handbook available on our website."
    },
    {
      question: "Can parents access materials?",
      answer: "Yes, parents can access course materials and track their child's academic progress through our user-friendly platform. This ensures that they stay informed and engaged in their child's education. We believe in fostering a strong partnership with families."
    },
    {
      question: "How do teachers communicate?",
      answer: "Teachers communicate directly with students through our platform, allowing for timely feedback and support. They can also publish schedules and manage course content efficiently. This open line of communication enhances the learning experience for everyone."
    }
  ];

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <div>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            FAQs
          </h2>
          <p className="md:text-md">
            Discover answers to your questions about our programs, enrollment,
            and school policies.
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
        <Accordion
          type="multiple"
          className="grid items-start justify-stretch gap-4"
        >
          {faqs.map((faq, index) => (
            <div key={index} className="bg-background-primary rounded-lg border border-border-primary shadow-sm">
              <AccordionItem value={`item-${index}`} className="border-none px-5 md:px-6">
                <AccordionTrigger
                  icon={
                    <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
                  }
                  className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}