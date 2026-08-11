export const siteConfig = {
  name: "Gareth Digital Solutions",
  tagline: "Smart Solutions. Real Results.",
  offerName: "Missed Call Recovery System",
  email: "gareth@garethdigitalsolutions.com",
  phoneDisplay: "072 879 1139",
  phoneHref: "tel:+27728791139",
  location: "Cape Town, South Africa",
  formspreeEndpoint:
    process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "https://formspree.io/f/xkgpdabj",
  calendarUrl:
    process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_URL ??
    "https://calendar.app.google/aASiHtibd29MswdU8"
} as const;
