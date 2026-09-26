"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import StatusCard from "@/components/StatusCard";
import Timeline from "@/components/Timeline";
import SupportCard from "@/components/SupportCard";
import StateSwitcher from "@/components/StateSwitcher";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import Toast from "@/components/Toast";
import { order, timelines, type DemoState } from "@/data/orders";
import { EmptyState, ErrorState } from "@/components/FeedbackStates";

type Screen = "loading" | "ready" | "empty" | "error";

export default function Home() {
  const [demoState, setDemoState] = useState<DemoState>("delayed");
  const [screen, setScreen] = useState<Screen>("loading");
  const [refreshing, setRefreshing] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const boot = useCallback((withDelay = true) => {
    setScreen("loading");
    window.setTimeout(() => setScreen("ready"), withDelay ? 1400 : 0);
  }, []);

  useEffect(() => {
    boot(true);
  }, [boot]);

  useEffect(() => {
    if (!toast) return;
    const t = window.setTimeout(() => setToast(null), 2800);
    return () => window.clearTimeout(t);
  }, [toast]);

  const showToast = (msg: string) => setToast(msg);

  const handleRefresh = () => {
    setRefreshing(true);
    window.setTimeout(() => {
      setRefreshing(false);
      showToast("Still preparing — we'll notify you when tracking activates.");
    }, 1600);
  };

  return (
    <main className="min-h-dvh bg-[#f2f3f7] pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-[max(0.75rem,env(safe-area-inset-top))] sm:flex sm:justify-center sm:px-6 sm:py-10">
      {/* top gradient wash */}
      <div className="pointer-events-none fixed inset-x-0 top-0 h-[340px] bg-gradient-to-b from-indigo-100/70 via-blue-50/40 to-transparent" />

      {/* phone container — full-bleed on mobile, centered column on larger screens */}
      <div className="relative mx-auto w-full max-w-[430px] px-3 pt-1 min-[380px]:px-4 sm:mx-0 sm:px-5">
        {screen === "loading" ? (
          <LoadingSkeleton />
        ) : screen === "empty" ? (
          <div className="space-y-3 min-[380px]:space-y-4">
            <Header onBack={() => boot(false)} />
            <EmptyState onReset={() => setScreen("ready")} />
          </div>
        ) : screen === "error" ? (
          <div className="space-y-3 min-[380px]:space-y-4">
            <Header onBack={() => boot(false)} />
            <ErrorState
              message="We couldn't reach the carrier. Please check your connection and retry."
              onRetry={() => boot(true)}
            />
          </div>
        ) : (
          <div className="space-y-3 min-[380px]:space-y-4">
            <Header onBack={() => showToast("Back to orders (demo)")} />

            <AnimatePresence mode="wait">
              <motion.div
                key={demoState}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="space-y-3 min-[380px]:space-y-4"
              >
                <ProductCard order={order} delayed={demoState === "delayed"} />

                <StatusCard
                  state={demoState}
                  refreshing={refreshing}
                  onReportIssue={() =>
                    showToast("Issue reported — our team will review your shipment.")
                  }
                  onContactSupport={() => showToast("Connecting you to support…")}
                  onReportMissing={() => showToast("Missing-package report started.")}
                  onRefresh={handleRefresh}
                />

                <Timeline steps={timelines[demoState]} />

                <SupportCard
                  onContactSupport={() => showToast("Connecting you to support…")}
                  onChat={() => showToast("Opening live chat…")}
                />

                <StateSwitcher value={demoState} onChange={setDemoState} />

                {/* hidden QA helpers: empty / error states */}
                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 px-2 pb-2 pt-1">
                  <button
                    onClick={() => setScreen("empty")}
                    className="min-h-[44px] px-2 text-[12px] font-semibold text-slate-400 underline-offset-2 hover:text-slate-600 hover:underline"
                  >
                    Preview empty state
                  </button>
                  <span className="hidden h-1 w-1 rounded-full bg-slate-300 min-[380px]:block" />
                  <button
                    onClick={() => setScreen("error")}
                    className="min-h-[44px] px-2 text-[12px] font-semibold text-slate-400 underline-offset-2 hover:text-slate-600 hover:underline"
                  >
                    Preview error state
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        )}

        <Toast message={toast} />
      </div>
    </main>
  );
}
