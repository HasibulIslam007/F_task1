"use client";
import { motion } from "framer-motion";
import { AlertTriangle, ArrowRight, Clock3, Flag } from "lucide-react";
import { demoMeta } from "@/data/orders";

export function DelayedView({ onReportIssue }: { onReportIssue: () => void }) {
  const meta = demoMeta.delayed;
  return (
    <div className="relative">
      <div className="flex items-center justify-between gap-2">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm min-[380px]:h-12 min-[380px]:w-12">
          <AlertTriangle className="h-5 w-5 min-[380px]:h-6 min-[380px]:w-6" strokeWidth={2.2} />
        </span>
        <span className="shrink-0 rounded-full bg-black/20 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm min-[380px]:px-3 min-[380px]:text-[11px]">
          ● {meta.pill}
        </span>
      </div>
      <h3 className="mt-3 text-balance text-[19px] font-extrabold tracking-tight min-[380px]:mt-4 min-[380px]:text-[21px]">
        Delivery Delayed
      </h3>
      <p className="mt-1 text-[13px] font-medium leading-relaxed text-white/90 min-[380px]:text-[13.5px]">
        Your package is taking longer than expected.
      </p>
      {/* make the missed original ETA explicit */}
      <div className="mt-2.5 flex flex-wrap items-center gap-x-2 gap-y-1.5">
        <span className="text-[12px] font-medium text-white/75">
          Original ETA: <s className="decoration-white/70 decoration-1">{meta.originalEta}</s>
        </span>
        <span className="rounded-full bg-white/25 px-2 py-0.5 text-[10.5px] font-bold uppercase tracking-wide backdrop-blur-sm">
          ⏱ {meta.lateLabel}
        </span>
      </div>
      <div className="mt-3 rounded-2xl bg-white/15 p-3 backdrop-blur-md min-[380px]:mt-4 min-[380px]:p-3.5">
        <p className="flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-[0.1em] text-white/80 min-[380px]:text-[11px]">
          <Clock3 className="h-3.5 w-3.5 shrink-0" /> New estimated delivery
        </p>
        <p className="mt-1 text-[16px] font-extrabold min-[380px]:text-[17px]">{meta.etaLabel}</p>
        <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-white/25">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${meta.progress}%` }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="h-full rounded-full bg-white"
          />
        </div>
      </div>
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={onReportIssue}
        className="mt-3 flex min-h-[48px] w-full items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3.5 text-[14px] font-bold text-orange-600 shadow-lg active:shadow-sm min-[380px]:mt-4 min-[380px]:text-[15px]"
      >
        <Flag className="h-4 w-4 shrink-0" /> <span className="truncate">Report Issue</span>{" "}
        <ArrowRight className="h-4 w-4 shrink-0" />
      </motion.button>
    </div>
  );
}
