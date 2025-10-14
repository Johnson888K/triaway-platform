import React from "react";

export default function Logo({
  size = 80,
  className = "",
}: { 
  size?: number; 
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="10"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-label="TriaWay emblem"
      width={size}
      height={size}
      className={className}
    >
      <circle cx="100" cy="100" r="90" />
      {/* Triangle: all three vertices touch the circle */}
      <path d="M100 10 L180.62 140 L19.38 140 Z" />
      {/* Center line: top to bottom circle, no gap */}
      <line x1="100" y1="10" x2="100" y2="190" />
    </svg>
  );
}
