const steps = [
  {
    number: "1",
    title: "Missed Call",
    copy: "A customer calls your business, but you are unable to answer.",
    icon: "CALL"
  },
  {
    number: "2",
    title: "Instant SMS",
    copy: "LeadReviva immediately sends a professional response to acknowledge the missed call.",
    icon: "SMS"
  },
  {
    number: "3",
    title: "Two-Way Conversation",
    copy: "The customer can reply by SMS, allowing the conversation to continue even though the original call was missed.",
    icon: "CHAT"
  },
  {
    number: "4",
    title: "Lead Logged & Tracked",
    copy: "The enquiry and conversation are recorded so you can follow up and keep track of missed-call opportunities.",
    icon: "LOG"
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
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article key={step.title} className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-mist text-sm font-black tracking-wide text-royal">
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
