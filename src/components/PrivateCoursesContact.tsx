import { Button } from "@relume_io/relume-ui";
import { useState } from "react";

export function PrivateCoursesContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    agreeToTerms: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', formData);
  };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-8 w-full max-w-lg md:mb-10 lg:mb-12">
          <p className="mb-3 font-semibold text-brand-primary md:mb-4">Inquiries</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold font-heading md:mb-6 md:text-7xl lg:text-8xl">
            Get in Touch
          </h2>
          <p className="md:text-md">
            Have questions about our private courses? We're here to help you find the perfect learning solution!
          </p>
        </div>
        <form onSubmit={handleSubmit} className="grid w-full max-w-md grid-cols-1 gap-6">
          <div className="grid w-full items-center">
            <label htmlFor="name" className="mb-2 text-sm font-semibold text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
              placeholder="Enter your full name"
            />
          </div>
          <div className="grid w-full items-center">
            <label htmlFor="email" className="mb-2 text-sm font-semibold text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
              placeholder="Enter your email address"
            />
          </div>
          <div className="grid w-full items-center">
            <label htmlFor="message" className="mb-2 text-sm font-semibold text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              placeholder="Tell us about your learning goals and how we can help..."
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all min-h-[11.25rem] overflow-auto resize-vertical"
            />
          </div>
          <div className="mb-3 flex items-start space-x-2 text-sm md:mb-4">
            <input
              type="checkbox"
              id="terms"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleInputChange}
              required
              className="mt-1 rounded border-gray-300 text-brand-primary focus:ring-brand-primary"
            />
            <label htmlFor="terms" className="cursor-pointer">
              I agree to the{' '}
              <a href="#" className="text-brand-primary hover:underline">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="text-brand-primary hover:underline">Privacy Policy</a>
            </label>
          </div>
          <div>
            <Button type="submit" title="Submit" className="bg-brand-primary hover:bg-brand-primary/90">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}