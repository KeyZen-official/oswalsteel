import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Phone, Mail, MessageSquare } from "lucide-react";
import { EnquiryForm } from "@/components/EnquiryForm";
import { MaterialSchedule } from "@/components/MaterialSchedule";

export default function LandingPage() {
  return (
    <div className="space-y-0 text-charcoal">
      {/* 1. HERO SECTION */}
      <section id="hero" className="border-b border-borderGrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8 lg:pt-14 lg:pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-semibold text-steel uppercase tracking-widest block">
                OSWAL STEEL INDUSTRIES · ESTABLISHED 1974 · MUMBAI
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal uppercase leading-[1.1] font-sans">
                SPECIALTY STEELS
                <br />
                FOR DEMANDING
                <br />
                INDUSTRIES.
              </h1>
            </div>
            <div className="lg:col-span-4 space-y-4">
              <p className="text-sm text-steel leading-relaxed font-sans">
                Oswal Steel Industries is a Mumbai-based importer, stockist and supplier of specialty steels for manufacturing, tooling and engineering applications.
              </p>
              <div className="flex items-center gap-3 pt-1">
                <a
                  href="#contact"
                  className="px-5 py-2.5 bg-charcoal text-warmWhite text-xs font-medium uppercase tracking-wide hover:bg-graphite transition-colors inline-flex items-center gap-1.5"
                >
                  <span>REQUEST A QUOTE</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-steelLight" />
                </a>
                <a
                  href="#contact"
                  className="px-4 py-2.5 border border-borderGrey text-charcoal text-xs font-medium uppercase tracking-wide hover:border-charcoal transition-colors"
                >
                  CONTACT US
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Large Editorial Industrial Photograph */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="relative w-full h-[380px] sm:h-[480px] lg:h-[540px] border border-borderGrey overflow-hidden bg-softGrey">
            <Image
              src="/images/stockyard-hero.jpg"
              alt="Oswal Steel Industries Stockyard"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
        </div>
      </section>

      {/* 2. ABOUT US SECTION */}
      <section id="about" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-borderGrey">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-semibold text-steel uppercase tracking-widest block">
                ABOUT OSWAL STEEL
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-charcoal leading-tight font-sans">
                BUILT ON EXPERIENCE.
                <br />
                BACKED BY STOCK.
              </h2>
              <div className="w-12 h-[2px] bg-oxide"></div>
              <p className="text-base text-charcoal leading-relaxed font-sans pt-1">
                Established in 1974, Oswal Steel Industries is a Mumbai-based importer, stockist and supplier of high-quality industrial steels.
              </p>
              <p className="text-sm text-steel leading-relaxed font-sans">
                With over five decades of industry experience, we specialize in supplying specialty steels for demanding manufacturing and engineering requirements.
              </p>
              <p className="text-sm text-steel leading-relaxed font-sans">
                We maintain ready stock at our Mumbai godown and Kalamboli warehouse, with precision cutting facilities to help meet specific size requirements.
              </p>
            </div>

            {/* Right Supporting Industrial Photo */}
            <div className="lg:col-span-6">
              <div className="relative h-72 sm:h-96 border border-borderGrey overflow-hidden bg-softGrey">
                <Image
                  src="/images/steel-round-bars.jpg"
                  alt="Specialty Steel Rounds Inventory"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* Simple Factual Information Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 mt-12 border-t border-borderGrey">
            <div className="space-y-1">
              <div className="text-lg sm:text-xl font-bold uppercase text-charcoal font-sans">
                50+
              </div>
              <div className="text-xs font-semibold text-steel uppercase tracking-wide">
                YEARS OF EXPERIENCE
              </div>
              <p className="text-xs text-steel pt-1 leading-relaxed">
                Supplying specialty steels to Indian industry since 1974.
              </p>
            </div>

            <div className="space-y-1">
              <div className="text-lg sm:text-xl font-bold uppercase text-charcoal font-sans">
                MUMBAI
              </div>
              <div className="text-xs font-semibold text-steel uppercase tracking-wide">
                BASED
              </div>
              <p className="text-xs text-steel pt-1 leading-relaxed">
                Commercial office and godown centrally located in Kumbharwada.
              </p>
            </div>

            <div className="space-y-1">
              <div className="text-lg sm:text-xl font-bold uppercase text-charcoal font-sans">
                READY
              </div>
              <div className="text-xs font-semibold text-steel uppercase tracking-wide">
                STOCK
              </div>
              <p className="text-xs text-steel pt-1 leading-relaxed">
                Extensive inventory maintained in Mumbai and Kalamboli.
              </p>
            </div>

            <div className="space-y-1">
              <div className="text-lg sm:text-xl font-bold uppercase text-charcoal font-sans">
                PRECISION
              </div>
              <div className="text-xs font-semibold text-steel uppercase tracking-wide">
                CUTTING
              </div>
              <p className="text-xs text-steel pt-1 leading-relaxed">
                In-house horizontal bandsaw sawing to required dimensions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MATERIAL SCHEDULE SECTION (SHOWCASING allinfo.jpg) */}
      <MaterialSchedule />

      {/* 4. CONTACT US SECTION */}
      <section id="contact" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="border-b border-borderGrey pb-4 mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-charcoal font-sans">
              TELL US WHAT YOU NEED.
            </h2>
            <p className="text-xs text-steel mt-1 font-sans">
              Have a specific grade, size or quantity requirement? Get in touch with our team.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Contact Card */}
            <div className="lg:col-span-5 border border-borderGrey bg-warmWhite p-6 sm:p-8 space-y-6">
              <div>
                <div className="text-[11px] font-semibold text-steel uppercase tracking-wider">
                  COMMERCIAL CONTACT
                </div>
                <h3 className="text-2xl font-bold uppercase text-charcoal font-sans mt-0.5">
                  ASHISH SHAH
                </h3>
                <div className="text-xs text-steel font-medium">
                  OSWAL STEEL INDUSTRIES
                </div>
              </div>

              {/* Direct Buttons */}
              <div className="grid grid-cols-3 gap-2 pt-1">
                <a
                  href="tel:+919920049724"
                  className="py-2.5 px-2 bg-charcoal text-warmWhite text-center text-xs uppercase font-medium hover:bg-graphite transition-colors flex flex-col items-center justify-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5 text-steelLight" />
                  <span>Call Now</span>
                </a>

                <a
                  href="https://wa.me/919920049724?text=Hello%20Oswal%20Steel%20Industries%2C%20I%20would%20like%20to%20enquire%20about%20your%20specialty%20steel%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-2 border border-borderGrey text-charcoal text-center text-xs uppercase font-medium hover:border-charcoal transition-colors flex flex-col items-center justify-center gap-1"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-steel" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href="mailto:oswalsteel1974@gmail.com"
                  className="py-2.5 px-2 border border-borderGrey text-charcoal text-center text-xs uppercase font-medium hover:border-charcoal transition-colors flex flex-col items-center justify-center gap-1"
                >
                  <Mail className="w-3.5 h-3.5 text-steel" />
                  <span>Email Us</span>
                </a>
              </div>

              <div className="space-y-4 pt-4 border-t border-borderGrey text-xs font-sans">
                <div>
                  <span className="text-steel uppercase text-[11px] block">Mobile:</span>
                  <a
                    href="tel:+919920049724"
                    className="text-base font-semibold text-charcoal hover:text-oxide"
                  >
                    +91 9920049724
                  </a>
                </div>

                <div>
                  <span className="text-steel uppercase text-[11px] block">Email:</span>
                  <a
                    href="mailto:oswalsteel1974@gmail.com"
                    className="text-sm font-semibold text-charcoal hover:text-oxide break-all"
                  >
                    oswalsteel1974@gmail.com
                  </a>
                </div>

                <div>
                  <span className="text-steel uppercase text-[11px] block">Address:</span>
                  <address className="not-italic text-steel leading-relaxed mt-0.5">
                    9/14, Kumbharwada 5th Lane,
                    <br />
                    Maruti Mandir Marg,
                    <br />
                    Mumbai – 400004, Maharashtra, India
                  </address>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-7">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
