declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

function getCurrentPageEventData() {
  if (typeof window === "undefined") {
    return {};
  }

  return {
    event_source_url: window.location.href,
    page_path: `${window.location.pathname}${window.location.search}${window.location.hash}`
  };
}

export function trackMetaLeadEvent() {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "Lead", getCurrentPageEventData());
  }
}

export function trackMetaPageViewEvent() {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "PageView", getCurrentPageEventData());
  }
}
