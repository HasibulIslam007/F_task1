export type DemoState = "delayed" | "delivered" | "no-tracking";

export type TimelineStatus = "completed" | "current" | "upcoming";

export interface TimelineStep {
  id: string;
  title: string;
  description: string;
  date: string;
  status: TimelineStatus;
}

export interface Order {
  productName: string;
  productImage: string;
  productColor: string;
  orderId: string;
  sellerName: string;
  sellerVerified: boolean;
  expectedDelivery: string;
  expectedDeliveryShort: string;
}

export const order: Order = {
  productName: "Wireless Headphones",
  productImage:
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400&auto=format&fit=crop",
  productColor: "Midnight Black",
  orderId: "TRK-92831",
  sellerName: "SoundCore Official",
  sellerVerified: true,
  expectedDelivery: "September 28, 2026",
  expectedDeliveryShort: "Sep 28",
};

export const timelines: Record<DemoState, TimelineStep[]> = {
  delayed: [
    {
      id: "confirmed",
      title: "Order Confirmed",
      description: "We've received your order",
      date: "Sep 22, 10:24 AM",
      status: "completed",
    },
    {
      id: "processing",
      title: "Processing",
      description: "Packed at fulfillment center",
      date: "Sep 23, 02:15 PM",
      status: "completed",
    },
    {
      id: "shipped",
      title: "Shipped",
      description: "Left carrier facility · Memphis, TN",
      date: "Sep 24, 09:40 AM",
      status: "current",
    },
    {
      id: "out",
      title: "Out for Delivery",
      description: "Courier will pick up soon",
      date: "Expected",
      status: "upcoming",
    },
    {
      id: "delivered",
      title: "Delivered",
      description: "Package handed to you",
      date: "Pending",
      status: "upcoming",
    },
  ],
  delivered: [
    {
      id: "confirmed",
      title: "Order Confirmed",
      description: "We've received your order",
      date: "Sep 20, 11:02 AM",
      status: "completed",
    },
    {
      id: "processing",
      title: "Processing",
      description: "Packed at fulfillment center",
      date: "Sep 21, 01:48 PM",
      status: "completed",
    },
    {
      id: "shipped",
      title: "Shipped",
      description: "In transit · 3 facilities scanned",
      date: "Sep 22, 08:20 AM",
      status: "completed",
    },
    {
      id: "out",
      title: "Out for Delivery",
      description: "Courier route #42 · 8 stops away",
      date: "Sep 24, 07:55 AM",
      status: "completed",
    },
    {
      id: "delivered",
      title: "Delivered",
      description: "Front porch · Photo on file",
      date: "Sep 24, 01:32 PM",
      status: "current",
    },
  ],
  "no-tracking": [
    {
      id: "confirmed",
      title: "Order Confirmed",
      description: "We've received your order",
      date: "Sep 26, 09:12 AM",
      status: "completed",
    },
    {
      id: "processing",
      title: "Processing",
      description: "Seller is preparing your items",
      date: "In progress",
      status: "current",
    },
    {
      id: "shipped",
      title: "Shipped",
      description: "Tracking activates after pickup",
      date: "Pending",
      status: "upcoming",
    },
    {
      id: "out",
      title: "Out for Delivery",
      description: "Courier assignment pending",
      date: "Pending",
      status: "upcoming",
    },
    {
      id: "delivered",
      title: "Delivered",
      description: "Package handed to you",
      date: "Pending",
      status: "upcoming",
    },
  ],
};

export const demoMeta: Record<
  DemoState,
  {
    pill: string;
    progress: number;
    etaLabel: string;
    originalEta?: string;
    lateLabel?: string;
  }
> = {
  delayed: {
    pill: "Delayed",
    progress: 62,
    etaLabel: "Tomorrow, 2:00 PM",
    originalEta: "September 24, 2026",
    lateLabel: "2 days behind schedule",
  },
  delivered: { pill: "Delivered", progress: 100, etaLabel: "Sep 24, 1:32 PM" },
  "no-tracking": { pill: "Preparing", progress: 28, etaLabel: "Within 24 hrs" },
};
