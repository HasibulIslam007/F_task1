"use client";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Toast({ message }: { message: string | null }) {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-[max(1.5rem,env(safe-area-inset-bottom))] z-50 flex justify-center px-4 min-[380px]:px-6">
      <AnimatePresence>
        {message && (
          <motion.div
            key={message}
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            className="pointer-events-auto flex w-full max-w-[min(380px,calc(100vw-2rem))] items-center gap-2.5 rounded-2xl bg-slate-900/95 px-4 py-3.5 text-white shadow-premium-lg backdrop-blur-md"
          >
            <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />
            <p className="min-w-0 text-[13px] font-semibold leading-snug min-[380px]:text-[13.5px]">
              {message}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
