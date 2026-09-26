"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Maximize2, ZoomIn, ZoomOut, RotateCcw, X, ExternalLink, Download, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";

export const MaterialSchedule: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const categories = [
    {
      id: 1,
      code: "HSS",
      title: "HIGH SPEED STEEL",
      grades: ["M2", "M35", "M42", "T1", "T4", "T5", "T42", "M2 Sheets"],
      forms: "Rounds, Flats, Sheets, Squares",
      description: "Superior red hardness, wear resistance and cutting efficiency for broaches, taps, hobs, reamers, drills and tooling.",
    },
    {
      id: 2,
      code: "T&D",
      title: "TOOL & DIE STEEL",
      grades: ["D2 (1.2379)", "D3", "H11", "H13", "H21", "P20 (1.2311)", "1.2738", "1.2316", "DB6 (1.2714)", "PHX SUPRA"],
      forms: "Rounds, Flats, Heavy Forged Blocks, Plates",
      description: "Cold work, hot work and plastic mould steels with high compressive strength, toughness and polishability.",
    },
    {
      id: 3,
      code: "SS",
      title: "STAINLESS STEEL",
      grades: ["SS 202", "SS 303", "SS 304 / 304L", "SS 310", "SS 316 / 316L", "SS 410", "SS 420", "SS 430", "SS 440C", "17-4 PH"],
      forms: "Rounds, Hex, Square, Flats, Sheets, Plates",
      description: "Austenitic, martensitic, ferritic and precipitation hardening grades for chemical, food processing, medical and marine use.",
    },
    {
      id: 4,
      code: "EN",
      title: "EN SERIES & ALLOY STEEL",
      grades: ["EN 8 (080M40)", "EN 9", "EN 16", "EN 19 (709M40)", "EN 24 (817M40)", "EN 31 (100Cr6)", "EN 36", "EN 41B", "EN 42", "SAE 4140", "C45"],
      forms: "Rounds, Flats, Forged Circles, Shafts",
      description: "High-tensile through-hardening and case-hardening steels for automotive gears, crankshafts, shafts, rollers and pins.",
    },
    {
      id: 5,
      code: "AL",
      title: "ALUMINIUM & SPECIAL ALLOYS",
      grades: ["HE 9", "HE 30", "2014", "6061 T6", "6063", "6082 T6", "7075 Aerospace Grade"],
      forms: "Solid Rounds, Thick Plates, Precision Extrusions",
      description: "Lightweight, corrosion-resistant aircraft and structural alloys with high strength-to-weight ratio and CNC machinability.",
    },
  ];

  const handleOpenModal = () => {
    setZoomLevel(1);
    setModalOpen(true);
  };

  return (
    <section id="materials" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-borderGrey bg-warmWhite">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="border-b border-borderGrey pb-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              <span className="text-xs font-semibold text-steel uppercase tracking-widest">
                OFFICIAL PRODUCT SCHEDULE · READY STOCK
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-charcoal font-sans">
              MATERIAL GRADES & PRODUCT MATRIX
            </h2>
            <p className="text-sm text-steel mt-1.5 font-sans max-w-3xl leading-relaxed">
              Official stock schedule from Oswal Steel Industries, covering all ready stock categories, alloy compositions, dimensional forms and precision sawing facilities.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="/images/allinfo.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-borderGrey hover:border-charcoal text-charcoal text-xs uppercase font-medium tracking-wide transition-colors inline-flex items-center gap-1.5 bg-white"
            >
              <span>View Full Card</span>
              <ExternalLink className="w-3.5 h-3.5 text-steel" />
            </a>
            <a
              href="#contact"
              className="px-4 py-2 bg-charcoal hover:bg-graphite text-warmWhite text-xs uppercase font-medium tracking-wide transition-colors inline-flex items-center gap-1.5"
            >
              <span>Enquire Any Grade</span>
              <ArrowRight className="w-3.5 h-3.5 text-steelLight" />
            </a>
          </div>
        </div>

        {/* FEATURED SHOWCASE OF allinfo.jpg */}
        <div className="bg-softGrey/40 border border-borderGrey p-4 sm:p-6 lg:p-8 space-y-6">
          
          {/* Card Frame Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-borderGrey text-xs font-sans">
            <div className="flex items-center gap-3">
              <span className="font-bold text-charcoal tracking-wide uppercase">
                OSWAL STEEL INDUSTRIES — STOCK SCHEDULE
              </span>
              <span className="hidden sm:inline-block text-steelLight">|</span>
              <span className="text-steel hidden sm:inline-block">
                Authentic Inventory Catalog Matrix
              </span>
            </div>
            <div className="flex items-center gap-2 text-steel">
              <span className="text-[11px] bg-white border border-borderGrey px-2.5 py-1 font-medium text-charcoal">
                100% READY STOCK
              </span>
              <span className="text-[11px] bg-white border border-borderGrey px-2.5 py-1 font-medium text-charcoal">
                PRECISION BANDSAW CUTTING
              </span>
            </div>
          </div>

          {/* Precision Architectural Frame for allinfo.jpg */}
          <div className="relative border-2 border-charcoal/20 bg-white shadow-lg overflow-hidden group">
            
            {/* Clickable Image Container */}
            <div
              onClick={handleOpenModal}
              className="cursor-pointer relative w-full aspect-[16/9.2] sm:aspect-[16/9.1] bg-white flex items-center justify-center p-2 sm:p-4 overflow-hidden"
              title="Click to enlarge full schedule and examine all grades"
            >
              <Image
                src="/images/allinfo.jpg"
                alt="Oswal Steel Industries Official Product Matrix Card - HSS, Tool and Die Steel, Stainless Steel, EN Series, Aluminium"
                fill
                priority
                unoptimized
                className="object-contain transition-transform duration-300 group-hover:scale-[1.015]"
                sizes="(max-width: 1280px) 100vw, 1200px"
              />

              {/* Hover Overlay Hint */}
              <div className="absolute inset-0 bg-charcoal/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                <div className="bg-charcoal text-warmWhite px-5 py-2.5 text-xs font-semibold uppercase tracking-wider shadow-xl flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <Maximize2 className="w-4 h-4 text-oxide" />
                  <span>Click to Enlarge Full Resolution Schedule</span>
                </div>
              </div>
            </div>

            {/* Bottom Bar inside the Frame */}
            <div className="border-t border-borderGrey bg-warmWhite px-4 py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2 text-steel">
                <ShieldCheck className="w-4 h-4 text-oxide" />
                <span className="font-medium text-charcoal">
                  Direct Stockist & Importer:
                </span>
                <span>High Speed Steels · Tool & Die · Stainless · EN Series · Aluminium</span>
              </div>
              <button
                onClick={handleOpenModal}
                className="text-xs font-semibold text-charcoal hover:text-oxide inline-flex items-center gap-1 uppercase tracking-wide shrink-0 transition-colors"
              >
                <span>Interactive Lightbox</span>
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 5 Ready Stock Category Cards derived from allinfo.jpg */}
          <div className="pt-4">
            <div className="text-xs font-bold uppercase tracking-wider text-charcoal mb-4 flex items-center justify-between">
              <span>EXPLORE CATEGORIES FROM THE SCHEDULE</span>
              <span className="text-[11px] font-normal text-steel">
                Select any category to view grades and request instant pricing
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories.map((cat, idx) => (
                <div
                  key={cat.id}
                  className={`p-4 border transition-all duration-200 bg-white ${
                    activeCategory === cat.id
                      ? "border-charcoal ring-1 ring-charcoal shadow-md"
                      : "border-borderGrey hover:border-charcoal/60"
                  }`}
                  onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-[11px] font-mono text-steel uppercase">
                      0{idx + 1} // {cat.code}
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-softGrey text-charcoal">
                      READY STOCK
                    </span>
                  </div>

                  <h3 className="text-sm font-bold uppercase tracking-tight text-charcoal mt-1.5 font-sans">
                    {cat.title}
                  </h3>

                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {cat.grades.map((grade) => (
                      <span
                        key={grade}
                        className="text-[11px] px-2 py-0.5 bg-warmWhite border border-borderGrey text-charcoal font-medium"
                      >
                        {grade}
                      </span>
                    ))}
                  </div>

                  <div className="mt-3 pt-3 border-t border-borderSubtle text-xs text-steel">
                    <span className="font-semibold text-charcoal">Forms: </span>
                    {cat.forms}
                  </div>

                  <div className="mt-3 pt-2 flex items-center justify-between">
                    <a
                      href={`#contact`}
                      className="text-xs font-semibold text-charcoal hover:text-oxide uppercase tracking-wide inline-flex items-center gap-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        const el = document.getElementById("contact");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      <span>Get Quote</span>
                      <ArrowRight className="w-3 h-3 text-steel" />
                    </a>

                    <a
                      href={`https://wa.me/919920049724?text=${encodeURIComponent(
                        `Hello Oswal Steel Industries, I am inquiring about ready stock and rates for ${cat.title} (${cat.grades.slice(0, 4).join(", ")}).`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-steel hover:text-charcoal underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              ))}

              {/* Cutting & Warehouse Capabilities Card */}
              <div className="p-4 border border-borderGrey bg-softGrey/70 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-[11px] font-mono text-steel uppercase">
                      06 // SERVICES
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-charcoal text-warmWhite">
                      IN-HOUSE
                    </span>
                  </div>

                  <h3 className="text-sm font-bold uppercase tracking-tight text-charcoal mt-1.5 font-sans">
                    PRECISION BANDSAW CUTTING
                  </h3>

                  <p className="text-xs text-steel mt-2 leading-relaxed font-sans">
                    In-house horizontal bandsaw sawing up to 800mm diameter. We cut round bars, flats, blocks and plates to exact customer specifications with tight tolerances.
                  </p>

                  <div className="mt-3 space-y-1 text-xs text-steel">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-oxide shrink-0" />
                      <span>Zero heat-affected zone (HAZ) cold cutting</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-oxide shrink-0" />
                      <span>Custom cut pieces delivered across India</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-borderGrey">
                  <a
                    href="#contact"
                    className="w-full py-2 bg-charcoal hover:bg-graphite text-warmWhite text-xs font-semibold uppercase tracking-wider text-center block transition-colors"
                  >
                    SUBMIT CUTTING SPECIFICATIONS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ULTRA-HD INTERACTIVE LIGHTBOX MODAL */}
      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex flex-col justify-between p-3 sm:p-6"
          onClick={() => setModalOpen(false)}
        >
          {/* Modal Header Bar */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-6xl mx-auto bg-charcoal text-warmWhite px-4 py-3 flex items-center justify-between border border-borderSubtle text-xs"
          >
            <div className="flex items-center gap-3">
              <span className="font-bold uppercase tracking-wider">
                OSWAL STEEL INDUSTRIES · PRODUCT RANGE & STOCK SCHEDULE
              </span>
              <span className="hidden md:inline-block text-steelLight">|</span>
              <span className="text-steelLight hidden md:inline-block">
                Zoom: {Math.round(zoomLevel * 100)}%
              </span>
            </div>

            {/* Modal Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setZoomLevel((z) => Math.min(z + 0.25, 2.5))}
                className="p-1.5 bg-graphite hover:bg-neutral-700 text-warmWhite rounded transition-colors"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={() => setZoomLevel((z) => Math.max(z - 0.25, 0.75))}
                className="p-1.5 bg-graphite hover:bg-neutral-700 text-warmWhite rounded transition-colors"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                onClick={() => setZoomLevel(1)}
                className="p-1.5 bg-graphite hover:bg-neutral-700 text-warmWhite rounded transition-colors"
                title="Reset Zoom"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <a
                href="/images/allinfo.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 bg-graphite hover:bg-neutral-700 text-warmWhite rounded transition-colors"
                title="Open original file in new tab"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
              <button
                onClick={() => setModalOpen(false)}
                className="p-1.5 bg-oxide hover:bg-red-700 text-white rounded transition-colors ml-2"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Modal Image Body with Zoom & Scroll */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-6xl mx-auto flex-1 my-3 bg-white border border-borderSubtle overflow-auto flex items-center justify-center p-2 sm:p-6"
          >
            <div
              style={{
                transform: `scale(${zoomLevel})`,
                transformOrigin: "center center",
                transition: "transform 0.15s ease-out",
                width: "100%",
                maxWidth: "1366px",
              }}
              className="relative aspect-[16/9.2] w-full"
            >
              <Image
                src="/images/allinfo.jpg"
                alt="Oswal Steel Industries Official Product Range Matrix Full View"
                fill
                unoptimized
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
          </div>

          {/* Modal Footer Bar */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-6xl mx-auto bg-warmWhite border border-borderGrey px-4 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          >
            <div className="text-steel font-sans text-center sm:text-left">
              <span className="font-semibold text-charcoal">Need urgent dispatch?</span> Call Ashish Shah:{" "}
              <a href="tel:+919920049724" className="font-bold text-charcoal hover:text-oxide underline">
                +91 9920049724
              </a>{" "}
              or email{" "}
              <a href="mailto:oswalsteel1974@gmail.com" className="font-semibold text-charcoal hover:text-oxide underline">
                oswalsteel1974@gmail.com
              </a>
            </div>

            <a
              href="#contact"
              onClick={() => setModalOpen(false)}
              className="px-4 py-1.5 bg-charcoal hover:bg-graphite text-warmWhite text-xs font-semibold uppercase tracking-wider transition-colors shrink-0"
            >
              Request Quote For Selected Grade
            </a>
          </div>
        </div>
      )}
    </section>
  );
};
