import React from "react";
import Link from "next/link";

interface OswalLogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

export const OswalLogo: React.FC<OswalLogoProps> = ({
  variant = "light",
  size = "md",
}) => {
  const isDark = variant === "dark";
  const primaryText = isDark ? "text-warmWhite" : "text-charcoal";
  const subText = isDark ? "text-steelLight" : "text-steel";
  const accentFill = isDark ? "#A4664B" : "#8A5138";
  const ringStroke = isDark ? "#4A4D50" : "#222222";

  const markSize = size === "sm" ? 28 : size === "lg" ? 42 : 34;

  return (
    <Link href="/" className="inline-flex items-center gap-3 group focus:outline-none">
      <svg
        width={markSize}
        height={markSize}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden="true"
      >
        <path
          d="M45 5h10v8.5a35.8 35.8 0 017.5 3.1l6-6 7.1 7.1-6 6a35.8 35.8 0 013.1 7.5H81.2v10h-8.5a35.8 35.8 0 01-3.1 7.5l6 6-7.1 7.1-6-6a35.8 35.8 0 01-7.5 3.1v8.5H45v-8.5a35.8 35.8 0 01-7.5-3.1l-6 6-7.1-7.1 6-6a35.8 35.8 0 01-3.1-7.5H18.8v-10h8.5a35.8 35.8 0 013.1-7.5l-6-6 7.1-7.1 6 6a35.8 35.8 0 017.5-3.1V5z"
          fill={accentFill}
        />
        <circle cx="50" cy="50" r="28" fill={isDark ? "#171717" : "#F7F6F2"} stroke={ringStroke} strokeWidth="3" />
        <circle cx="43" cy="42" r="5" fill={ringStroke} />
        <circle cx="57" cy="42" r="5" fill={ringStroke} />
        <circle cx="50" cy="58" r="6" fill={ringStroke} />
        <path
          d="M38 52 C38 46, 62 46, 62 52 C62 58, 38 60, 42 66"
          stroke={accentFill}
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </svg>

      <div className="flex flex-col leading-none">
        <div className="flex items-baseline gap-1.5">
          <span className={`font-sans font-bold text-base md:text-lg tracking-tight ${primaryText}`}>
            OSWAL STEEL
          </span>
          <span className="text-[10px] tracking-wider uppercase font-semibold text-oxide">
            INDUSTRIES
          </span>
        </div>
        <div className="flex items-center gap-1.5 mt-1">
          <span className={`text-[10px] tracking-widest font-normal uppercase ${subText}`}>
            ESTABLISHED 1974 · MUMBAI
          </span>
        </div>
      </div>
    </Link>
  );
};
