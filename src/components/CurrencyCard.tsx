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
  country1: "EU" | "US" | "GB";
  country2: "EU" | "US" | "GB";
  highlightBid?: boolean;
  highlightAsk?: boolean;
}

// Helper to highlight price - first 3 chars white, rest in specified color
function PriceDisplay({ 
  price, 
  highlightColor = "green",
}: { 
  price: string; 
  highlightColor?: "green" | "red" | "white";
}) {
  // Format: "147" in white, "8.256369" in highlight color
  const whiteChars = 3;
  const whitePart = price.slice(0, whiteChars);
  const coloredPart = price.slice(whiteChars);
  
  const colorClass = highlightColor === "green" 
    ? "text-[#22c55e]" 
    : highlightColor === "red" 
    ? "text-[#ef4444]" 
    : "text-white";
  
  return (
    <span className="text-[15px] font-semibold tracking-tight">
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
  highlightBid = true,
  highlightAsk = true,
}: CurrencyCardProps) {
  const isPositive = change >= 0;
  
  return (
    <article className="flex items-center justify-between px-4 py-3.5 border-b border-[#1f1f1f] hover:bg-white/[0.02] transition-colors cursor-pointer active:bg-white/[0.05]">
      {/* Left side - Flags and pair info */}
      <div className="flex items-center gap-3">
        <FlagIcon country1={country1} country2={country2} />
        
        <div className="flex flex-col gap-0.5">
          <span className="text-[11px] text-[#6b7280] leading-none">{time}</span>
          <span className="text-[15px] font-semibold text-white leading-tight">{pair}</span>
          <span className={`text-[12px] font-medium leading-none ${isPositive ? "text-[#22c55e]" : "text-[#ef4444]"}`}>
            {isPositive ? "+" : ""}{change} ({isPositive ? "+" : ""}{changePercent}%)
          </span>
        </div>
      </div>
      
      {/* Right side - Prices */}
      <div className="flex gap-5">
        {/* Bid price column */}
        <div className="flex flex-col items-end gap-0.5">
          <PriceDisplay 
            price={bidPrice} 
            highlightColor={highlightBid ? "green" : "white"} 
          />
          <span className="text-[11px] text-[#6b7280] leading-none">L:{bidLow}</span>
        </div>
        
        {/* Ask price column */}
        <div className="flex flex-col items-end gap-0.5">
          <PriceDisplay 
            price={askPrice} 
            highlightColor={highlightAsk ? "green" : "white"} 
          />
          <span className="text-[11px] text-[#6b7280] leading-none">H:{askHigh}</span>
        </div>
      </div>
    </article>
  );
}

