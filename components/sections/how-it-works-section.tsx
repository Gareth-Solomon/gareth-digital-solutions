const steps = [
  {
    number: "1",
    title: "Missed Call",
    copy: "A customer calls your business, but you are unable to answer.",
    icon: "phone"
  },
  {
    number: "2",
    title: "Instant SMS",
    copy: "LeadReviva immediately sends a professional response to acknowledge the missed call.",
    icon: "message"
  },
  {
    number: "3",
    title: "Two-Way Conversation",
    copy: "The customer can reply by SMS, allowing the conversation to continue even though the original call was missed.",
    icon: "conversation"
  },
  {
    number: "4",
    title: "Lead Logged & Tracked",
    copy: "The enquiry and conversation are recorded so you can follow up and keep track of missed-call opportunities.",
    icon: "clipboard"
  }
];

function StepIcon({ type }: { type: string }) {
  const sharedProps = {
    className: "h-9 w-9",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 2
  };

  if (type === "phone") {
    return (
      <svg {...sharedProps} viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.6 3.8 9 3.2l2.1 4.4-1.7 1.5a12.4 12.4 0 0 0 5.5 5.5l1.5-1.7 4.4 2.1-.6 2.4c-.3 1.2-1.4 2-2.6 1.8C10.4 18.2 5.8 13.6 4.8 6.4 4.6 5.2 5.4 4.1 6.6 3.8Z" />
      </svg>
    );
  }

  if (type === "message") {
    return (
      <svg {...sharedProps} viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 6.8A2.8 2.8 0 0 1 6.8 4h10.4A2.8 2.8 0 0 1 20 6.8v6.4a2.8 2.8 0 0 1-2.8 2.8H9l-5 4V6.8Z" />
        <path d="M8 9h8" />
        <path d="M8 12h5" />
      </svg>
    );
  }

  if (type === "conversation") {
    return (
      <svg {...sharedProps} viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 6.8A2.8 2.8 0 0 1 6.8 4h6.4A2.8 2.8 0 0 1 16 6.8v3.4a2.8 2.8 0 0 1-2.8 2.8H9l-5 3.5V6.8Z" />
        <path d="M11 16h4l5 3.5V9.8A2.8 2.8 0 0 0 17.2 7H17" />
      </svg>
    );
  }

  return (
    <svg {...sharedProps} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 4h6l1 2h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2l1-2Z" />
      <path d="M9 6h6" />
      <path d="M8 11h8" />
      <path d="M8 15h5" />
    </svg>
  );
}

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
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-mist text-royal">
                <StepIcon type={step.icon} />
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
