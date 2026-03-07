"use client";

import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import {
  Send,
  Github,
  Linkedin,
  Mail,
  MapPin,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/fiqhan",
      icon: Github,
      color: "hover:text-white hover:border-gray-500",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/fiqhan-arriziq-247b59309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      icon: Linkedin,
      color: "hover:text-blue-400 hover:border-blue-500",
    },
    {
      name: "Email",
      url: "mailto:bm240521@gmail.com",
      icon: Mail,
      color: "hover:text-red-400 hover:border-red-500",
    },
  ];

  return (
    <section id="contact" className="section relative">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind or want to collaborate? Let&apos;s talk!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">
              Let&apos;s Build Something{" "}
              <span className="gradient-text">Amazing</span>
            </h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of your visions. Whether you have a
              question or just want to say hi, I&apos;ll try my best to get back
              to you!
            </p>

            {/* Location */}
            <div className="flex items-center gap-3 mb-6 text-slate-400">
              <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-700">
                <MapPin className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <p className="font-medium text-slate-300">Location</p>
                <p className="text-sm">Indonesia</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 mb-8 text-slate-400">
              <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-700">
                <Mail className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <p className="font-medium text-slate-300">Email</p>
                <a
                  href="mailto:bm240521@gmail.com"
                  className="text-sm hover:text-cyan-400 transition-colors"
                >
                  bm240521@gmail.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="font-medium text-slate-300 mb-4">Find me on</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-xl bg-slate-800/50 border border-slate-700 text-slate-400 transition-colors ${social.color}`}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      title={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm"
            >
              {/* Success Message */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 mb-6 rounded-xl bg-green-500/20 border border-green-500/30 text-green-400"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  <span>
                    Message sent successfully! I&apos;ll get back to you soon.
                  </span>
                </motion.div>
              )}

              <div className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-800/50 border ${
                      errors.name ? "border-red-500" : "border-slate-700"
                    } text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="flex items-center gap-1 mt-1 text-sm text-red-400">
                      <AlertCircle className="w-4 h-4" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-800/50 border ${
                      errors.email ? "border-red-500" : "border-slate-700"
                    } text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="flex items-center gap-1 mt-1 text-sm text-red-400">
                      <AlertCircle className="w-4 h-4" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-800/50 border ${
                      errors.subject ? "border-red-500" : "border-slate-700"
                    } text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors`}
                    placeholder="Project inquiry"
                  />
                  {errors.subject && (
                    <p className="flex items-center gap-1 mt-1 text-sm text-red-400">
                      <AlertCircle className="w-4 h-4" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-800/50 border ${
                      errors.message ? "border-red-500" : "border-slate-700"
                    } text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none`}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="flex items-center gap-1 mt-1 text-sm text-red-400">
                      <AlertCircle className="w-4 h-4" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold text-white flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
