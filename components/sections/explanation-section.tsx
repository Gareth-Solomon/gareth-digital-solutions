import Image from "next/image";

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
            <li>✓ Instant response to every missed caller</li>
            <li>✓ Every missed enquiry is easier to track</li>
            <li>✓ More opportunities turn into real conversations</li>
          </ul>
        </div>
        <div className="overflow-hidden rounded-lg bg-[#061225] shadow-[0_24px_50px_rgba(7,20,51,0.18)]">
          <div className="relative aspect-video">
            <Image
              src="/images/explainer-thumbnail.png"
              alt="Missed Call Recovery System explainer video thumbnail"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-royal text-3xl text-white shadow-xl">
              ▶
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
