import React from "react";
import Link from "next/link";
import { OswalLogo } from "./OswalLogo";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-warmWhite border-t border-graphite py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
          <div className="space-y-3">
            <OswalLogo variant="dark" size="md" />
            <p className="text-xs text-steelLight max-w-sm pt-1">
              Specialty steels. Ready stock. Precision cutting. Importer, stockist and supplier based in Mumbai since 1974.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 text-xs text-steelLight">
            <div className="space-y-2">
              <div className="text-warmWhite font-semibold uppercase tracking-wider text-[11px]">
                Navigation
              </div>
              <ul className="space-y-1.5">
                <li>
                  <Link href="/" className="hover:text-warmWhite">Home</Link>
                </li>
                <li>
                  <Link href="/#about" className="hover:text-warmWhite">About</Link>
                </li>
                <li>
                  <Link href="/#contact" className="hover:text-warmWhite">Contact</Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-warmWhite">Privacy Policy</Link>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="text-warmWhite font-semibold uppercase tracking-wider text-[11px]">
                Direct Contact
              </div>
              <ul className="space-y-1.5 text-steelLight">
                <li>
                  <a href="tel:+919920049724" className="hover:text-warmWhite">
                    +91 9920049724
                  </a>
                </li>
                <li>
                  <a href="mailto:oswalsteel1974@gmail.com" className="hover:text-warmWhite">
                    oswalsteel1974@gmail.com
                  </a>
                </li>
                <li>Mumbai, Maharashtra</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-graphite pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-steel">
          <div>
            © 2026 Oswal Steel Industries. All rights reserved.
          </div>
          <div>
            <Link href="/privacy-policy" className="hover:text-warmWhite transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
