"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { Github, Instagram, Mail, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setLoading(false);

    if (res.ok) {
      toast.success("Message sent successfully! ✅");
      setFormData({ name: "", message: "" });
    } else {
      toast.error("Failed to send message ❌");
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center   dark:from-gray-900 dark:to-black p-6">
      <Toaster position="top-center" />

      {/* فرم تماس */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-md w-full dark:bg-white/10 backdrop-blur-md border border-gray-950 dark:border-white/20 rounded-2xl shadow-xl p-8 text-center"
      >
        <h1 className="text-3xl font-bold mb-6">Get in Touch</h1>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 rounded-lg border border-gray-950 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            className="p-3 rounded-lg border border-gray-950 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100"
          />

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={loading}
            className={`${
              loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
            } text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2`}
          >
            {loading ? (
              "Sending..."
            ) : (
              <>
                Send Message <Send size={18} />
              </>
            )}
          </motion.button>
        </form>
      </motion.div>

      {/* شبکه‌های اجتماعی */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="flex items-center justify-center gap-6 mt-10"
      >
        <a
          href="https://github.com/farbud"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-white/10 border dark:border-white/20 hover:bg-blue-500/30 transition-all duration-300"
        >
          <Github className=" w-6 h-6" />
        </a>
        <a
          href="https://instagram.com/_farbud_"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full border dark:border-white/20 hover:bg-blue-500/30 transition-all duration-300"
        >
          <Instagram className=" w-6 h-6" />
        </a>
        <a
          href="mailto:farbudskate@gmail.com"
          className="p-3 rounded-full border border-gray-950/20 dark:border-white/20 hover:bg-blue-500/30 transition-all duration-300"
        >
          <Mail className=" w-6 h-6" />
        </a>
        <a
          href="https://t.me/Feryyyys"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full  border dark:border-white/20 hover:bg-blue-500/30 transition-all duration-300"
        >
          <Send className=" w-6 h-6" />
        </a>
      </motion.div>
    </section>
  );
}
