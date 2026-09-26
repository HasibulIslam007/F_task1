"use client";
import { motion } from "framer-motion";
import { Package, RefreshCw } from "lucide-react";

export function NoTrackingView({
  refreshing,
  onRefresh,
}: {
  refreshing: boolean;
  onRefresh: () => void;
}) {
  return (
    <div className="relative">
      <div className="flex items-center justify-between gap-2">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm min-[380px]:h-12 min-[380px]:w-12">
          <Package className="h-5 w-5 min-[380px]:h-6 min-[380px]:w-6" strokeWidth={2.2} />
        </span>
        <span className="shrink-0 rounded-full bg-black/20 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm min-[380px]:px-3 min-[380px]:text-[11px]">
          ● Preparing
        </span>
      </div>
      <h3 className="mt-3 text-balance text-[19px] font-extrabold tracking-tight min-[380px]:mt-4 min-[380px]:text-[21px]">
        Preparing Shipment
      </h3>
      <p className="mt-1 text-[13px] font-medium leading-relaxed text-white/90 min-[380px]:text-[13.5px]">
        Tracking information is not available yet.
      </p>
      <div className="mt-3 flex items-center gap-2.5 rounded-2xl bg-white/15 p-3 backdrop-blur-md min-[380px]:mt-4 min-[380px]:p-3.5">
        <span className="relative flex h-2.5 w-2.5 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
        </span>
        <p className="min-w-0 text-[12.5px] font-semibold leading-snug text-white/95 min-[380px]:text-[13px]">
          Expected update within 24 hours
        </p>
      </div>
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={onRefresh}
        disabled={refreshing}
        className="mt-3 flex min-h-[48px] w-full items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3.5 text-[14px] font-bold text-indigo-700 shadow-lg disabled:opacity-80 min-[380px]:mt-4 min-[380px]:text-[15px]"
      >
        <RefreshCw className={`h-4 w-4 shrink-0 ${refreshing ? "animate-spin" : ""}`} />
        <span className="truncate">
          {refreshing ? "Checking for updates…" : "Refresh Tracking"}
        </span>
      </motion.button>
    </div>
  );
}
