import { Button } from "@relume_io/relume-ui";
import { useState } from "react";
import { RxChevronDown } from "react-icons/rx";

export function ContactFAQ() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (value: string) => {
    setOpenItems(prev => 
      prev.includes(value) 
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };

  const faqs = [
    {
      id: "item-0",
      question: "How to enroll?",
      answer: "Enrolling is simple! Visit our enrollment page, fill out the required information, and submit your application. You will receive a confirmation email once your application is processed."
    },
    {
      id: "item-1", 
      question: "What courses are offered?",
      answer: "We offer a variety of courses in core subjects including mathematics, sciences, languages, and humanities. Our curriculum is designed to cater to both public and private education needs. Explore our course catalog for more details."
    },
    {
      id: "item-2",
      question: "Who are the teachers?",
      answer: "Our teachers are highly qualified professionals with extensive experience in their respective fields. They are dedicated to providing personalized learning experiences for each student. You can learn more about our educators on the faculty page."
    },
    {
      id: "item-3",
      question: "How to track progress?",
      answer: "Students and parents can track academic progress through our online platform. Log in to your profile to access grades, assignments, and feedback from teachers. This helps ensure that students stay on track with their learning goals."
    },
    {
      id: "item-4",
      question: "Need further assistance?",
      answer: "If you have more questions or need assistance, please don't hesitate to reach out. Our support team is here to help you with any inquiries. Contact us through the form on our website or via email."
    }
  ];

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <div>
          <h2 className="rb-5 mb-5 text-5xl font-bold font-heading md:mb-6 md:text-7xl lg:text-8xl">
            FAQs
          </h2>
          <p className="md:text-md">
            Find answers to your questions about our courses, enrollment, and
            more right here.
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => toggleItem(faq.id)}
                className="flex w-full items-center justify-between p-4 md:p-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold md:text-md">{faq.question}</span>
                <RxChevronDown 
                  className={`size-5 transition-transform duration-200 ${
                    openItems.includes(faq.id) ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openItems.includes(faq.id) && (
                <div className="px-4 pb-4 md:px-5 md:pb-6">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}