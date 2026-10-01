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
        intro: "Reach local customers who are actively searching for the services you provide."
      },
      {
        title: "Facebook Ads",
        href: "/services/facebook-ads",
        slug: "facebook-ads",
        intro:
          "Get your business in front of potential local customers through targeted Facebook and Instagram advertising."
      },
      {
        title: "SEO & Local Search",
        href: "/services/seo-local-search",
        slug: "seo-local-search",
        intro: "Improve your visibility when people search online for your services in your area."
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
        intro: "Build or improve your website so more visitors turn into calls and enquiries."
      },
      {
        title: "Missed Call Recovery (LeadReviva)",
        href: "/services/missed-call-recovery",
        slug: "missed-call-recovery",
        intro:
          "Automatically respond to missed callers so potential customers don't disappear to a competitor."
      },
      {
        title: "AI Chatbots",
        href: "/services/ai-chatbots",
        slug: "ai-chatbots",
        intro:
          "Engage website visitors, answer common questions and help turn more visitors into enquiries."
      }
    ]
  }
];

export const services = serviceCategories.flatMap((category) => category.services);

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
