const benefits = [
  {
    title: "Recover More Enquiries",
    copy: "Every missed call is captured and followed up instead of disappearing.",
    icon: "↗"
  },
  {
    title: "Instant Engagement",
    copy: "Customers get a quick reply even when you cannot answer immediately.",
    icon: "⚡"
  },
  {
    title: "Save Time",
    copy: "Automate the first response while you stay focused on the job.",
    icon: "◷"
  },
  {
    title: "Clear Lead Tracking",
    copy: "See where missed opportunities are coming from and what they could be worth.",
    icon: "▣"
  }
];

export function BenefitsSection() {
  return (
    <section className="bg-[#001633] py-16 text-white">
      <div className="section-shell">
        <div className="text-center">
          <h2 className="text-3xl font-black">Why Businesses Choose This System</h2>
          <p className="mx-auto mt-3 max-w-2xl text-blue-100">
            Built for local service providers who need fast response, simple follow-up, and better
            visibility over missed opportunities.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="border-l border-white/18 pl-6">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-skybrand/60 text-2xl text-skybrand">
                {benefit.icon}
              </div>
              <h3 className="font-black">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-6 text-blue-100">{benefit.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
