"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Send, MessageSquare } from "lucide-react";
import emailjs from "@emailjs/browser";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function ContactSection() {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (form.current) {
      emailjs.sendForm(
        "service_20deje5",
        "template_qghd1oo",
        form.current,
        "bYY9QKzFxdrtOKwKV"
      )
      .then(() => {
        alert("Message sent successfully! I'll get back to you soon.");
        setFormData({ from_name: '', from_email: '', message: '' });
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.log("EmailJS Error:", error);
        alert("Failed to send message. Please try again or email me directly at omkarsondage@gmail.com");
        setIsSubmitting(false);
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    const name = target.name;
    const value = target.value;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="relative min-h-screen overflow-hidden border-t border-white/5 px-4 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-1/4 h-72 w-72 rounded-full bg-blue-500/5 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/3 h-56 w-56 rounded-full bg-violet-500/5 blur-[80px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I had love to hear from you! 
            Fill out the form below and I will get back to you as soon as possible.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2"
        >
          {/* Contact Info Card */}
          <motion.div variants={item} className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 group hover:border-blue-400/30 hover:bg-blue-500/10 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                  <Mail className="h-6 w-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">Email</h3>
                  <p className="text-gray-400">omkarsondage@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300">
                  <MessageSquare className="h-6 w-6 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">Response Time</h3>
                  <p className="text-gray-400">Usually within 24 hours</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={item}>
            <form ref={form} onSubmit={sendEmail} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 space-y-6 group hover:border-blue-400/30 hover:bg-blue-500/10 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
              <div>
                <label htmlFor="from_name" className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  Your Name
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:border-blue-400/50 focus:bg-blue-500/10 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-200 group-hover:border-blue-400/70 group-hover:bg-blue-500/20"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="from_email" className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  Your Email
                </label>
                <input
                  type="email"
                  id="from_email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:border-blue-400/50 focus:bg-blue-500/10 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-200 group-hover:border-blue-400/70 group-hover:bg-blue-500/20"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:border-blue-400/50 focus:bg-blue-500/10 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-200 resize-none group-hover:border-blue-400/70 group-hover:bg-blue-500/20"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:shadow-xl hover:from-blue-600 hover:via-purple-600 hover:to-blue-700 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
