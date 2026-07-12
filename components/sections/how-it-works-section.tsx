const steps = [
  {
    number: "1",
    title: "Missed Call",
    copy: "A customer calls your business, but you are unable to answer.",
    icon: "☎"
  },
  {
    number: "2",
    title: "Automatic SMS",
    copy: "A friendly response lets them know you will be in touch.",
    icon: "✉"
  },
  {
    number: "3",
    title: "You Follow Up",
    copy: "The enquiry is logged so you can follow up and win the job.",
    icon: "◎"
  }
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-white py-16">
      <div className="section-shell">
        <div className="text-center">
          <h2 className="text-4xl font-black text-navy">How It Works</h2>
          <p className="mx-auto mt-3 max-w-2xl text-steel">
            A simple flow that helps customers feel acknowledged while giving you a better chance
            to follow up.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <article key={step.title} className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-mist text-3xl text-royal">
                {step.icon}
              </div>
              <p className="mt-5 text-sm font-black text-royal">{step.number}</p>
              <h3 className="mt-2 text-lg font-black text-navy">{step.title}</h3>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-steel">{step.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
