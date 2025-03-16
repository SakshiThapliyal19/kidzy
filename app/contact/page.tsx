'use client'
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message Sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 text-gray-800 flex flex-col items-center">
      

      {/* Contact Details */}
      <section className="py-16 flex flex-wrap justify-center gap-12 w-full max-w-4xl">
        <div className="flex flex-col items-center">
          <Mail className="w-12 h-12 text-indigo-600" />
          <h3 className="text-2xl font-semibold mt-4">Email</h3>
          <p className="text-lg text-gray-700">support@kidzy.com</p>
        </div>
        <div className="flex flex-col items-center">
          <Phone className="w-12 h-12 text-indigo-600" />
          <h3 className="text-2xl font-semibold mt-4">Phone</h3>
          <p className="text-lg text-gray-700">+91 98765 43210</p>
        </div>
        <div className="flex flex-col items-center">
          <MapPin className="w-12 h-12 text-indigo-600" />
          <h3 className="text-2xl font-semibold mt-4">Location</h3>
          <p className="text-lg text-gray-700">New Delhi, India</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold text-indigo-600 text-center">Send a Message</h2>
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 border rounded-lg text-lg focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 border rounded-lg text-lg focus:ring-2 focus:ring-indigo-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 border rounded-lg text-lg focus:ring-2 focus:ring-indigo-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-lg text-lg flex items-center justify-center gap-2 transition duration-300"
          >
            <Send className="w-5 h-5" /> Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
