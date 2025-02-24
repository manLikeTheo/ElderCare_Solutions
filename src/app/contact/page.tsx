"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

function Contact_Us() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const json = await response.json();
      if (json.success) {
        setStatus("Your Messagehas been sent successfully!");
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("An error occurred. Please try again later.");
    }
  };

  const openWhatsApp = () => {
    const whatsAppNumber = "2349017051564";
    const message = encodeURIComponent(
      `Hello, I'm interested in WellAged Care services. My message: ${formData.message}`
    );
    window.open(`https://wa.me/${whatsAppNumber}?text=${message}`, "_blank");
  };
  return (
    <section className="min-h-screen bg-purple-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-wider bg-gradient-to-r from-blue-900 via-cyan-600 to-blue-900 text-transparent bg-clip-text mb-4">
            Reach Out To Us
          </h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Whether you're a family member, caregiver, or partner, we're here to
            help you navigate senior care solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-10 lg:p-12"
          >
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xl font-semibold text-stone-700 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl text-lg tracking-wider font-medium border border-stone-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xl font-semibold text-stone-700 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl text-lg font-medium tracking-wider border border-stone-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  placeholder="hello@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xl font-semibold text-stone-700 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-5 rounded-xl text-lg tracking-wider font-medium border border-stone-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  placeholder="How can we help you today?"
                />
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  className="w-full py-6 bg-gradient-to-r from-blue-800 via-cyan-500 to-blue-800 text-white font-semibold rounded-xl text-xl transition-colors"
                >
                  Send Message
                </Button>
              </motion.div>
              <p className="text-center mt-4 text-stone-600">{status}</p>
            </div>
          </motion.form>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8 bg-white rounded-2xl shadow-xl p-8 lg:p-12"
          >
            <h2 className="text-3xl font-bold tracking-wide bg-gradient-to-r from-blue-900 via-cyan-600 to-blue-900 text-transparent bg-clip-text mb-6">
              Our Contacts
            </h2>

            <div className="space-y-6">
              {/* Email */}
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-purple-50"
              >
                <div className="p-3 bg-purple-100 rounded-lg">
                  <FaEnvelope className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-stone-700">
                    Email
                  </h3>
                  <p className="text-stone-600 font-medium text-lg">
                    contact@wellagedcare.com
                  </p>
                  <p className="text-stone-600 font-medium">
                    support@wellagedcare.com
                  </p>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-purple-50"
              >
                <div className="p-3 bg-purple-100 rounded-lg">
                  <FaPhone className="text-blue-700 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-stone-700">
                    Phone
                  </h3>
                  <p className="text-stone-600 text-lg font-medium">
                    +234 901 705 1564
                  </p>
                  <p className="text-stone-600 text-lg font-medium">
                    +234 900 123 4567
                  </p>
                </div>
              </motion.div>

              {/* WhatsApp Implementation */}
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-purple-50"
              >
                <div className="p-3 bg-purple-100 rounded-lg">
                  <FaPhone className="text-blue-700 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-stone-700">
                    WhatsApp
                  </h3>
                  <p className="text-stone-600 text-lg font-medium">
                    Click below to chat with us on whatsapp!
                  </p>

                  <Button
                    onClick={openWhatsApp}
                    className="text-white mt-4  hover:scale-105 transition-all   bg-gradient-to-r from-blue-800 via-cyan-500 to-blue-800 p-5 text-xl rounded-xl font-semibold hover:bg-teal-700"
                  >
                    Chat Now
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact_Us;
