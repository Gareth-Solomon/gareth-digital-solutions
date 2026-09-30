export type Service = {
  title: string;
  href: string;
  slug: string;
  intro: string;
};

export type ServiceCategory = {
  title: string;
  services: Service[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    title: "Get More Leads",
    services: [
      {
        title: "Google Ads",
        href: "/services/google-ads",
        slug: "google-ads",
        intro: "A dedicated service page for Google Ads will be added here."
      },
      {
        title: "Facebook Ads",
        href: "/services/facebook-ads",
        slug: "facebook-ads",
        intro: "A dedicated service page for Facebook Ads will be added here."
      },
      {
        title: "SEO & Local Search",
        href: "/services/seo-local-search",
        slug: "seo-local-search",
        intro: "A dedicated service page for SEO and local search will be added here."
      }
    ]
  },
  {
    title: "Capture More Leads",
    services: [
      {
        title: "Websites & Conversion Improvements",
        href: "/services/websites-conversion",
        slug: "websites-conversion",
        intro: "A dedicated service page for websites and conversion improvements will be added here."
      },
      {
        title: "Missed Call Recovery (LeadReviva)",
        href: "/services/missed-call-recovery",
        slug: "missed-call-recovery",
        intro: "A dedicated service page for missed call recovery will be added here."
      },
      {
        title: "AI Chatbots",
        href: "/services/ai-chatbots",
        slug: "ai-chatbots",
        intro: "A dedicated service page for AI chatbots will be added here."
      }
    ]
  }
];

export const services = serviceCategories.flatMap((category) => category.services);

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
