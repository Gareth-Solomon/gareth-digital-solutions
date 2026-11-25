import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";

const examples = [
  {
    title: "Professional Website",
    description: "A mobile-friendly website with clear call and WhatsApp contact options.",
    image: "/images/bronze-showcase/pinecrest-plumbing-website.webp",
    alt: "Fictional Pinecrest Plumbing website with a plumbing services overview and Call Us Now and WhatsApp buttons."
  },
  {
    title: "Google Business Profile",
    description: "Business information, services and contact options in one place.",
    image: "/images/bronze-showcase/pinecrest-plumbing-business-profile.webp",
    alt: "Illustrative Pinecrest Plumbing Google Business Profile showing contact options, services and service areas."
  },
  {
    title: "Customer Reviews",
    description: "An illustrative example of how genuine customer reviews could appear.",
    image: "/images/bronze-showcase/pinecrest-plumbing-reviews.webp",
    alt: "Pinecrest Plumbing reviews mockup with two entries labelled as examples rather than real customer feedback."
  },
  {
    title: "Google Search Visibility",
    description: "An example of how a business listing could appear in local search results. Actual rankings vary.",
    image: "/images/bronze-showcase/pinecrest-plumbing-search-results.webp",
    alt: "Illustrative Google Search page with a Pinecrest Plumbing listing and map, labelled as a fictional search result."
  }
] as const;

export function BronzeGallery() {
  return (
    <section aria-labelledby="bronze-gallery-heading" className="border-b border-slate-200 bg-white py-12 sm:py-14">
      <div className="section-shell">
        <p className="mb-3 text-sm font-black uppercase tracking-[0.14em] text-royal">Illustrative examples</p>
        <h2 id="bronze-gallery-heading" className="text-3xl font-black leading-tight text-navy sm:text-4xl">
          See What Your Business Could Look Like Online
        </h2>
        <p className="mt-4 max-w-3xl leading-7 text-steel">
          Your Get Found package helps establish a professional online presence. Here are illustrative examples of how a local plumbing business could look online.
        </p>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-steel">
          Pinecrest Plumbing is a fictional demonstration business. These examples do not depict client work or guarantee reviews, Google verification, search placement or enquiries.
        </p>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {examples.map((example) => (
            <figure key={example.image} className="min-w-0 overflow-hidden rounded-lg border border-slate-200 bg-white">
              <Image
                src={example.image}
                alt={example.alt}
                width={1536}
                height={1024}
                sizes="(min-width: 1212px) 578px, (min-width: 768px) calc((100vw - 56px) / 2), calc(100vw - 34px)"
                className="h-auto w-full border-b border-slate-200"
              />
              <figcaption className="p-4">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-black text-navy">{example.title}</h3>
                  <a
                    href={example.image}
                    aria-label={`View full size: ${example.title}`}
                    className="text-sm font-bold !text-royal underline underline-offset-2"
                  >
                    View full size
                  </a>
                </div>
                <p className="mt-2 text-sm leading-6 text-steel">{example.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-8 text-center">
          <ButtonLink href="/packages#package-enquiry" className="w-full sm:w-auto">Enquire About Bronze</ButtonLink>
        </div>
      </div>
    </section>
  );
}
