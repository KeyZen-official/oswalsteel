"use client";

import React, { useState } from "react";
import { MessageSquare, Check, AlertCircle, Loader2 } from "lucide-react";

export const EnquiryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    grade: "",
    requirement: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const payload = new FormData(e.currentTarget);
      payload.append("access_key", "a39d7121-2040-4f2a-9bca-f322d219df12");
      payload.append(
        "subject",
        `Oswal Landing Page Enquiry: ${formData.grade || "Specialty Steel"} - ${formData.name} (${formData.company || "Direct"})`
      );
      payload.append("from_name", "Oswal Steel Landing Page");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });

      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.message || "Failed to submit enquiry. Please call +91 9920049724 or use WhatsApp.");
      }
    } catch (err) {
      setErrorMessage("Network error occurred. Please contact us directly via WhatsApp (+91 9920049724) or phone.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const text = `Hello Oswal Steel Industries,
Material Requirement:
Grade: ${formData.grade || "Not specified"}
Requirement: ${formData.requirement || "Please confirm stock availability and pricing."}
Name: ${formData.name || "N/A"}
Company: ${formData.company || "N/A"}
Phone: ${formData.phone || "N/A"}`;

    window.open(`https://wa.me/919920049724?text=${encodeURIComponent(text)}`, "_blank");
  };

  const resetForm = () => {
    setFormData({
      name: "",
      company: "",
      phone: "",
      email: "",
      grade: "",
      requirement: "",
    });
    setSubmitted(false);
    setErrorMessage("");
  };

  return (
    <div className="bg-warmWhite border border-borderGrey p-6 sm:p-8">
      {submitted ? (
        <div className="py-8 text-center space-y-3 bg-softGrey/50 p-6 border border-borderGrey">
          <div className="w-8 h-8 rounded-full bg-charcoal text-warmWhite flex items-center justify-center mx-auto">
            <Check className="w-4 h-4" />
          </div>
          <h4 className="text-base font-bold text-charcoal uppercase">
            Requirement Received & Sent
          </h4>
          <p className="text-xs text-steel max-w-md mx-auto leading-relaxed">
            Thank you, <strong>{formData.name}</strong>. Your enquiry for <strong>{formData.grade || "specialty steel"}</strong> has been sent to our sales desk. Ashish Shah (+91 9920049724) will contact you shortly with material availability and quotation.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <button
              onClick={handleWhatsApp}
              className="px-4 py-2 bg-charcoal text-warmWhite text-xs uppercase tracking-wide inline-flex items-center gap-1.5 hover:bg-graphite transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-steelLight" />
              <span>Send via WhatsApp</span>
            </button>
            <button
              onClick={resetForm}
              className="px-3 py-2 border border-borderGrey text-xs uppercase tracking-wide text-charcoal hover:border-charcoal transition-colors"
            >
              New Enquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
          {errorMessage && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-steel uppercase text-[11px] mb-1 font-medium">
                Name <span className="text-oxide">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Full name"
                className="w-full px-3 py-2 bg-warmWhite border border-borderGrey text-charcoal focus:outline-none focus:border-charcoal"
              />
            </div>
            <div>
              <label className="block text-steel uppercase text-[11px] mb-1 font-medium">
                Company Name
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company / Machine shop name"
                className="w-full px-3 py-2 bg-warmWhite border border-borderGrey text-charcoal focus:outline-none focus:border-charcoal"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-steel uppercase text-[11px] mb-1 font-medium">
                Phone Number <span className="text-oxide">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 Mobile number"
                className="w-full px-3 py-2 bg-warmWhite border border-borderGrey text-charcoal focus:outline-none focus:border-charcoal"
              />
            </div>
            <div>
              <label className="block text-steel uppercase text-[11px] mb-1 font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address"
                className="w-full px-3 py-2 bg-warmWhite border border-borderGrey text-charcoal focus:outline-none focus:border-charcoal"
              />
            </div>
          </div>

          <div>
            <label className="block text-steel uppercase text-[11px] mb-1 font-medium">
              Material / Grade
            </label>
            <input
              type="text"
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              placeholder="e.g. M2, D2, H13, EN 24, 6061"
              className="w-full px-3 py-2 bg-warmWhite border border-borderGrey text-charcoal focus:outline-none focus:border-charcoal"
            />
          </div>

          <div>
            <label className="block text-steel uppercase text-[11px] mb-1 font-medium">
              Requirement / Message
            </label>
            <textarea
              name="requirement"
              rows={3}
              value={formData.requirement}
              onChange={handleChange}
              placeholder="State required dimensions, shape (Round, Flat, Sheet, Plate), quantity, or custom cutting specs..."
              className="w-full px-3 py-2 bg-warmWhite border border-borderGrey text-charcoal focus:outline-none focus:border-charcoal resize-none"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-6 py-2.5 bg-charcoal text-warmWhite uppercase font-medium tracking-wide hover:bg-graphite transition-colors disabled:opacity-50 inline-flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>SENDING ENQUIRY...</span>
                </>
              ) : (
                <span>SEND ENQUIRY</span>
              )}
            </button>
            <button
              type="button"
              onClick={handleWhatsApp}
              className="w-full sm:w-auto px-4 py-2.5 border border-borderGrey text-charcoal hover:border-charcoal uppercase tracking-wide inline-flex items-center justify-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-steel" />
              <span>WhatsApp Direct</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
