export function ExplanationSection() {
  return (
    <section className="border-y border-slate-200 bg-white py-20">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="mb-3 text-sm font-black uppercase tracking-[0.14em] text-royal">
            Simple missed-call recovery
          </p>
          <h2 className="text-4xl font-black leading-tight text-navy">
            Missed Call Recovery System
          </h2>
          <p className="mt-5 leading-7 text-steel">
            When you are busy on-site or unable to answer, potential customers often contact the
            next business they find. The system automatically sends a professional SMS after a
            missed call, reassures the customer, and helps you follow up.
          </p>
          <ul className="mt-6 grid gap-3 text-sm font-semibold text-navy">
            <li>Instant response to every missed caller</li>
            <li>Every missed enquiry is easier to track</li>
            <li>More opportunities turn into real conversations</li>
          </ul>
        </div>

        <div className="rounded-lg bg-[#061225] p-5 shadow-[0_24px_50px_rgba(7,20,51,0.18)]">
          <div className="grid items-center gap-6 md:grid-cols-[0.72fr_1fr]">
            <div className="mx-auto w-full max-w-[280px] overflow-hidden rounded-[1.5rem] border border-white/12 bg-black shadow-[0_22px_55px_rgba(0,0,0,0.32)]">
              <iframe
                src="https://www.youtube.com/embed/F1VZqFYNgWQ"
                title="A quick explanation from Gareth"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="aspect-[9/16] h-auto w-full bg-black object-cover"
              />
            </div>
            <div className="text-white">
              <p className="text-sm font-black uppercase tracking-[0.14em] text-skybrand">
                Watch the overview
              </p>
              <h3 className="mt-3 text-3xl font-black leading-tight">
                A quick explanation from Gareth
              </h3>
              <p className="mt-4 text-sm leading-6 text-blue-100">
                Learn why missed calls can quietly cost service businesses real revenue, and how a
                simple automated response helps keep the opportunity alive.
              </p>
              <a
                href="#estimator"
                className="mt-6 inline-flex min-h-12 items-center justify-center rounded-md bg-royal px-5 text-sm font-bold text-white transition hover:bg-[#0048ce]"
              >
                Calculate Your Lost Revenue
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
