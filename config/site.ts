export const siteConfig = {
  name: "Gareth Digital Solutions",
  tagline: "Smart Solutions. Real Results.",
  offerName: "Missed Call Recovery System",
  email: "gareth@garethdigitalsolutions.com",
  location: "Cape Town, South Africa",
  formspreeEndpoint:
    process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "https://formspree.io/f/xkgpdabj",
  calendarUrl:
    process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_URL ??
    "https://calendar.app.google/NGGeP7pEw8xUpD8x7"
} as const;
