"use client";

import { useState } from "react";

const tabs = [
  { id: "favourites", label: "Favourites" },
  { id: "forex", label: "Forex" },
  { id: "crypto", label: "Crypto" },
  { id: "indices", label: "Indices" },
  { id: "derivatives", label: "Derivatives" },
];

interface TabBarProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export default function TabBar({ activeTab, onTabChange }: TabBarProps) {
  return (
    <nav className="px-4 bg-[#0d0d0d]">
      <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`text-[15px] font-medium whitespace-nowrap transition-colors pb-1 ${
              activeTab === tab.id
                ? "text-white"
                : "text-[#6b7280] hover:text-white/70"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

