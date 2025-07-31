import { Button } from "@relume_io/relume-ui";
import { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    topic: '',
    role: '',
    message: '',
    agreeToTerms: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' || type === 'radio' ? (type === 'checkbox' ? checked : value) : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', formData);
  };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">
        <div className="mx-auto mb-8 w-full max-w-lg text-center md:mb-10 lg:mb-12">
          <p className="mb-3 font-semibold text-brand-primary md:mb-4">Connect</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold font-heading md:mb-6 md:text-7xl lg:text-8xl">
            Send us a Message
          </h2>
          <p className="md:text-md">
            Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 grid-rows-[auto_auto] gap-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="grid w-full items-center">
              <label htmlFor="firstName" className="mb-2 text-sm font-semibold text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
                placeholder="Enter your first name"
              />
            </div>
            <div className="grid w-full items-center">
              <label htmlFor="lastName" className="mb-2 text-sm font-semibold text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
                placeholder="Enter your email"
              />
            </div>
            <div className="grid w-full items-center">
              <label htmlFor="phone" className="mb-2 text-sm font-semibold text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
                placeholder="Enter your phone number"
              />
            </div>
          </div>
          <div className="grid w-full items-center">
            <label htmlFor="topic" className="mb-2 text-sm font-semibold text-gray-700">Select a Topic</label>
            <select
              id="topic"
              name="topic"
              value={formData.topic}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
            >
              <option value="">Choose one...</option>
              <option value="enrollment">Enrollment Information</option>
              <option value="courses">Course Details</option>
              <option value="pricing">Pricing & Payment</option>
              <option value="support">Technical Support</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="grid w-full items-center py-3 md:py-4">
            <label className="mb-3 text-sm font-semibold text-gray-700 md:mb-4">Your Role in Inquiry</label>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3.5">
              {[
                { value: 'prospective-student', label: 'Prospective Student' },
                { value: 'current-parent', label: 'Current Parent' },
                { value: 'interested-teacher', label: 'Interested Teacher' },
                { value: 'community-member', label: 'Community Member' },
                { value: 'other-inquiry', label: 'Other Inquiry' },
                { value: 'other', label: 'Other' }
              ].map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value={option.value}
                    id={option.value}
                    name="role"
                    checked={formData.role === option.value}
                    onChange={handleInputChange}
                    className="rounded border-gray-300 text-brand-primary focus:ring-brand-primary"
                  />
                  <label htmlFor={option.value} className="text-sm cursor-pointer">{option.label}</label>
                </div>
              ))}
            </div>
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
              placeholder="Enter your message..."
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
          <div className="text-center">
            <Button type="submit" title="Send Message" className="bg-brand-primary hover:bg-brand-primary/90">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}