const benefits = [
  {
    title: "Recover More Enquiries",
    copy: "Respond to missed callers before they move on to another business.",
    icon: "RE"
  },
  {
    title: "Instant Customer Response",
    copy: "Automatically acknowledge missed callers within moments.",
    icon: "IR"
  },
  {
    title: "Two-Way SMS",
    copy: "Customers can reply by SMS and continue the conversation.",
    icon: "2W"
  },
  {
    title: "Lead Tracking",
    copy: "Missed calls and customer responses are logged so opportunities are easier to track and follow up.",
    icon: "LT"
  },
  {
    title: "Reporting & Insights",
    copy: "Get visibility into missed-call activity, customer responses and recovered opportunities.",
    icon: "RI"
  }
];

export function BenefitsSection() {
  return (
    <section className="bg-[#001633] py-16 text-white">
      <div className="section-shell">
        <div className="text-center">
          <h2 className="text-3xl font-black">Why Businesses Choose LeadReviva</h2>
          <p className="mx-auto mt-3 max-w-2xl text-blue-100">
            Built for local service providers who need fast response, simple follow-up, and better
            visibility over missed opportunities.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="border-l border-white/18 pl-6">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-skybrand/60 text-sm font-black tracking-wide text-skybrand">
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
