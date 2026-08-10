const reassurancePoints = [
  "Keep your existing number",
  "Simple setup",
  "No change for your customers"
];

export function ExistingNumberSection() {
  return (
    <section className="border-y border-slate-200 bg-white py-12">
      <div className="section-shell rounded-lg bg-mist px-6 py-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.14em] text-royal">
              Simple setup
            </p>
            <h2 className="text-3xl font-black leading-tight text-navy">
              Keep Your Existing Business Number
            </h2>
          </div>
          <div>
            <p className="leading-7 text-steel">
              No need to advertise a new number to your customers. LeadReviva works with your
              existing business number using call forwarding, so customers continue calling the
              number they already know.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {reassurancePoints.map((point) => (
                <div
                  key={point}
                  className="rounded-md border border-royal/15 bg-white px-4 py-3 text-sm font-bold text-navy"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
