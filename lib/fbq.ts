export const FB_PIXEL_ID = "1015620557720471";

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
  }
}

export function fbqEvent(
  eventType: "track" | "trackCustom",
  eventName: string,
  params?: Record<string, unknown>
) {
  if (typeof window === "undefined" || !window.fbq) return;
  if (params) {
    window.fbq(eventType, eventName, params);
  } else {
    window.fbq(eventType, eventName);
  }
}

// Helpers tipados para los eventos que usamos

export function trackPageView() {
  fbqEvent("track", "PageView");
}

export function trackViewContent(params: { content_name: string; content_category?: string }) {
  fbqEvent("track", "ViewContent", params);
}

export function trackInitiateCheckout(params: { value: number; currency: string; content_name: string }) {
  fbqEvent("track", "InitiateCheckout", params);
}

export function trackPurchase(params: { value: number; currency: string; content_name: string }) {
  fbqEvent("track", "Purchase", params);
}
