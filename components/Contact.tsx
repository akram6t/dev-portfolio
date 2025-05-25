
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { SOCIAL_LINKS, EnvelopeIcon } from '../constants';
import type { SocialLink } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    // Replace with actual form submission logic (e.g., using Formspree, Netlify Forms, or a backend API)
    console.log('Form data submitted:', formData);
    // Example:
    // const success = Math.random() > 0.2; // Simulate success/failure
    const success = true; // Assume success for now
    if (success) {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setSubmitStatus('error');
    }
    setIsSubmitting(false);
  };

  const inputVariants = {
    focus: {
      borderColor: "#30A3F0",
      boxShadow: "0 0 0 2px rgba(48, 163, 240, 0.3)",
      transition: { duration: 0.2 }
    }
  };

  return (
    <SectionWrapper 
      id="contact" 
      title="Get In Touch"
      subtitle="Have a project in mind, a question, or just want to say hi? I'd love to hear from you!"
    >
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity:0, x:-30 }}
          whileInView={{ opacity:1, x:0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-orbitron font-semibold text-[#C9D1D9] mb-6 flex items-center">
            <EnvelopeIcon className="w-7 h-7 mr-3 text-[#30A3F0]" />
            Send a Message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#8B949E] mb-1">
                <span className="text-[#39FF14]">$</span> Full Name
              </label>
              <motion.input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                whileFocus="focus"
                variants={inputVariants}
                className="w-full px-4 py-2.5 bg-[#0D1117] border border-[#373E47] rounded-md text-[#C9D1D9] focus:ring-[#30A3F0] focus:border-[#30A3F0] outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#8B949E] mb-1">
                <span className="text-[#39FF14]">$</span> Email Address
              </label>
              <motion.input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                whileFocus="focus"
                variants={inputVariants}
                className="w-full px-4 py-2.5 bg-[#0D1117] border border-[#373E47] rounded-md text-[#C9D1D9] focus:ring-[#30A3F0] focus:border-[#30A3F0] outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#8B949E] mb-1">
                <span className="text-[#39FF14]">$</span> Your Message
              </label>
              <motion.textarea
                name="message"
                id="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                whileFocus="focus"
                variants={inputVariants}
                className="w-full px-4 py-2.5 bg-[#0D1117] border border-[#373E47] rounded-md text-[#C9D1D9] focus:ring-[#30A3F0] focus:border-[#30A3F0] outline-none transition-colors resize-none"
              />
            </div>
            <div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-[#30A3F0] to-[#39FF14] text-[#0D1117] font-semibold rounded-lg hover:opacity-90 transition-opacity duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_15px_rgba(48,163,240,0.4)] hover:shadow-[0_0_20px_rgba(57,255,20,0.6)]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </div>
            {submitStatus === 'success' && (
              <p className="text-sm text-center text-[#39FF14]">Message sent successfully! I'll get back to you soon.</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-sm text-center text-red-500">Something went wrong. Please try again later.</p>
            )}
          </form>
        </motion.div>
        
        <motion.div
          initial={{ opacity:0, x:30 }}
          whileInView={{ opacity:1, x:0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:mt-12"
        >
          <h3 className="text-2xl font-orbitron font-semibold text-[#C9D1D9] mb-6">
            Or Connect Directly
          </h3>
          <p className="text-[#8B949E] mb-6">
            Feel free to reach out through any of these platforms. I'm always open to discussing new projects, creative ideas, or opportunities to be part of something exciting.
          </p>
          <div className="space-y-4">
            {SOCIAL_LINKS.map((link: SocialLink) => (
              <motion.a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-[#161B22] rounded-lg border border-[#373E47] hover:border-[#30A3F0] transition-all duration-200 group"
                whileHover={{ scale: 1.03, x: 5,  boxShadow: "0px 5px 15px rgba(48, 163, 240, 0.2)"}}
              >
                <span className="text-[#30A3F0] group-hover:text-[#60C3F0] transition-colors mr-4">
                  {React.cloneElement(link.icon, { className: "w-7 h-7" })}
                </span>
                <div>
                  <p className="font-semibold text-[#C9D1D9] group-hover:text-white transition-colors">{link.name}</p>
                  <p className="text-sm text-[#8B949E] group-hover:text-[#30A3F0] transition-colors break-all">{link.url.replace('mailto:','')}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
