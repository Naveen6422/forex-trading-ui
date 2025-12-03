"use client";

interface FlagIconProps {
  country1: "EU" | "US" | "GB";
  country2: "EU" | "US" | "GB";
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
};

export default function FlagIcon({ country1, country2 }: FlagIconProps) {
  const Flag1 = flagComponents[country1];
  const Flag2 = flagComponents[country2];
  const uniqueId = `flag-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className="relative w-12 h-8 flex-shrink-0">
      {/* Back flag (second country) - slightly to the right */}
      <div className="absolute right-0 top-0 w-8 h-8 rounded-full overflow-hidden border-2 border-[#0d0d0d]">
        <Flag2 id={`${uniqueId}-2`} />
      </div>
      {/* Front flag (first country) - overlapping */}
      <div className="absolute left-0 top-0 w-8 h-8 rounded-full overflow-hidden border-2 border-[#0d0d0d] z-10">
        <Flag1 id={`${uniqueId}-1`} />
      </div>
    </div>
  );
}

