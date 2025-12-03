"use client";

import { Menu, SlidersHorizontal } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-4 bg-[#0d0d0d]">
      <button 
        className="p-2 hover:bg-white/5 rounded-lg transition-colors"
        aria-label="Menu"
      >
        <Menu className="w-6 h-6 text-white" strokeWidth={2} />
      </button>
      
      <button 
        className="p-2 hover:bg-white/5 rounded-lg transition-colors"
        aria-label="Filter"
      >
        <SlidersHorizontal className="w-6 h-6 text-white" strokeWidth={2} />
      </button>
    </header>
  );
}

