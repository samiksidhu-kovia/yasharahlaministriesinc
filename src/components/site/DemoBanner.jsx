import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function DemoBanner({ onDismiss }) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const dismiss = () => {
    setVisible(false);
    onDismiss?.();
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#111111] border-b border-[#d4a853]/20">
      <div className="relative flex items-center justify-center px-10 py-3">
        <p className="text-[#d4a853] text-xs font-inter tracking-wide text-center">
          This is a demo site created exclusively for Yasharahla Ministries Inc. by KOVIA Creative.
        </p>
        <button
          onClick={dismiss}
          aria-label="Dismiss banner"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[#d4a853]/50 hover:text-[#d4a853] transition-colors"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}