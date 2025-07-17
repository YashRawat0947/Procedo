import React from 'react';
import { useState } from 'react';
import { Card, Button, Input } from '../components';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
          <p className="text-xl text-gray-600">Ready to transform your business? Let's start the conversation.</p>
        </div>

        <Card className="border-0 shadow-lg">
          <form onSubmit={handleSubmit} className="p-8 space-y-4">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <Input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
              <Input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
            </div>
            <div className="mb-4">
              <Input name="email" placeholder="Email Address" type="email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="mb-4">
              <Input name="phone" placeholder="Phone Number" type="tel" value={formData.phone} onChange={handleChange} />
            </div>
            <div className="mb-4">
              <Input name="company" placeholder="Company Name" value={formData.company} onChange={handleChange} />
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                className="w-full p-3 border border-gray-300 rounded-md resize-none h-32 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Contact;