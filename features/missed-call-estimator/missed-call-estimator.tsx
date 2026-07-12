"use client";

import { FormEvent, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import { siteConfig } from "@/config/site";
import { formatCurrency, formatNumber } from "@/lib/format";
import { AnimatedNumber } from "./animated-number";
import { calculateMissedCallOpportunity } from "./calculate";
import type { EstimatorInputs, LeadFormValues } from "./types";

const conversionOptions = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const defaultInputs: EstimatorInputs = {
  callsPerDay: 15,
  missedCallsPerDay: 3,
  averageCustomerValue: 1500,
  conversionPercentage: 30
};

const defaultLeadValues: LeadFormValues = {
  name: "",
  businessName: "",
  email: "",
  phone: ""
};

export function MissedCallEstimator() {
  const [inputs, setInputs] = useState<EstimatorInputs>(defaultInputs);
  const [leadValues, setLeadValues] = useState<LeadFormValues>(defaultLeadValues);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");
  const leadFormRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => calculateMissedCallOpportunity(inputs), [inputs]);
  const missedCallsInvalid = inputs.missedCallsPerDay > inputs.callsPerDay;

  function updateInput(field: keyof EstimatorInputs, value: number) {
    setInputs((current) => ({
      ...current,
      [field]: Number.isNaN(value) ? 0 : value
    }));
  }

  function handleReportClick() {
    setShowLeadForm(true);
    window.setTimeout(() => {
      leadFormRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const payload = {
      Name: leadValues.name,
      BusinessName: leadValues.businessName,
      Email: leadValues.email,
      PhoneNumber: leadValues.phone || "Not provided",
      CallsPerDay: inputs.callsPerDay,
      MissedCallsPerDay: inputs.missedCallsPerDay,
      AverageCustomerValue: inputs.averageCustomerValue,
      ConversionPercentage: inputs.conversionPercentage,
      MonthlyOpportunity: Math.round(results.monthlyOpportunity),
      AnnualOpportunity: Math.round(results.annualOpportunity),
      MissedCallsPerMonth: Math.round(results.missedCallsPerMonth),
      EstimatedCustomersLost: Math.round(results.estimatedCustomersLost),
      _subject: `Missed Call Opportunity Report - ${leadValues.businessName}`,
      _replyto: leadValues.email
    };

    try {
      const response = await fetch(siteConfig.formspreeEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Formspree did not accept the submission.");
      }

      setStatus("success");
      setLeadValues(defaultLeadValues);
    } catch {
      setStatus("error");
      setErrorMessage(
        "Something went wrong while sending the report request. Please try again or contact Gareth directly."
      );
    }
  }

  return (
    <section id="estimator" className="bg-mist py-20">
      <div className="section-shell">
        <div className="mb-9 text-center">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-royal">
            Free business estimate
          </p>
          <h2 className="mt-3 text-4xl font-black text-navy">
            Missed Call Revenue Estimator
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-steel">
            See how much potential revenue your business could be losing due to missed phone
            calls.
          </p>
        </div>

        <div className="rounded-lg bg-[#002d78] p-4 shadow-[0_26px_70px_rgba(0,31,77,0.25)] sm:p-6">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-md bg-white p-6 shadow-xl">
              <div className="grid gap-5">
                <InputField
                  label="How many calls does your business receive each working day?"
                  min={0}
                  value={inputs.callsPerDay}
                  onChange={(value) => updateInput("callsPerDay", value)}
                />
                <InputField
                  label="Approximately how many calls do you miss each working day?"
                  min={0}
                  value={inputs.missedCallsPerDay}
                  onChange={(value) => updateInput("missedCallsPerDay", value)}
                  error={
                    missedCallsInvalid
                      ? "Missed calls cannot be greater than total calls received."
                      : undefined
                  }
                />
                <InputField
                  label="What is your average customer or job value? (South African Rand)"
                  min={0}
                  value={inputs.averageCustomerValue}
                  onChange={(value) => updateInput("averageCustomerValue", value)}
                  prefix="R"
                />
                <label className="grid gap-2 text-sm font-bold text-navy">
                  Approximately what percentage of enquiries become paying customers?
                  <select
                    value={inputs.conversionPercentage}
                    onChange={(event) =>
                      updateInput("conversionPercentage", Number(event.target.value))
                    }
                    className="min-h-12 rounded-md border border-slate-300 bg-white px-3 text-base focus:border-royal focus:outline-none focus:ring-4 focus:ring-royal/15"
                  >
                    {conversionOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}%
                      </option>
                    ))}
                  </select>
                  <span className="text-xs font-medium leading-5 text-steel">
                    For example, if approximately 3 out of every 10 enquiries become paying
                    customers, choose 30%.
                  </span>
                </label>
              </div>
            </div>

            <div className="rounded-md bg-white p-6 shadow-xl">
              <p className="text-sm font-black uppercase tracking-[0.13em] text-royal">
                Your Estimated Missed Call Opportunity
              </p>
              <div className="mt-5 grid gap-4">
                <ResultRow
                  label="Potential missed calls per month"
                  value={
                    <AnimatedNumber
                      value={results.missedCallsPerMonth}
                      formatter={(value) => formatNumber(Math.round(value))}
                    />
                  }
                />
                <ResultRow
                  label="Estimated new customers missed"
                  value={
                    <AnimatedNumber
                      value={results.estimatedCustomersLost}
                      formatter={(value) => formatNumber(Math.round(value))}
                    />
                  }
                />
                <div className="rounded-md bg-mist p-5">
                  <p className="text-sm font-bold text-steel">Estimated Monthly Opportunity</p>
                  <p className="mt-2 text-4xl font-black text-royal">
                    <AnimatedNumber
                      value={results.monthlyOpportunity}
                      formatter={(value) => formatCurrency(Math.round(value))}
                    />
                  </p>
                </div>
                <div className="rounded-md border border-royal/15 p-5">
                  <p className="text-sm font-bold text-steel">Estimated Annual Opportunity</p>
                  <p className="mt-2 text-3xl font-black text-navy">
                    <AnimatedNumber
                      value={results.annualOpportunity}
                      formatter={(value) => formatCurrency(Math.round(value))}
                    />
                  </p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-6 text-steel">
                If even a portion of your missed callers would have become customers, your business
                could be missing approximately this amount in potential revenue.
              </p>
              <p className="mt-3 text-xs leading-5 text-steel">
                This estimate is based on the information you provided and should be used as an
                indication only. Actual business results will vary.
              </p>
              <button
                type="button"
                onClick={handleReportClick}
                disabled={missedCallsInvalid}
                className="mt-6 flex min-h-[52px] w-full items-center justify-center rounded-md bg-royal px-5 text-base font-black text-white shadow-[0_16px_36px_rgba(0,92,255,0.28)] transition hover:bg-[#0048ce] disabled:cursor-not-allowed disabled:bg-slate-400"
              >
                Get My Personalised Report
              </button>
            </div>
          </div>
        </div>

        <div id="report-form" ref={leadFormRef}>
          {showLeadForm ? (
            <div className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-[0_20px_55px_rgba(7,20,51,0.1)]">
              <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
                <div>
                  <p className="mb-3 text-sm font-black uppercase tracking-[0.14em] text-royal">
                    Personalised report
                  </p>
                  <h3 className="text-3xl font-black leading-tight text-navy">
                    Where should we send your personalised report?
                  </h3>
                  <p className="mt-4 leading-7 text-steel">
                    Enter your details below and we'll email your personalised Missed Call
                    Opportunity Report.
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="grid gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <TextField
                      label="Name"
                      value={leadValues.name}
                      required
                      onChange={(value) =>
                        setLeadValues((current) => ({ ...current, name: value }))
                      }
                    />
                    <TextField
                      label="Business Name"
                      value={leadValues.businessName}
                      required
                      onChange={(value) =>
                        setLeadValues((current) => ({ ...current, businessName: value }))
                      }
                    />
                    <TextField
                      label="Email Address"
                      type="email"
                      value={leadValues.email}
                      required
                      onChange={(value) =>
                        setLeadValues((current) => ({ ...current, email: value }))
                      }
                    />
                    <TextField
                      label="Phone Number (optional)"
                      type="tel"
                      value={leadValues.phone}
                      onChange={(value) =>
                        setLeadValues((current) => ({ ...current, phone: value }))
                      }
                    />
                  </div>

                  <HiddenSubmissionFields inputs={inputs} results={results} />

                  <button
                    type="submit"
                    disabled={status === "submitting" || missedCallsInvalid}
                    className="min-h-[52px] rounded-md bg-royal px-5 text-base font-black text-white shadow-[0_16px_36px_rgba(0,92,255,0.25)] transition hover:bg-[#0048ce] disabled:cursor-not-allowed disabled:bg-slate-400"
                  >
                    {status === "submitting" ? "Sending..." : "Send My Personalised Report"}
                  </button>
                  {status === "success" ? (
                    <p className="rounded-md bg-green-50 px-4 py-3 text-sm font-semibold text-green-800">
                      Thank you. Your details were sent successfully.
                    </p>
                  ) : null}
                  {status === "error" ? (
                    <p className="rounded-md bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                      {errorMessage}
                    </p>
                  ) : null}
                  <p className="text-center text-xs text-steel">
                    We will only use your details to send your report and follow up about your
                    missed call estimate.
                  </p>
                </form>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

type InputFieldProps = {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  prefix?: string;
  error?: string;
};

function InputField({ label, value, onChange, min = 0, prefix, error }: InputFieldProps) {
  return (
    <label className="grid gap-2 text-sm font-bold text-navy">
      {label}
      <div className="relative">
        {prefix ? (
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-steel">
            {prefix}
          </span>
        ) : null}
        <input
          type="number"
          min={min}
          value={value}
          onChange={(event) => onChange(Number(event.target.value))}
          className={`min-h-12 w-full rounded-md border bg-white px-3 text-base focus:border-royal focus:outline-none focus:ring-4 focus:ring-royal/15 ${
            prefix ? "pl-8" : ""
          } ${error ? "border-red-400" : "border-slate-300"}`}
        />
      </div>
      {error ? <span className="text-xs font-semibold text-red-600">{error}</span> : null}
    </label>
  );
}

type TextFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
};

function TextField({ label, value, onChange, type = "text", required = false }: TextFieldProps) {
  return (
    <label className="grid gap-2 text-sm font-bold text-navy">
      {label}
      <input
        type={type}
        value={value}
        required={required}
        onChange={(event) => onChange(event.target.value)}
        className="min-h-12 rounded-md border border-slate-300 bg-white px-3 text-base focus:border-royal focus:outline-none focus:ring-4 focus:ring-royal/15"
      />
    </label>
  );
}

function ResultRow({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-4">
      <span className="text-sm font-bold text-navy">{label}</span>
      <span className="text-2xl font-black text-royal">{value}</span>
    </div>
  );
}

function HiddenSubmissionFields({
  inputs,
  results
}: {
  inputs: EstimatorInputs;
  results: ReturnType<typeof calculateMissedCallOpportunity>;
}) {
  const hiddenFields = {
    CallsPerDay: inputs.callsPerDay,
    MissedCallsPerDay: inputs.missedCallsPerDay,
    AverageCustomerValue: inputs.averageCustomerValue,
    ConversionPercentage: inputs.conversionPercentage,
    MonthlyOpportunity: Math.round(results.monthlyOpportunity),
    AnnualOpportunity: Math.round(results.annualOpportunity),
    MissedCallsPerMonth: Math.round(results.missedCallsPerMonth),
    EstimatedCustomersLost: Math.round(results.estimatedCustomersLost)
  };

  return (
    <>
      {Object.entries(hiddenFields).map(([name, value]) => (
        <input key={name} type="hidden" name={name} value={value} />
      ))}
    </>
  );
}
