import { Button } from "@/components/ui/button";
import React from "react";

function Contact_Us() {
  return (
    <section className="px-6 py-12  bg-slate-300">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
        <p className="text-2xl font-semibold mb-12 text-center">
          We would love to hear from you! Whether you have questions,
          suggestions, or need assistance, feel free to reach out to us.
        </p>

        {/* The Contact FORM */}
        <form action="" className="w-full max-w-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={"My Name"}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={"My Email"}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full p-2 border rounded"
              required
              value={
                "I would like to know all about your services. I would like to know all about your services. I would like to know all about your services."
              }
            />
          </div>
          <Button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white hover:bg-indigo-500 font-semibold rounded-xl text-xl"
          >
            Send Message
          </Button>
        </form>

        {/* Contact Info */}
        <div className="contact-info mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Our Contact Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-6 *:shadow-sm text-xl font-semibold">
            <div>
              <h3 className="text-lg font-medium">Email</h3>
              <p>contact@agebuddy.com</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Phone</h3>
              <p>+234 123 456 7890</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Location</h3>
              <p>123 Senior Care Lane, Lagos, Nigeria</p>
            </div>
          </div>
        </div>

        {/* Optional Map (using a placeholder here) */}
        <div className="map mt-12 w-full max-w-lg">
          <h2 className="text-xl text-center mb-4">Find Us Here</h2>
          <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
            <p className="text-center text-gray-600">Map Placeholder</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact_Us;
