"use client";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between bg-[#0d0d0d]" style={{ padding: "16px 10px 5px 19px" }}>
      <button 
        className="p-2 hover:bg-white/5 rounded-lg transition-colors active:scale-95"
        aria-label="Menu"
      >
        {/* Hamburger menu - three horizontal lines */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
  <rect x="4" y="5" width="16" height="2" rx="1"/>
  <rect x="4" y="11" width="16" height="2" rx="1"/>
  <rect x="4" y="17" width="12" height="2" rx="1"/>
</svg>

      </button>
      
      <button 
        className="p-2 hover:bg-white/5 rounded-lg transition-colors active:scale-95"
        aria-label="Filter"
      >
        {/* Filter icon - filled funnel shape */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
  <path d="M3 4H21L14 12V19L10 21V12L3 4Z"/>
</svg>

      </button>
    </header>
  );
}

