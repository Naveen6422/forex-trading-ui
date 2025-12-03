"use client";

import { useState } from "react";
import { Header, TabBar, CurrencyCard, BottomNavigation } from "@/components";

// Mock data for the currency pairs - matching the design exactly
const currencyPairs = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  pair: "EUR/GBP",
  time: "15:00:00",
  change: 30,
  changePercent: 23.2,
  bidPrice: "1478.256369",
  bidLow: "235698",
  askPrice: "1478.256369",
  askHigh: "25.3659",
  country1: "EU" as const,
  country2: "US" as const,
  // Alternate highlighting pattern based on design
  highlightBid: i !== 1 && i !== 5,
  highlightAsk: true,
}));

export default function Home() {
  const [activeTab, setActiveTab] = useState("forex");
  const [activeNav, setActiveNav] = useState("home");

  return (
    <main className="min-h-screen bg-[#0d0d0d] flex flex-col max-w-md mx-auto">
      {/* Header */}
      <Header />
      
      {/* Tab Navigation */}
      <TabBar activeTab={activeTab} onTabChange={setActiveTab} />
      
      {/* Currency Pairs List */}
      <section className="flex-1 overflow-y-auto pb-20 custom-scrollbar">
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
            highlightBid={currency.highlightBid}
            highlightAsk={currency.highlightAsk}
          />
        ))}
      </section>
      
      {/* Bottom Navigation */}
      <BottomNavigation activeNav={activeNav} onNavChange={setActiveNav} />
    </main>
  );
}
