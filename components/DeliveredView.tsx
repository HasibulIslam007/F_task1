"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Headset, Package } from "lucide-react";
import { demoMeta } from "@/data/orders";

export function DeliveredView({
  onContactSupport,
  onReportMissing,
}: {
  onContactSupport: () => void;
  onReportMissing: () => void;
}) {
  const meta = demoMeta.delivered;
  return (
    <div className="relative">
      <div className="flex items-center justify-between gap-2">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm min-[380px]:h-12 min-[380px]:w-12">
          <CheckCircle2 className="h-5 w-5 min-[380px]:h-6 min-[380px]:w-6" strokeWidth={2.2} />
        </span>
        <span className="shrink-0 rounded-full bg-black/20 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm min-[380px]:px-3 min-[380px]:text-[11px]">
          ● {meta.pill}
        </span>
      </div>
      <h3 className="mt-3 text-balance text-[19px] font-extrabold tracking-tight min-[380px]:mt-4 min-[380px]:text-[21px]">
        Marked Delivered
      </h3>
      <p className="mt-1 text-[13px] font-medium leading-relaxed text-white/90 min-[380px]:text-[13.5px]">
        We show this order as delivered, but you haven&apos;t received it.
      </p>
      <div className="mt-3 flex items-center gap-2.5 rounded-2xl bg-white/15 p-3 backdrop-blur-md min-[380px]:mt-4 min-[380px]:p-3.5">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/20 text-[15px]">
          📦
        </span>
        <p className="min-w-0 text-[12px] font-medium leading-snug text-white/95 min-[380px]:text-[12.5px]">
          Left at front porch · Sep 24, 1:32 PM · Photo available
        </p>
      </div>
      <div className="mt-3 grid grid-cols-1 gap-2 min-[380px]:mt-4 min-[380px]:grid-cols-2 min-[380px]:gap-2.5">
        <motion.button
          whileTap={{ scale: 0.96 }}
          onClick={onContactSupport}
          className="flex min-h-[48px] items-center justify-center gap-1.5 rounded-2xl bg-white/20 px-3 py-3 text-center text-[13px] font-bold leading-tight text-white backdrop-blur-md hover:bg-white/30 min-[380px]:text-[13.5px]"
        >
          <Headset className="h-4 w-4 shrink-0" /> Contact Support
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.96 }}
          onClick={onReportMissing}
          className="flex min-h-[48px] items-center justify-center gap-1.5 rounded-2xl bg-white px-3 py-3 text-center text-[13px] font-bold leading-tight text-emerald-700 shadow-lg min-[380px]:text-[13.5px]"
        >
          <Package className="h-4 w-4 shrink-0" /> Report Missing Package
        </motion.button>
      </div>
    </div>
  );
}
