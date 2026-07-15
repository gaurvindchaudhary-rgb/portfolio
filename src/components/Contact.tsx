import React, { useState } from "react";
import { Send, MessageSquare, Check, Mail, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ContactFormData } from "../types";
import { db, handleFirestoreError, OperationType } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function Contact() {
  const [form, setForm] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setIsSubmitting(true);
    const collectionPath = "enquiries";

    try {
      // Save contact inquiry to Firestore
      await addDoc(collection(db, collectionPath), {
        name: form.name,
        email: form.email,
        subject: form.subject || "",
        message: form.message,
        createdAt: serverTimestamp()
      });

      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset form
      setForm({ name: "", email: "", subject: "", message: "" });
      // Reset success banner after some time
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setIsSubmitting(false);
      handleFirestoreError(error, OperationType.WRITE, collectionPath);
    }
  };

  // Generate a dynamic, helpful WhatsApp link based on the user's name and message inputs
  const whatsappNumber = "917302668043"; // Your updated WhatsApp number
  const textMessage = encodeURIComponent(
    `Hello Gopal! My name is ${form.name || "[Your Name]"}. I am reaching out about "${
      form.subject || "a new project"
    }".\n\nMessage: ${form.message || "[Inquiry details]"}`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${textMessage}`;

  return (
    <section className="bg-bg py-24 px-6 md:px-12 relative" id="contact">
      {/* Title Header */}
      <div className="max-w-[1180px] mx-auto text-center mb-16">
        <div className="bg-gradient-to-r from-marigold to-jade bg-clip-text text-transparent font-display font-medium text-4xl md:text-6xl italic select-none">
          Let's build something.
        </div>
        <p className="mt-6 text-text-muted font-mono text-[0.8rem] md:text-[0.85rem] tracking-[0.15em] uppercase">
          GOPAL CHAUDHARY · MATHURA, UTTAR PRADESH
        </p>
      </div>

      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
        {/* Contact Info Sidebar (Lg: 5 cols) */}
        <div className="lg:col-span-5 space-y-8 bg-surface border border-border-custom/50 p-8 rounded-2xl">
          <div>
            <h3 className="font-display font-medium text-2xl text-text-main">
              Let's connect
            </h3>
            <p className="text-text-muted mt-3 leading-relaxed text-sm">
              Have an idea, a resort in need of a high-converting site, or want to launch targeted ad campaigns? Get in touch and let's get it shipped.
            </p>
          </div>

          <div className="space-y-6 pt-4">
            <div className="flex items-center gap-4 text-text-muted">
              <div className="p-3 bg-surface-2 border border-border-custom rounded-xl text-marigold">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-mono text-[0.62rem] text-text-muted tracking-widest uppercase">
                  Email
                </span>
                <a
                  href="mailto:gaurvindchaudhary@gmail.com"
                  className="text-text-main font-semibold text-sm hover:text-marigold transition-colors"
                >
                  gaurvindchaudhary@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 text-text-muted">
              <div className="p-3 bg-surface-2 border border-border-custom rounded-xl text-jade">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-mono text-[0.62rem] text-text-muted tracking-widest uppercase">
                  Location
                </span>
                <span className="text-text-main font-semibold text-sm">
                  Mathura, Uttar Pradesh, India
                </span>
              </div>
            </div>
          </div>

          {/* Quick WhatsApp Link CTA */}
          <div className="pt-6 border-t border-border-custom/40">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-xl font-mono font-bold text-xs bg-[#128C7E] hover:bg-[#075E54] text-white transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-950/20"
            >
              <MessageSquare className="w-4 h-4" />
              CHAT DIRECTLY ON WHATSAPP
            </a>
          </div>
        </div>

        {/* Contact Form Container (Lg: 7 cols) */}
        <div className="lg:col-span-7 bg-surface border border-border-custom/50 p-8 rounded-2xl relative overflow-hidden">
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-mono text-[0.68rem] text-text-muted tracking-widest uppercase font-bold">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Sharma"
                  className="bg-surface-2 border border-border-custom rounded-xl px-4 py-3.5 text-sm text-text-main placeholder-text-muted/40 focus:outline-none focus:border-marigold transition-colors"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-mono text-[0.68rem] text-text-muted tracking-widest uppercase font-bold">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="e.g. rahul@example.com"
                  className="bg-surface-2 border border-border-custom rounded-xl px-4 py-3.5 text-sm text-text-main placeholder-text-muted/40 focus:outline-none focus:border-marigold transition-colors"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="font-mono text-[0.68rem] text-text-muted tracking-widest uppercase font-bold">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="e.g. Website redesign for luxury villa"
                className="bg-surface-2 border border-border-custom rounded-xl px-4 py-3.5 text-sm text-text-main placeholder-text-muted/40 focus:outline-none focus:border-marigold transition-colors"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-mono text-[0.68rem] text-text-muted tracking-widest uppercase font-bold">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Briefly describe your project or inquiry..."
                className="bg-surface-2 border border-border-custom rounded-xl px-4 py-3.5 text-sm text-text-main placeholder-text-muted/40 focus:outline-none focus:border-marigold transition-colors resize-none"
              />
            </div>

            {/* Submit Actions */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-between items-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full sm:w-auto px-8 py-4 rounded-full font-mono font-bold text-xs tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg ${
                  isSubmitting
                    ? "bg-text-muted text-bg pointer-events-none"
                    : "bg-marigold text-bg hover:scale-[1.02] active:scale-[0.98] shadow-marigold/10"
                }`}
              >
                {isSubmitting ? (
                  <>DELIVERING...</>
                ) : (
                  <>
                    SUBMIT ENQUIRY <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Success Banner overlay */}
          <AnimatePresence>
            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="absolute inset-0 bg-surface flex flex-col justify-center items-center text-center p-6 z-20"
              >
                <div className="w-16 h-16 rounded-full bg-jade/10 border border-jade flex items-center justify-center mb-6 text-jade animate-bounce">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="font-display font-medium text-2xl text-text-main">
                  Enquiry Transmitted!
                </h4>
                <p className="text-text-muted mt-3 max-w-[400px] leading-relaxed text-sm">
                  Thank you for reaching out. I'll read through your specifications and get back to you within 24 hours.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
