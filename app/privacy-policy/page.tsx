import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Oswal Steel Industries",
  description:
    "Privacy Policy for Oswal Steel Industries. Learn how we handle and protect information provided through our website and enquiry channels.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-warmWhite text-charcoal min-h-screen py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <article className="max-w-4xl mx-auto space-y-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-steel hover:text-charcoal uppercase tracking-wider font-medium"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Landing Page</span>
        </Link>

        <div className="border-b border-borderGrey pb-4">
          <h1 className="text-3xl font-bold uppercase tracking-tight text-charcoal font-sans">
            PRIVACY POLICY
          </h1>
          <p className="text-xs text-steel mt-1 font-sans">
            Oswal Steel Industries · Effective 2026
          </p>
        </div>

        <div className="space-y-6 text-sm text-steel leading-relaxed font-sans">
          <p className="text-base text-charcoal font-medium">
            At Oswal Steel, we respect your privacy and are committed to protecting the information you provide to us.
          </p>

          <section className="space-y-2">
            <h2 className="text-base font-bold uppercase text-charcoal font-sans border-b border-borderGrey pb-1">
              Information We Collect
            </h2>
            <p>
              When you contact us through our website, enquiry form, phone, or email, we may collect information such as:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-charcoal">
              <li>Your name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Company name</li>
              <li>Information provided in your enquiry</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold uppercase text-charcoal font-sans border-b border-borderGrey pb-1">
              How We Use Your Information
            </h2>
            <p>We may use the information you provide to:</p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-charcoal">
              <li>Respond to your enquiries</li>
              <li>Provide information about our products and services</li>
              <li>Contact you regarding your requirements</li>
              <li>Improve our website and services</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold uppercase text-charcoal font-sans border-b border-borderGrey pb-1">
              Information Protection
            </h2>
            <p>
              We take reasonable steps to protect your personal information and do not knowingly sell or share your personal information with third parties for marketing purposes.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold uppercase text-charcoal font-sans border-b border-borderGrey pb-1">
              Cookies
            </h2>
            <p>
              Our website may use cookies or similar technologies to improve website functionality and understand how visitors use our website.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold uppercase text-charcoal font-sans border-b border-borderGrey pb-1">
              Third-Party Services
            </h2>
            <p>
              Our website may use third-party services such as analytics, advertising, or website tools. These services may collect information according to their own privacy policies.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold uppercase text-charcoal font-sans border-b border-borderGrey pb-1">
              Your Privacy
            </h2>
            <p>
              You may contact us at any time if you have questions regarding the personal information you have provided or if you wish to request its correction or deletion, where applicable.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold uppercase text-charcoal font-sans border-b border-borderGrey pb-1">
              Contact Us
            </h2>
            <p>
              For questions regarding this Privacy Policy, contact Oswal Steel through the contact details provided on the website:
            </p>
            <div className="bg-softGrey/40 p-4 border border-borderGrey text-xs space-y-1 text-charcoal mt-2">
              <div><strong>Oswal Steel Industries</strong></div>
              <div>Attn: Ashish Shah</div>
              <div>Address: 9/14, Kumbharwada 5th Lane, Maruti Mandir Marg, Mumbai – 400004</div>
              <div>Phone: +91 9920049724</div>
              <div>Email: oswalsteel1974@gmail.com</div>
            </div>
          </section>

          <div className="pt-4 border-t border-borderGrey text-xs font-semibold text-charcoal">
            By using our website, you agree to this Privacy Policy.
          </div>
        </div>
      </article>
    </div>
  );
}
