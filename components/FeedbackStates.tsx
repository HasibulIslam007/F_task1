"use client";
import { motion } from "framer-motion";
import { Inbox, RotateCcw, WifiOff } from "lucide-react";

export function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center rounded-premium-lg bg-white px-5 py-10 text-center shadow-premium min-[380px]:px-6 min-[380px]:py-12"
    >
      <span className="flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-100">
        <Inbox className="h-7 w-7 text-slate-400" />
      </span>
      <h3 className="mt-4 text-balance text-[16px] font-bold text-slate-900 min-[380px]:text-[17px]">
        No order found
      </h3>
      <p className="mt-1 w-full max-w-[240px] text-balance text-[13px] font-medium leading-relaxed text-slate-500 min-[380px]:text-[13.5px]">
        We couldn&apos;t find tracking for this order. Check your order ID and try again.
      </p>
      <motion.button
        whileTap={{ scale: 0.96 }}
        onClick={onReset}
        className="mt-5 flex min-h-[48px] items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-[14px] font-bold text-white"
      >
        <RotateCcw className="h-4 w-4 shrink-0" /> Reset demo
      </motion.button>
    </motion.div>
  );
}

export function ErrorState({ message, onRetry }: { message: string; onRetry: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center rounded-premium-lg border-[1.5px] border-rose-100 bg-white px-5 py-10 text-center shadow-premium min-[380px]:px-6 min-[380px]:py-12"
    >
      <span className="flex h-16 w-16 items-center justify-center rounded-3xl bg-rose-50">
        <WifiOff className="h-7 w-7 text-rose-500" />
      </span>
      <h3 className="mt-4 text-balance text-[16px] font-bold text-slate-900 min-[380px]:text-[17px]">
        Something went wrong
      </h3>
      <p className="mt-1 w-full max-w-[260px] text-balance text-[13px] font-medium leading-relaxed text-slate-500 min-[380px]:text-[13.5px]">
        {message}
      </p>
      <motion.button
        whileTap={{ scale: 0.96 }}
        onClick={onRetry}
        className="mt-5 flex min-h-[48px] items-center justify-center gap-2 rounded-2xl bg-rose-500 px-5 py-3 text-[14px] font-bold text-white shadow-lg shadow-rose-500/25"
      >
        <RotateCcw className="h-4 w-4 shrink-0" /> Try again
      </motion.button>
    </motion.div>
  );
}
