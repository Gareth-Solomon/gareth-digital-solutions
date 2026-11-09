import Image from "next/image";

const showcases = [
  {
    label: "Your Professional Website",
    heading: "A Website That Makes a Great First Impression",
    description: "Give potential customers a professional place to learn about your services, see what you offer and contact you easily.",
    image: "/images/bronze-showcase/professional-website-reference.png",
    width: 1402,
    height: 1122,
    alt: "User-supplied Flowright Plumbing website design example, with a professional service page and plumber photograph",
  },
  {
    label: "Your Google Business Profile",
    heading: "Help Local Customers Find Your Business",
    description: "Make it easier for customers to discover your business on Google Search and Maps, view your details and get in touch.",
    image: "/images/bronze-showcase/business-profile-reference.png",
    width: 1536,
    height: 1024,
    alt: "User-supplied FastFlow Plumbing Google Business Profile example showing photos, services and contact options",
  },
  {
    label: "Customer Reviews",
    heading: "Build Trust With Customer Reviews",
    description: "Positive reviews from real customers can help people feel more confident about choosing your business.",
    image: "/images/bronze-showcase/customer-reviews-example.png",
    width: 1536,
    height: 1024,
    alt: "Illustrative Google Business Profile reviews layout with two entries clearly labelled example review and sample text",
  },
  {
    label: "Get Found Online",
    heading: "Be Easier to Discover Online",
    description: "When people search for services in their area, having a professional website, Google Business Profile and local SEO foundations can help your business become more discoverable.",
    image: "/images/bronze-showcase/local-search-example.png",
    width: 1536,
    height: 1024,
    alt: "Clearly labelled illustrative plumber near me search example showing a sample website, local listing and map",
  }
] as const;

type Showcase = (typeof showcases)[number];

function ShowcaseImage({ showcase }: { showcase: Showcase }) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_16px_42px_rgba(7,20,51,0.1)]">
      <Image
        src={showcase.image}
        alt={showcase.alt}
        width={showcase.width}
        height={showcase.height}
        sizes="(min-width: 1180px) 566px, (min-width: 768px) calc((100vw - 80px) / 2), calc(100vw - 32px)"
        className="h-auto w-full"
      />
    </div>
  );
}

function ShowcaseCopy({ showcase, index }: { showcase: Showcase; index: number }) {
  return (
    <>
      <p className="mb-3 text-xs font-black uppercase tracking-[0.14em] text-royal">{showcase.label}</p>
      <h3 id={`showcase-${index + 1}-heading`} className="text-2xl font-black leading-tight text-navy sm:text-3xl">{showcase.heading}</h3>
      <p className="mt-5 text-lg leading-8 text-steel">{showcase.description}</p>
    </>
  );
}

export function BronzeShowcase() {
  return (
    <>
      {showcases.map((showcase, index) => (
        <section
          key={showcase.label}
          aria-labelledby={index === 0 ? "bronze-showcase-heading" : `showcase-${index + 1}-heading`}
          className={index % 2 === 0 ? "bg-white py-16" : "border-y border-slate-200 bg-mist py-16"}
        >
          <div className="section-shell">
            {index === 0 && (
              <div className="mb-10 max-w-3xl">
                <p className="mb-3 text-sm font-black uppercase tracking-[0.14em] text-royal">Illustrative examples</p>
                <h2 id="bronze-showcase-heading" className="text-3xl font-black leading-tight text-navy sm:text-4xl">
                  See What Your Business Could Look Like Online
                </h2>
                <p className="mt-5 text-lg leading-8 text-steel">
                  From a professional website to a stronger online presence, here&apos;s how we can help customers find and contact your business.
                </p>
              </div>
            )}

            <article aria-labelledby={`showcase-${index + 1}-heading`} className="grid items-center gap-7 md:grid-cols-2 lg:gap-12">
              <div className={index % 2 === 0 ? "min-w-0 md:order-2" : "min-w-0"}>
                <ShowcaseCopy showcase={showcase} index={index} />
              </div>
              <div className={index % 2 === 0 ? "min-w-0 md:order-1" : "min-w-0"}>
                <ShowcaseImage showcase={showcase} />
              </div>
            </article>

            {index === showcases.length - 1 && (
              <p className="mt-8 text-xs leading-6 text-steel">
                Illustrative examples only. Search rankings, customer reviews and enquiries are not guaranteed.
              </p>
            )}
          </div>
        </section>
      ))}
    </>
  );
}
