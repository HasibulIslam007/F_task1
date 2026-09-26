"use client";
import { motion } from "framer-motion";
import { Headset, MessageCircle, ChevronRight } from "lucide-react";

export default function SupportCard({
  onContactSupport,
  onChat,
}: {
  onContactSupport: () => void;
  onChat: () => void;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.18 }}
      className="rounded-premium-lg bg-white p-4 shadow-premium min-[380px]:p-5"
    >
      <div className="flex min-w-0 items-center gap-2.5 min-[380px]:gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 text-lg shadow-soft">
          💬
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-[15px] font-bold tracking-tight text-slate-900 min-[380px]:text-[16px]">
            Need help?
          </h3>
          <p className="truncate text-[11.5px] font-medium text-slate-500 min-[380px]:text-[12.5px]">
            Our team replies in ~2 min
          </p>
        </div>
        <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-1 text-[10.5px] font-bold text-emerald-700 min-[380px]:px-2.5 min-[380px]:text-[11px]">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Online
        </span>
      </div>
      <div className="mt-3 grid grid-cols-1 gap-2 min-[360px]:grid-cols-2 min-[380px]:mt-4 min-[380px]:gap-2.5">
        <motion.button
          whileTap={{ scale: 0.96 }}
          onClick={onContactSupport}
          className="flex min-h-[48px] items-center justify-center gap-1.5 rounded-2xl border-[1.5px] border-slate-100 bg-white px-3 py-3 text-[13px] font-bold text-slate-800 transition-colors hover:border-indigo-200 hover:bg-indigo-50/50 min-[380px]:text-[13.5px]"
        >
          <Headset className="h-4 w-4 shrink-0 text-indigo-600" />{" "}
          <span className="truncate">Contact Support</span>
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.96 }}
          onClick={onChat}
          className="flex min-h-[48px] items-center justify-center gap-1.5 rounded-2xl bg-slate-900 px-3 py-3 text-[13px] font-bold text-white shadow-soft hover:bg-slate-800 min-[380px]:text-[13.5px]"
        >
          <MessageCircle className="h-4 w-4 shrink-0" />{" "}
          <span className="truncate">Chat with us</span>{" "}
          <ChevronRight className="h-3.5 w-3.5 shrink-0 opacity-60" />
        </motion.button>
      </div>
    </motion.section>
  );
}
