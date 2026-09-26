"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BadgeCheck, CalendarClock, ChevronRight, MapPin, Package } from "lucide-react";
import Image from "next/image";
import type { Order } from "@/data/orders";
import { demoMeta } from "@/data/orders";

export default function ProductCard({
  order,
  delayed = false,
}: {
  order: Order;
  delayed?: boolean;
}) {
  const late = delayed ? demoMeta.delayed : null;
  const [showDetails, setShowDetails] = useState(false);
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-premium-lg bg-white p-3.5 shadow-premium min-[380px]:p-4"
    >
      {/* subtle top gradient line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

      <div className="flex gap-3 min-[380px]:gap-3.5">
        <div className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-[16px] bg-gradient-to-br from-indigo-100 via-blue-50 to-purple-100 shadow-soft min-[380px]:h-[86px] min-[380px]:w-[86px] min-[380px]:rounded-[18px]">
          <Image
            src={order.productImage}
            alt={order.productName}
            fill
            sizes="(max-width: 380px) 72px, 86px"
            className="object-cover"
            priority
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0 flex-1">
              <h2 className="truncate text-[15px] font-bold tracking-tight text-slate-900 min-[380px]:text-[16px]">
                {order.productName}
              </h2>
              <p className="mt-0.5 break-words text-[11px] font-medium leading-snug text-slate-500 min-[380px]:text-[12px]">
                {order.productColor} · Order{" "}
                <span className="font-semibold text-slate-700">#{order.orderId}</span>
              </p>
            </div>
            <span
              className={`shrink-0 rounded-full px-2 py-1 text-[10.5px] font-bold min-[380px]:mt-0.5 min-[380px]:px-2.5 min-[380px]:text-[11px] ${
                late ? "bg-orange-50 text-orange-700" : "bg-indigo-50 text-indigo-700"
              }`}
            >
              {late ? "Late" : order.expectedDeliveryShort}
            </span>
          </div>

          <div className="mt-2 flex items-center gap-1.5">
            <span className="flex max-w-full items-center gap-1 overflow-hidden rounded-full bg-slate-100 py-1 pl-1.5 pr-2.5 text-[11px] font-semibold text-slate-700 min-[380px]:text-[11.5px]">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-[11px] font-bold text-indigo-600 shadow-sm">
                S
              </span>
              <span className="truncate">{order.sellerName}</span>
              {order.sellerVerified && (
                <BadgeCheck className="h-3.5 w-3.5 shrink-0 text-blue-500" />
              )}
            </span>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setShowDetails((v) => !v)}
        aria-expanded={showDetails}
        aria-label="View order details"
        className="mt-3 flex w-full items-center justify-between gap-2 rounded-2xl bg-gradient-to-r from-blue-50/80 via-indigo-50/80 to-purple-50/80 px-3 py-2.5 text-left transition-colors hover:from-blue-100/80 hover:via-indigo-100/80 hover:to-purple-100/80 min-[380px]:mt-3.5 min-[380px]:px-3.5 min-[380px]:py-3"
      >
        <div className="flex min-w-0 items-center gap-2.5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white shadow-soft">
            <CalendarClock className="h-[18px] w-[18px] text-indigo-600" />
          </span>
          <div className="min-w-0">
            <p className="text-[10.5px] font-semibold uppercase tracking-[0.08em] text-slate-500 min-[380px]:text-[11px]">
              Expected Delivery
            </p>
            {late ? (
              <p className="flex flex-wrap items-baseline gap-x-1.5 text-[13px] font-bold min-[380px]:text-[14px]">
                <s className="font-medium text-slate-400">{late.originalEta}</s>
                <span className="text-orange-600">{late.etaLabel}</span>
              </p>
            ) : (
              <p className="truncate text-[13px] font-bold text-slate-900 min-[380px]:text-[14px]">
                {order.expectedDelivery}
              </p>
            )}
          </div>
        </div>
        <ChevronRight
          className={`h-4 w-4 shrink-0 text-slate-400 transition-transform duration-300 ${
            showDetails ? "rotate-90" : ""
          }`}
        />
      </button>

      {/* expandable order details */}
      <AnimatePresence initial={false}>
        {showDetails && (
          <motion.div
            key="details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-3 rounded-2xl border-[1.5px] border-slate-100 bg-slate-50/80 p-3.5 min-[380px]:p-4">
              <p className="flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-[0.1em] text-slate-500 min-[380px]:text-[11px]">
                <Package className="h-3.5 w-3.5 shrink-0" /> Order details
              </p>
              <dl className="mt-2.5 grid grid-cols-2 gap-x-3 gap-y-2.5">
                <div className="min-w-0">
                  <dt className="text-[10.5px] font-semibold uppercase tracking-wide text-slate-400">
                    Order ID
                  </dt>
                  <dd className="truncate text-[12.5px] font-bold text-slate-800">
                    #{order.orderId}
                  </dd>
                </div>
                <div className="min-w-0">
                  <dt className="text-[10.5px] font-semibold uppercase tracking-wide text-slate-400">
                    Variant
                  </dt>
                  <dd className="truncate text-[12.5px] font-bold text-slate-800">
                    {order.productColor}
                  </dd>
                </div>
                <div className="col-span-2 min-w-0">
                  <dt className="text-[10.5px] font-semibold uppercase tracking-wide text-slate-400">
                    Seller
                  </dt>
                  <dd className="truncate text-[12.5px] font-bold text-slate-800">
                    {order.sellerName}
                    {order.sellerVerified && (
                      <BadgeCheck className="ml-1 inline h-3.5 w-3.5 text-blue-500" />
                    )}
                  </dd>
                </div>
              </dl>
              <div className="mt-3 flex items-start gap-2 rounded-xl bg-white p-2.5 shadow-soft">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-indigo-500" />
                <div className="min-w-0">
                  <p className="text-[10.5px] font-semibold uppercase tracking-wide text-slate-400">
                    Shipping address
                  </p>
                  <p className="text-[12px] font-medium leading-snug text-slate-600">
                    412 Maple Avenue, Apt 7B · Portland, OR 97205
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
