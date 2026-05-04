import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function DemoBanner({ onDismiss }) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const handleDismiss = () => {
    setVisible(false);
    onDismiss?.();
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a] border-b border-[#d4a853]/20">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-center relative">
        <p className="text-[#d4a853] text-xs sm:text-sm font-inter tracking-wide text-center pr-8">
          This is a demo site created exclusively for Yasharahla Ministries Inc. by KOVIA Creative.
        </p>
        <button
          onClick={handleDismiss}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[#d4a853]/60 hover:text-[#d4a853] transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}