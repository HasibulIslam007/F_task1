"use client";

import { motion } from "framer-motion";
import { Check, Loader2, PackageCheck, Truck, ClipboardCheck, Box } from "lucide-react";
import type { TimelineStep } from "@/data/orders";

const stepIcons = [ClipboardCheck, Box, Truck, PackageCheck, Check];

export default function Timeline({ steps }: { steps: TimelineStep[] }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-premium-lg bg-white p-4 shadow-premium min-[380px]:p-5"
    >
      <div className="flex items-center justify-between gap-2">
        <h3 className="truncate text-[15px] font-bold tracking-tight text-slate-900 min-[380px]:text-[16px]">
          Delivery Timeline
        </h3>
        <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-600">
          {steps.filter((s) => s.status === "completed").length}/{steps.length} done
        </span>
      </div>

      <div className="mt-3.5 min-[380px]:mt-4">
        {steps.map((step, i) => {
          const isCompleted = step.status === "completed";
          const isCurrent = step.status === "current";
          const isUpcoming = step.status === "upcoming";
          const isLast = i === steps.length - 1;
          const Icon = stepIcons[i] ?? Box;

          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 + i * 0.08, duration: 0.4 }}
              className="relative flex gap-3 min-[380px]:gap-3.5"
            >
              {/* rail */}
              <div className="flex flex-col items-center">
                {isCompleted ? (
                  <span className="z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-green-600 text-white shadow-[0_4px_12px_-2px_rgba(16,185,129,0.5)] min-[380px]:h-9 min-[380px]:w-9">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                ) : isCurrent ? (
                  <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center min-[380px]:h-9 min-[380px]:w-9">
                    <span className="absolute inline-flex h-8 w-8 animate-pulseRing rounded-full bg-indigo-500 min-[380px]:h-9 min-[380px]:w-9" />
                    <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-600 text-white shadow-[0_4px_14px_-2px_rgba(99,102,241,0.6)] ring-4 ring-indigo-100 min-[380px]:h-9 min-[380px]:w-9">
                      {step.id === "delivered" ? (
                        <Check className="h-4 w-4" strokeWidth={3} />
                      ) : (
                        <Icon className="h-4 w-4" strokeWidth={2.2} />
                      )}
                    </span>
                  </span>
                ) : (
                  <span className="z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-slate-100 bg-slate-50 text-slate-300 min-[380px]:h-9 min-[380px]:w-9">
                    <Icon className="h-4 w-4" strokeWidth={2} />
                  </span>
                )}

                {!isLast && (
                  <div className="relative my-1 w-[2px] flex-1 rounded-full bg-slate-100">
                    <motion.div
                      initial={{ height: "0%" }}
                      animate={{
                        height: isCompleted || isCurrent ? "100%" : "0%",
                      }}
                      transition={{
                        duration: 0.6,
                        delay: 0.3 + i * 0.1,
                        ease: "easeOut",
                      }}
                      className={`absolute left-0 top-0 w-full rounded-full ${
                        isCompleted
                          ? "bg-gradient-to-b from-emerald-400 to-green-500"
                          : "bg-gradient-to-b from-indigo-400 to-violet-500"
                      }`}
                    />
                    <div className="h-6 w-full min-[380px]:h-7" />
                  </div>
                )}
              </div>

              {/* text */}
              <div className={`min-w-0 flex-1 pb-5 min-[380px]:pb-6 ${isLast ? "!pb-1" : ""}`}>
                <div className="flex items-center justify-between gap-2">
                  <p
                    className={`min-w-0 truncate text-[13.5px] font-bold tracking-tight min-[380px]:text-[14.5px] ${
                      isUpcoming ? "text-slate-400" : "text-slate-900"
                    }`}
                  >
                    {step.title}
                  </p>
                  {isCurrent && (
                    <span className="flex shrink-0 items-center gap-1 rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-indigo-700 min-[380px]:text-[10.5px]">
                      <Loader2 className="h-3 w-3 animate-spin" />
                      Now
                    </span>
                  )}
                </div>
                <p
                  className={`mt-0.5 break-words text-[12px] font-medium leading-snug min-[380px]:text-[12.5px] ${
                    isUpcoming ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  {step.description}
                </p>
                <p
                  className={`mt-1 text-[11px] font-semibold min-[380px]:text-[11.5px] ${
                    isUpcoming ? "text-slate-300" : isCurrent ? "text-indigo-600" : "text-slate-400"
                  }`}
                >
                  {step.date}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
