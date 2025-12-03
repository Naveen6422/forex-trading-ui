"use client";

import { useState } from "react";
import { Home, ArrowUpDown, Clock, User } from "lucide-react";

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "trade", label: "Trade", icon: ArrowUpDown },
  { id: "history", label: "HIstory", icon: Clock },
  { id: "profile", label: "Profile", icon: User },
];

interface BottomNavigationProps {
  activeNav: string;
  onNavChange: (navId: string) => void;
}

export default function BottomNavigation({ activeNav, onNavChange }: BottomNavigationProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#0d0d0d] border-t border-[#1a1a1a] z-50">
      <div className="max-w-md mx-auto flex items-center justify-around py-2 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeNav === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onNavChange(item.id)}
              className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-colors ${
                isActive 
                  ? "text-white" 
                  : "text-[#6b7280] hover:text-white/70"
              }`}
            >
              <Icon className="w-5 h-5" strokeWidth={isActive ? 2 : 1.5} />
              <span className="text-[11px] font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
      {/* Safe area padding for mobile devices */}
      <div className="h-safe-area-inset-bottom bg-[#0d0d0d]" />
    </nav>
  );
}

