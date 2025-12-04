"use client";

import { useState } from "react";
import { Header, TabBar, CurrencyCard, BottomNavigation } from "@/components";

// Mock data for the currency pairs - matching the design exactly
// Price color pattern from image:
// Rows 1-5, 7, 9, 11: bid=red, ask=green
// Rows 6, 8, 10: bid=green, ask=red
const currencyPairs = Array.from({ length: 12 }, (_, i) => {
  // Pattern: rows 1-5 (i 0-4), 7 (i 6), 9 (i 8), 11 (i 10) = bid red, ask green
  // Rows 6 (i 5), 8 (i 7), 10 (i 9) = bid green, ask red
  const isRedBid = i < 5 || i === 6 || i === 8 || i === 10;
  
  return {
    id: i + 1,
    pair: "EUR/GBP",
    time: "15:00:00",
    change: 30,
    changePercent: 23.2,
    bidPrice: "1478.256369",
    bidLow: "235698",
    askPrice: "1478.256369",
    askHigh: "25.3659",
    country1: "US" as const,
    country2: "BE" as const,
    bidColor: (isRedBid ? "red" : "green") as "red" | "green",
    askColor: (isRedBid ? "green" : "red") as "red" | "green",
  };
});

export default function Home() {
  const [activeTab, setActiveTab] = useState("forex");
  const [activeNav, setActiveNav] = useState("home");

  return (
    <div className="min-h-screen min-h-dvh bg-[#0d0d0d] w-full">
      <main className="flex flex-col min-h-screen min-h-dvh w-full">
        {/* Header */}
        <Header />
        
        {/* Tab Navigation */}
        <TabBar activeTab={activeTab} onTabChange={setActiveTab} />
        
        {/* Currency Pairs List - Single column, full width */}
        <section className="flex-1 overflow-y-auto pb-20 custom-scrollbar">
          <div className="flex flex-col">
            {currencyPairs.map((currency) => (
              <CurrencyCard
                key={currency.id}
                pair={currency.pair}
                time={currency.time}
                change={currency.change}
                changePercent={currency.changePercent}
                bidPrice={currency.bidPrice}
                bidLow={currency.bidLow}
                askPrice={currency.askPrice}
                askHigh={currency.askHigh}
                country1={currency.country1}
                country2={currency.country2}
                bidColor={currency.bidColor}
                askColor={currency.askColor}
              />
            ))}
          </div>
        </section>
        
        {/* Bottom Navigation */}
        <BottomNavigation activeNav={activeNav} onNavChange={setActiveNav} />
      </main>
    </div>
  );
}
