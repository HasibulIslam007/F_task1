"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { DemoState } from "@/data/orders";
import { DelayedView } from "./DelayedView";
import { DeliveredView } from "./DeliveredView";
import { NoTrackingView } from "./NoTrackingView";

interface StatusCardProps {
  state: DemoState;
  refreshing: boolean;
  onReportIssue: () => void;
  onContactSupport: () => void;
  onReportMissing: () => void;
  onRefresh: () => void;
}

/** Gradient + glow styling per status state */
const cardStyles: Record<DemoState, string> = {
  delayed: "from-orange-500 via-orange-500 to-rose-500",
  delivered: "from-emerald-500 via-green-500 to-teal-500",
  "no-tracking": "from-blue-600 via-indigo-600 to-violet-600",
};

const glowStyles: Record<DemoState, string> = {
  delayed: "bg-orange-500/20",
  delivered: "bg-emerald-500/20",
  "no-tracking": "bg-indigo-500/20",
};

export default function StatusCard(props: StatusCardProps) {
  const { state } = props;
  return (
    <div className="relative">
      <div
        className={`pointer-events-none absolute -inset-2 rounded-[28px] blur-2xl transition-colors duration-500 ${glowStyles[state]}`}
      />
      <AnimatePresence mode="wait">
        <motion.section
          key={state}
          initial={{ opacity: 0, y: 14, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.98 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className={`relative overflow-hidden rounded-premium-lg bg-gradient-to-br p-4 text-white shadow-premium-lg min-[380px]:p-5 ${cardStyles[state]}`}
        >
          <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/15" />
          <div className="pointer-events-none absolute -bottom-12 -left-8 h-32 w-32 rounded-full bg-black/10" />
          {state === "delayed" && <DelayedView onReportIssue={props.onReportIssue} />}
          {state === "delivered" && (
            <DeliveredView
              onContactSupport={props.onContactSupport}
              onReportMissing={props.onReportMissing}
            />
          )}
          {state === "no-tracking" && (
            <NoTrackingView refreshing={props.refreshing} onRefresh={props.onRefresh} />
          )}
        </motion.section>
      </AnimatePresence>
    </div>
  );
}
