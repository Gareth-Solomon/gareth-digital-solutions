"use client";

import { useState } from "react";
import { ButtonLink } from "@/components/ui/button-link";
import { leadRevivaPlans, type LeadRevivaPlan, type SmsAllowance } from "./pricing";

const sharedFeatures = [
  "Automatic SMS after a missed call",
  "Missed-call logging",
  "Monthly missed-call report"
];

export function LeadRevivaPricingSection() {
  const [allowance, setAllowance] = useState<SmsAllowance>(100);

  return (
    <section aria-labelledby="leadreviva-pricing-heading" className="border-y border-slate-200 bg-mist py-16">
      <div className="section-shell">
        <div className="text-center">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.14em] text-royal">
            LeadReviva Pricing
          </p>
          <h2 id="leadreviva-pricing-heading" className="text-3xl font-black leading-tight text-navy sm:text-4xl">
            Simple Pricing. Fewer Missed Opportunities.
          </h2>
          <p className="mt-4 leading-7 text-steel">
            Choose the plan and monthly SMS allowance that suits your business.
          </p>
          <div role="group" aria-label="Monthly SMS allowance" className="mt-6 inline-flex rounded-full border border-royal/15 bg-white p-1">
            {([100, 150] as const).map((sms) => (
              <button
                key={sms}
                type="button"
                aria-pressed={allowance === sms}
                onClick={() => setAllowance(sms)}
                className={`min-h-11 cursor-pointer rounded-full px-6 text-sm font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal ${allowance === sms ? "bg-royal text-white shadow-sm" : "text-steel hover:bg-mist"}`}
              >
                {sms} SMS
              </button>
            ))}
          </div>
        </div>

        <div aria-live="polite" aria-atomic="true" className="mt-6 grid gap-5 md:grid-cols-2">
          {(["basic", "plus"] as LeadRevivaPlan[]).map((plan) => {
            const { name, prices } = leadRevivaPlans[plan];
            const features = [
              `${allowance} recovery SMS segments`,
              ...(plan === "plus" ? [`${allowance} inbound SMS segments`, `${allowance} forwarded SMS segments`] : []),
              ...sharedFeatures
            ];

            return (
              <article key={plan} aria-labelledby={`pricing-${plan}`} className="flex flex-col rounded-lg border border-slate-200 bg-white p-5 sm:p-6">
                <h3 id={`pricing-${plan}`} className="text-xl font-black text-navy">{name}</h3>
                <p className="mt-2 text-sm leading-6 text-steel">
                  {plan === "plus"
                    ? "Let customers reply and receive their enquiries directly on your phone."
                    : "Automatically respond when you miss a call."}
                </p>
                <p className="mt-3 text-4xl font-black tracking-tight text-navy sm:text-5xl">
                  R{prices[allowance].toLocaleString("en-US")}
                </p>
                <p className="mt-2 text-sm text-steel">per month</p>
                <ul className="mt-6 space-y-4 border-t border-slate-200 pt-6 text-sm leading-6 text-navy">
                  {features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span aria-hidden="true" className="font-bold text-emerald-600">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 mb-7 text-sm leading-6 text-steel">
                  {plan === "plus"
                    ? "Customers can reply to the recovery SMS. Their enquiries are automatically forwarded to your phone. Recovery, inbound and forwarded SMS each have a separate monthly allowance."
                    : "Customer SMS reply forwarding is not included in Basic."}
                </p>
                <ButtonLink
                  href={`/missed-calls?plan=${plan}&sms=${allowance}#demo-form`}
                  variant={plan === "plus" ? "primary" : "secondary"}
                  className="mt-auto w-full !rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal"
                >
                  Get Started<span className="sr-only"> with {name}, {allowance} SMS, R{prices[allowance].toLocaleString("en-US")} per month</span>
                </ButtonLink>
              </article>
            );
          })}
        </div>

        <p className="mt-5 text-center text-sm leading-6 text-steel">
          SMS allowances are measured in segments. Longer messages may use more than one segment.
        </p>
        <details className="mx-auto mt-3 max-w-3xl rounded-lg border border-royal/15 bg-white px-4 py-3 text-sm leading-6 text-steel">
          <summary className="cursor-pointer font-bold text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal">
            What is an SMS segment?
          </summary>
          <p className="mt-3">
            An SMS segment is a unit used to calculate SMS usage. A standard SMS can contain up to
            160 characters, but longer messages may use two or more segments. Some special characters
            can also reduce the number of characters allowed per segment.
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>A short SMS may use 1 segment.</li>
            <li>A longer SMS may use 2 or 3 segments.</li>
            <li>Each segment counts towards the monthly allowance.</li>
          </ul>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li><strong>Recovery SMS:</strong> the automatic message sent to a customer after you miss their call.</li>
            <li><strong>Inbound SMS (Plus):</strong> a customer&apos;s reply to that recovery message.</li>
            <li><strong>Forwarded SMS (Plus):</strong> the message sent to your phone with the customer&apos;s enquiry.</li>
          </ul>
          <p className="mt-3">
            Basic includes {allowance} recovery SMS segments per month. Plus includes {allowance} recovery,
            {" "}{allowance} inbound and {allowance} forwarded SMS segments per month. Each Plus allowance
            is separate, so a customer&apos;s reply uses inbound segments and forwarding it to your phone
            uses forwarded segments. Longer messages can use more than one segment in each allowance.
          </p>
        </details>
      </div>
    </section>
  );
}
