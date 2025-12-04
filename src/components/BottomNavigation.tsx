"use client";

import { Home, User } from "lucide-react";

// Candlestick chart icon for Trade
const CandlestickIcon = ({ className, strokeWidth }: { className?: string; strokeWidth?: number }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth || 1.5} strokeLinecap="round" strokeLinejoin="round">
  <line x1="6" y1="9" x2="6" y2="15"/>
  <line x1="10" y1="5" x2="10" y2="19"/>
  <line x1="14" y1="11" x2="14" y2="17"/>
  <path d="M18 15V7"/>
  <polyline points="16,9 18,7 20,9"/>
</svg>


);

// History icon - clock
const HistoryIcon = ({ className, strokeWidth }: { className?: string; strokeWidth?: number }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth || 1.5} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
  
);

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "trade", label: "Trade", icon: CandlestickIcon },
  { id: "history", label: "History", icon: HistoryIcon },
  { id: "profile", label: "Profile", icon: User },
];

interface BottomNavigationProps {
  activeNav: string;
  onNavChange: (navId: string) => void;
}

export default function BottomNavigation({ activeNav, onNavChange }: BottomNavigationProps) {
  return (
    <nav className="fixed  bottom-0 left-0 right-0 bg-[#0d0d0d] border-t border-[#1a1a1a] z-50" style={{paddingTop: "10px"}}> 
      <div className="flex items-center justify-around py-2 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeNav === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onNavChange(item.id)}
              className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-colors ${
                isActive 
                  ? "text-[#B6FF30]" 
                  : "text-[#6b7280] hover:text-white"
              }`}
            >
              <Icon className="w-5 h-5" strokeWidth={isActive ? 2 : 1.5} />
              <span className="text-[11px] font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
      {/* Safe area padding for mobile devices with notch */}
      <div className="h-[env(safe-area-inset-bottom)] bg-[#0d0d0d]" />
    </nav>
  );
}

