"use client";

import FlagIcon from "./FlagIcon";

interface CurrencyCardProps {
  pair: string;
  time: string;
  change: number;
  changePercent: number;
  bidPrice: string;
  bidLow: string;
  askPrice: string;
  askHigh: string;
  country1: "EU" | "US" | "GB" | "BE";
  country2: "EU" | "US" | "GB" | "BE";
  bidColor?: "green" | "red";
  askColor?: "green" | "red";
}

// Helper to highlight price - first 3 chars white, rest in specified color
function PriceDisplay({ 
  price, 
  color = "green",
}: { 
  price: string; 
  color?: "green" | "red" | "white";
}) {
  // Format: "147" in white, "8.256369" in highlight color
  const whiteChars = 3;
  const whitePart = price.slice(0, whiteChars);
  const coloredPart = price.slice(whiteChars);
  
  const colorClass = color === "green" 
    ? "text-[#22c55e]" 
    : color === "red" 
    ? "text-[#ef4444]" 
    : "text-white";
  
  return (
    <span className="text-[15px] font-semibold tracking-tight whitespace-nowrap">
      <span className="text-white">{whitePart}</span>
      <span className={colorClass}>{coloredPart}</span>
    </span>
  );
}

export default function CurrencyCard({
  pair,
  time,
  change,
  changePercent,
  bidPrice,
  bidLow,
  askPrice,
  askHigh,
  country1,
  country2,
  bidColor = "green",
  askColor = "green",
}: CurrencyCardProps) {
  const isPositive = change >= 0;
  
  return (
    <article className="w-full flex items-center  justify-between px-4 pt-4 pb-6 border-b border-[#1a1a1a] hover:bg-white/[0.02] transition-colors cursor-pointer" style={{ padding: "10px 10px 5px 19px" }}>
      {/* Left side - Flags and pair info */}
      <div className="flex items-center gap-3">
        <FlagIcon country1={country1} country2={country2} />
        
        <div className="flex flex-col gap-1">
          <span className="text-[11px] text-[#6b7280] leading-none pt-1">{time}</span>
          <span className="text-[15px] font-semibold text-white leading-tight">{pair}</span>
          <span className="text-[12px] font-medium leading-none pb-2">
            <span className={isPositive ? "text-[#22c55e]" : "text-[#ef4444]"}>
              {isPositive ? "+" : ""}{change}
            </span>
            <span className="text-[11px] text-[#6b7280] leading-none pt-1"> ({isPositive ? "+" : ""}{changePercent}%)</span>
          </span>
        </div>
      </div>
      
      {/* Right side - Prices */}
      <div className="flex gap-5">
        {/* Bid price column */}
        <div className="flex flex-col items-start gap-0.5">
          <PriceDisplay 
            price={bidPrice} 
            color={bidColor} 
          />
          <span className="text-[11px] text-[#6b7280] leading-none whitespace-nowrap pb-2">L:{bidLow}</span>
        </div>
        
        {/* Ask price column */}
        <div className="flex flex-col items-start gap-0.5">
          <PriceDisplay 
            price={askPrice} 
            color={askColor} 
          />
          <span className="text-[11px] text-[#6b7280] leading-none whitespace-nowrap pb-2">H:{askHigh}</span>
        </div>
      </div>
    </article>
  );
}

