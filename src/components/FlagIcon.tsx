"use client";

import { useId } from "react";

interface FlagIconProps {
  country1: "EU" | "US" | "GB" | "BE";
  country2: "EU" | "US" | "GB" | "BE";
}

// EU Flag Component
function EUFlag({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <defs>
        <clipPath id={`${id}-euCircle`}>
          <circle cx="16" cy="16" r="16"/>
        </clipPath>
      </defs>
      <g clipPath={`url(#${id}-euCircle)`}>
        <rect width="32" height="32" fill="#003399"/>
        <g transform="translate(16, 16)">
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30 - 90) * (Math.PI / 180);
            const x = Math.cos(angle) * 9;
            const y = Math.sin(angle) * 9;
            return (
              <polygon
                key={i}
                points="0,-2 0.6,-0.6 2,-0.6 0.9,0.3 1.2,1.6 0,0.8 -1.2,1.6 -0.9,0.3 -2,-0.6 -0.6,-0.6"
                fill="#FFCC00"
                transform={`translate(${x}, ${y})`}
              />
            );
          })}
        </g>
      </g>
    </svg>
  );
}

// Belgium Flag Component - Black, Yellow, Red vertical stripes
function BEFlag({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <defs>
        <clipPath id={`${id}-beCircle`}>
          <circle cx="16" cy="16" r="16"/>
        </clipPath>
      </defs>
      <g clipPath={`url(#${id}-beCircle)`}>
        {/* Black stripe - left third */}
        <rect x="0" y="0" width="10.67" height="32" fill="#000000"/>
        {/* Yellow stripe - middle third */}
        <rect x="10.67" y="0" width="10.67" height="32" fill="#FFD700"/>
        {/* Red stripe - right third */}
        <rect x="21.33" y="0" width="10.67" height="32" fill="#ED2939"/>
      </g>
    </svg>
  );
}

// US Flag Component
function USFlag({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <defs>
        <clipPath id={`${id}-usCircle`}>
          <circle cx="16" cy="16" r="16"/>
        </clipPath>
      </defs>
      <g clipPath={`url(#${id}-usCircle)`}>
        {/* Red and white stripes */}
        {[...Array(13)].map((_, i) => (
          <rect
            key={i}
            x="0"
            y={i * 2.46}
            width="32"
            height="2.46"
            fill={i % 2 === 0 ? "#B22234" : "#FFFFFF"}
          />
        ))}
        {/* Blue canton */}
        <rect x="0" y="0" width="13" height="17" fill="#3C3B6E"/>
        {/* Stars (simplified) */}
        <g fill="white">
          {[0, 1, 2, 3, 4].map((row) =>
            [0, 1, 2, 3, 4, 5].map((col) => {
              if (row % 2 === 1 && col === 5) return null;
              const x = row % 2 === 0 ? 1.5 + col * 2 : 2.5 + col * 2;
              const y = 1.5 + row * 3;
              return (
                <circle
                  key={`${row}-${col}`}
                  cx={x}
                  cy={y}
                  r="0.6"
                />
              );
            })
          )}
        </g>
      </g>
    </svg>
  );
}

// GB Flag Component
function GBFlag({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <defs>
        <clipPath id={`${id}-gbCircle`}>
          <circle cx="16" cy="16" r="16"/>
        </clipPath>
      </defs>
      <g clipPath={`url(#${id}-gbCircle)`}>
        <rect width="32" height="32" fill="#012169"/>
        <path d="M0,0 L32,32 M32,0 L0,32" stroke="white" strokeWidth="5"/>
        <path d="M0,0 L32,32 M32,0 L0,32" stroke="#C8102E" strokeWidth="2.5"/>
        <path d="M16,0 V32 M0,16 H32" stroke="white" strokeWidth="8"/>
        <path d="M16,0 V32 M0,16 H32" stroke="#C8102E" strokeWidth="4"/>
      </g>
    </svg>
  );
}

const flagComponents = {
  EU: EUFlag,
  US: USFlag,
  GB: GBFlag,
  BE: BEFlag,
};

export default function FlagIcon({ country1, country2 }: FlagIconProps) {
  const Flag1 = flagComponents[country2];
  const Flag2 = flagComponents[country1];
  const reactId = useId();
  // Clean up React's useId() to make it safe for SVG IDs (remove colons)
  const uniqueId = `flag-${reactId.replace(/:/g, '')}-${country1}-${country2}`;
  
  return (
    <div className="relative w-12 h-10 flex-shrink-0">
      {/* Back flag */}
      <div className="absolute right-0 top-1 w-9 h-9 rounded-full overflow-hidden border-2 border-white z-10">
        <Flag1 id={`${uniqueId}-1`} />
      </div>
  
      {/* Front flag */}
      <div className="absolute left-0 -top-1 w-9 h-9 rounded-full overflow-hidden border-2 border-white z-0">
        <Flag2 id={`${uniqueId}-2`} />
      </div>
    </div>
  );
}
