"use client";

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
    <nav className="w-full bg-[#0d0d0d] border-b border-[#1a1a1a]"  style={{paddingBottom: "10px"}}>
      <div className="flex items-center justify-around py-4 px-4 overflow-x-auto hide-scrollbar">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`relative text-[15px] font-medium whitespace-nowrap transition-all duration-200 pb-1 flex-1 ${
                isActive 
                  ? "text-white" 
                  : "text-[#6b7280] hover:text-white/70"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

