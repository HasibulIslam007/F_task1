"use client";
import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2, Package, FlaskConical } from "lucide-react";
import type { DemoState } from "@/data/orders";

const options: { id: DemoState; label: string; icon: typeof Package }[] = [
  { id: "delayed", label: "Delayed", icon: AlertTriangle },
  { id: "delivered", label: "Delivered", icon: CheckCircle2 },
  { id: "no-tracking", label: "No Tracking", icon: Package },
];

export default function StateSwitcher({
  value,
  onChange,
}: {
  value: DemoState;
  onChange: (s: DemoState) => void;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.24 }}
      className="rounded-premium-lg border-[1.5px] border-dashed border-indigo-200 bg-indigo-50/50 p-3.5 min-[380px]:p-4"
    >
      <p className="flex items-center justify-center gap-1.5 text-center text-[10.5px] font-bold uppercase tracking-[0.12em] text-indigo-500 min-[380px]:text-[11px]">
        <FlaskConical className="h-3.5 w-3.5 shrink-0" /> View Demo State
      </p>
      <div className="mt-2.5 grid grid-cols-3 gap-1.5 rounded-2xl bg-white p-1.5 shadow-soft min-[380px]:mt-3 min-[380px]:gap-2">
        {options.map((opt) => {
          const active = value === opt.id;
          const Icon = opt.icon;
          return (
            <button
              key={opt.id}
              onClick={() => onChange(opt.id)}
              aria-pressed={active}
              className={`relative flex min-h-[56px] flex-col items-center justify-center gap-1 rounded-xl px-1 py-2.5 text-[11px] font-bold transition-colors min-[380px]:text-[12px] ${active ? "text-white" : "text-slate-500 hover:text-slate-800"}`}
            >
              {active && (
                <motion.span
                  layoutId="demo-pill"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  className="absolute inset-0 rounded-xl bg-slate-900 shadow-soft"
                />
              )}
              <Icon className="relative z-10 h-4 w-4 shrink-0" />
              <span className="relative z-10 text-center leading-tight">{opt.label}</span>
            </button>
          );
        })}
      </div>
    </motion.section>
  );
}
