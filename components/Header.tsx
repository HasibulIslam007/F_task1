"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Bell } from "lucide-react";

export default function Header({ onBack }: { onBack?: () => void }) {
  return (
    <header className="flex items-center justify-between gap-2 px-0.5 pt-1 min-[380px]:px-1 min-[380px]:pt-2">
      <div className="flex min-w-0 flex-1 items-center gap-2.5 min-[380px]:gap-3">
        <motion.button
          whileTap={{ scale: 0.88 }}
          whileHover={{ scale: 1.05 }}
          onClick={onBack}
          aria-label="Go back"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-premium transition-shadow hover:shadow-premium-lg active:shadow-soft min-[380px]:h-11 min-[380px]:w-11"
        >
          <ArrowLeft className="h-5 w-5 text-slate-900" strokeWidth={2.2} />
        </motion.button>
        <div className="min-w-0">
          <h1 className="truncate text-[17px] font-bold leading-tight tracking-tight text-slate-900 min-[380px]:text-[19px]">
            Order Tracking
          </h1>
          <p className="truncate text-[11.5px] font-medium leading-tight text-slate-500 min-[380px]:text-[12.5px]">
            Track your package in real time
          </p>
        </div>
      </div>

      <motion.button
        whileTap={{ scale: 0.88 }}
        aria-label="Notifications"
        className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-premium min-[380px]:h-11 min-[380px]:w-11"
      >
        <Bell className="h-5 w-5 text-slate-800" strokeWidth={2} />
        <span className="absolute right-[9px] top-[9px] flex h-2.5 w-2.5 min-[380px]:right-[10px] min-[380px]:top-[10px]">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-500 opacity-60" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full border-2 border-white bg-indigo-600" />
        </span>
      </motion.button>
    </header>
  );
}
