"use client";
export default function LoadingSkeleton() {
  return (
    <div className="space-y-3 min-[380px]:space-y-4" aria-label="Loading order tracking">
      <div className="flex items-center gap-2.5 min-[380px]:gap-3">
        <div className="skeleton-shimmer h-10 w-10 shrink-0 rounded-full min-[380px]:h-11 min-[380px]:w-11" />
        <div className="min-w-0 flex-1">
          <div className="skeleton-shimmer h-4 w-28 rounded-full min-[380px]:w-32" />
          <div className="skeleton-shimmer mt-2 h-3 w-36 rounded-full min-[380px]:w-44" />
        </div>
        <div className="skeleton-shimmer h-10 w-10 shrink-0 rounded-full min-[380px]:h-11 min-[380px]:w-11" />
      </div>
      <div className="rounded-premium-lg bg-white p-3.5 shadow-premium min-[380px]:p-4">
        <div className="flex gap-3 min-[380px]:gap-3.5">
          <div className="skeleton-shimmer h-[72px] w-[72px] shrink-0 rounded-[16px] min-[380px]:h-[86px] min-[380px]:w-[86px] min-[380px]:rounded-[18px]" />
          <div className="min-w-0 flex-1">
            <div className="skeleton-shimmer h-4 w-3/4 rounded-full" />
            <div className="skeleton-shimmer mt-2 h-3 w-1/2 rounded-full" />
            <div className="skeleton-shimmer mt-3 h-7 w-32 rounded-full min-[380px]:w-40" />
          </div>
        </div>
        <div className="skeleton-shimmer mt-3 h-[64px] rounded-2xl min-[380px]:mt-3.5 min-[380px]:h-[68px]" />
      </div>
      <div className="skeleton-shimmer h-[260px] rounded-premium-lg min-[380px]:h-[300px]" />
      <div className="rounded-premium-lg bg-white p-4 shadow-premium min-[380px]:p-5">
        <div className="skeleton-shimmer h-4 w-28 rounded-full min-[380px]:w-32" />
        <div className="mt-4 space-y-5">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex gap-3">
              <div className="skeleton-shimmer h-8 w-8 shrink-0 rounded-full min-[380px]:h-9 min-[380px]:w-9" />
              <div className="min-w-0 flex-1">
                <div className="skeleton-shimmer h-3.5 w-2/3 rounded-full" />
                <div className="skeleton-shimmer mt-2 h-3 w-1/2 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
