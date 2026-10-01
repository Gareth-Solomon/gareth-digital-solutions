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
  businessType: "",
  email: "",
  phone: ""
};

type UtmValues = {
  source: string;
  medium: string;
  campaign: string;
};

type Status = "idle" | "submitting" | "success" | "error";

function getInitialUtmValues(): UtmValues {
  if (typeof window === "undefined") {
    return {
      source: "",
      medium: "",
      campaign: ""
    };
  }

  const params = new URLSearchParams(window.location.search);

  return {
    source: params.get("utm_source") ?? "",
    medium: params.get("utm_medium") ?? "",
    campaign: params.get("utm_campaign") ?? ""
  };
}

function useEstimatorState() {
  const [inputs, setInputs] = useState<EstimatorInputs>(defaultInputs);
  const [leadValues, setLeadValues] = useState<LeadFormValues>(defaultLeadValues);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [utmValues] = useState<UtmValues>(getInitialUtmValues);

  const results = useMemo(() => calculateMissedCallOpportunity(inputs), [inputs]);
  const missedCallsInvalid = inputs.missedCallsPerDay > inputs.callsPerDay;

  function updateInput(field: keyof EstimatorInputs, value: number) {
    setInputs((current) => ({
      ...current,
      [field]: Number.isNaN(value) ? 0 : value
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const payload = {
      Name: leadValues.name,
      BusinessName: leadValues.businessName,
      BusinessType: leadValues.businessType || "Not provided",
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
      UTMSource: utmValues.source || "Not provided",
      UTMMedium: utmValues.medium || "Not provided",
      UTMCampaign: utmValues.campaign || "Not provided",
      ActionPlanIncludes:
        "Calculated missed-call results, what the numbers could mean, practical missed-call recovery steps, how LeadReviva could help, and a CTA to book the free 15-minute call.",
      _subject: `Missed Call Action Plan - ${leadValues.businessName}`,
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

  return {
    inputs,
    leadValues,
    status,
    errorMessage,
    utmValues,
    results,
    missedCallsInvalid,
    updateInput,
    setLeadValues,
    handleSubmit
  };
}

export function MissedCallEstimator() {
  const estimator = useEstimatorState();
  const [showLeadForm, setShowLeadForm] = useState(false);
  const leadFormRef = useRef<HTMLDivElement>(null);

  function handleReportClick() {
    setShowLeadForm(true);
    window.setTimeout(() => {
      leadFormRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
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
          <EstimatorPanel estimator={estimator} onReportClick={handleReportClick} />
        </div>

        <div id="report-form" ref={leadFormRef}>
          {showLeadForm ? <LeadFormPanel estimator={estimator} /> : null}
        </div>
      </div>
    </section>
  );
}

export function MissedCallsLandingEstimator({ children }: { children?: ReactNode }) {
  const estimator = useEstimatorState();
  const leadFormRef = useRef<HTMLDivElement>(null);

  function handleReportClick() {
    leadFormRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <section id="estimator" className="bg-[#001633] py-16 text-white sm:py-20">
        <div className="section-shell grid gap-10 xl:grid-cols-[0.55fr_1.45fr] xl:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-skybrand">
              Free tool
            </p>
            <h2 className="mt-3 max-w-xl text-4xl font-black leading-tight sm:text-5xl">
              Calculate What Your <span className="text-skybrand">Missed Calls</span> Could Be
              Worth
            </h2>
            <p className="mt-5 max-w-md text-lg leading-8 text-blue-100">
              See your potential missed-call opportunity in under a minute.
            </p>
            <p className="mt-6 max-w-sm rounded-md border border-skybrand/35 bg-white/5 px-4 py-3 text-sm font-bold leading-6 text-skybrand">
              Know your numbers. Take action. Win more jobs.
            </p>
          </div>

          <div className="min-w-0 rounded-lg bg-white/5 p-3 shadow-[0_26px_70px_rgba(0,0,0,0.28)] ring-1 ring-skybrand/20 sm:p-5">
            <EstimatorPanel
              estimator={estimator}
              onReportClick={handleReportClick}
              reportButtonText="Get My Free Action Plan"
            />
          </div>
        </div>
      </section>

      {children}

      <section id="report-form" ref={leadFormRef} className="bg-mist py-20">
        <div className="section-shell">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto_0.8fr] lg:items-stretch">
            <LeadFormPanel
              estimator={estimator}
              className="mt-0 h-full min-w-0"
              layout="stacked"
              eyebrow="FREE ACTION PLAN"
              heading="Want to Know What to Do About Your Missed Calls?"
              copy="Get your free Missed Call Action Plan. We'll use your calculator results to show you the potential opportunity and practical next steps you can take to recover more enquiries."
              buttonText="GET MY FREE MISSED CALL ACTION PLAN"
              privacyText="Free. No obligation. We'll use your details to send your results and action plan."
              includeBusinessType
            />

            <div className="flex items-center justify-center lg:px-1">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-royal/20 bg-white text-sm font-black text-royal shadow-sm">
                OR
              </span>
            </div>

            <div className="flex min-w-0 flex-col justify-center rounded-lg border border-slate-200 bg-white p-6 shadow-[0_20px_55px_rgba(7,20,51,0.1)]">
              <div>
                <p className="mb-3 text-sm font-black uppercase tracking-[0.14em] text-royal">
                  Free call
                </p>
                <h3 className="text-3xl font-black leading-tight text-navy">
                  Want to See How LeadReviva Works?
                </h3>
                <p className="mt-4 leading-7 text-steel">
                  Want to talk it through? Book a free 15-minute call and we&apos;ll look at how
                  missed-call recovery could work for your business.
                </p>
              </div>
              <a
                href={siteConfig.calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex min-h-[52px] w-full items-center justify-center rounded-md bg-royal px-5 text-center text-sm font-black text-white shadow-[0_16px_36px_rgba(0,92,255,0.25)] transition hover:bg-[#0048ce] sm:text-base"
              >
                BOOK A FREE 15-MINUTE CALL
              </a>
              <p className="mt-4 text-center text-xs font-semibold text-steel">
                No pressure. Just a quick chat.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

type EstimatorState = ReturnType<typeof useEstimatorState>;

function EstimatorPanel({
  estimator,
  onReportClick,
  reportButtonText = "Get My Personalised Report"
}: {
  estimator: EstimatorState;
  onReportClick: () => void;
  reportButtonText?: string;
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="rounded-md bg-white p-6 shadow-xl">
        <EstimatorFields estimator={estimator} />
      </div>

      <ResultsCard
        estimator={estimator}
        onReportClick={onReportClick}
        reportButtonText={reportButtonText}
      />
    </div>
  );
}

function EstimatorFields({ estimator }: { estimator: EstimatorState }) {
  return (
    <div className="grid gap-5">
      <InputField
        label="How many calls does your business receive each working day?"
        min={0}
        value={estimator.inputs.callsPerDay}
        onChange={(value) => estimator.updateInput("callsPerDay", value)}
      />
      <InputField
        label="Approximately how many calls do you miss each working day?"
        min={0}
        value={estimator.inputs.missedCallsPerDay}
        onChange={(value) => estimator.updateInput("missedCallsPerDay", value)}
        error={
          estimator.missedCallsInvalid
            ? "Missed calls cannot be greater than total calls received."
            : undefined
        }
      />
      <InputField
        label="What is your average customer or job value? (South African Rand)"
        min={0}
        value={estimator.inputs.averageCustomerValue}
        onChange={(value) => estimator.updateInput("averageCustomerValue", value)}
        prefix="R"
      />
      <label className="grid gap-2 text-sm font-bold text-navy">
        Approximately what percentage of enquiries become paying customers?
        <select
          value={estimator.inputs.conversionPercentage}
          onChange={(event) =>
            estimator.updateInput("conversionPercentage", Number(event.target.value))
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
          For example, if approximately 3 out of every 10 enquiries become paying customers,
          choose 30%.
        </span>
      </label>
    </div>
  );
}

function ResultsCard({
  estimator,
  onReportClick,
  reportButtonText
}: {
  estimator: EstimatorState;
  onReportClick: () => void;
  reportButtonText: string;
}) {
  return (
    <div className="rounded-md bg-white p-6 shadow-xl">
      <p className="text-sm font-black uppercase tracking-[0.13em] text-royal">
        Your Estimated Missed Call Opportunity
      </p>
      <div className="mt-5 grid gap-4">
        <ResultRow
          label="Potential missed calls per month"
          value={
            <AnimatedNumber
              value={estimator.results.missedCallsPerMonth}
              formatter={(value) => formatNumber(Math.round(value))}
            />
          }
        />
        <ResultRow
          label="Estimated new customers missed"
          value={
            <AnimatedNumber
              value={estimator.results.estimatedCustomersLost}
              formatter={(value) => formatNumber(Math.round(value))}
            />
          }
        />
        <div className="rounded-md bg-mist p-5">
          <p className="text-sm font-bold text-steel">Estimated Monthly Opportunity</p>
          <p className="mt-2 text-4xl font-black text-royal">
            <AnimatedNumber
              value={estimator.results.monthlyOpportunity}
              formatter={(value) => formatCurrency(Math.round(value))}
            />
          </p>
        </div>
        <div className="rounded-md border border-royal/15 p-5">
          <p className="text-sm font-bold text-steel">Estimated Annual Opportunity</p>
          <p className="mt-2 text-3xl font-black text-navy">
            <AnimatedNumber
              value={estimator.results.annualOpportunity}
              formatter={(value) => formatCurrency(Math.round(value))}
            />
          </p>
        </div>
      </div>
      <p className="mt-5 text-sm leading-6 text-steel">
        If even a portion of your missed callers would have become customers, your business could
        be missing approximately this amount in potential revenue.
      </p>
      <p className="mt-3 text-xs leading-5 text-steel">
        This estimate is based on the information you provided and should be used as an indication
        only. Actual business results will vary.
      </p>
      <button
        type="button"
        onClick={onReportClick}
        disabled={estimator.missedCallsInvalid}
        className="mt-6 flex min-h-[52px] w-full items-center justify-center rounded-md bg-royal px-5 text-base font-black text-white shadow-[0_16px_36px_rgba(0,92,255,0.28)] transition hover:bg-[#0048ce] disabled:cursor-not-allowed disabled:bg-slate-400"
      >
        {reportButtonText}
      </button>
    </div>
  );
}

function LeadFormPanel({
  estimator,
  className = "mt-8",
  layout = "split",
  eyebrow = "Personalised report",
  heading = "Where should we send your personalised report?",
  copy = "Enter your details below and we'll email your personalised Missed Call Opportunity Report.",
  buttonText = "Send My Personalised Report",
  privacyText = "We will only use your details to send your report and follow up about your missed call estimate.",
  includeBusinessType = false
}: {
  estimator: EstimatorState;
  className?: string;
  layout?: "split" | "stacked";
  eyebrow?: string;
  heading?: string;
  copy?: string;
  buttonText?: string;
  privacyText?: string;
  includeBusinessType?: boolean;
}) {
  return (
    <div
      className={`${className} rounded-lg border border-slate-200 bg-white p-6 shadow-[0_20px_55px_rgba(7,20,51,0.1)]`}
    >
      <div
        className={`grid min-w-0 gap-8 ${
          layout === "split" ? "lg:grid-cols-[0.85fr_1.15fr]" : ""
        }`}
      >
        <div className="min-w-0">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.14em] text-royal">
            {eyebrow}
          </p>
          <h3 className="text-3xl font-black leading-tight text-navy">{heading}</h3>
          <p className="mt-4 leading-7 text-steel">{copy}</p>
        </div>
        <form onSubmit={estimator.handleSubmit} className="grid min-w-0 gap-4">
          <div className="grid min-w-0 gap-4 sm:grid-cols-2">
            <TextField
              label="Name"
              value={estimator.leadValues.name}
              required
              onChange={(value) =>
                estimator.setLeadValues((current) => ({ ...current, name: value }))
              }
            />
            <TextField
              label="Business Name"
              value={estimator.leadValues.businessName}
              required
              onChange={(value) =>
                estimator.setLeadValues((current) => ({ ...current, businessName: value }))
              }
            />
            {includeBusinessType ? (
              <TextField
                label="What type of business do you run?"
                value={estimator.leadValues.businessType}
                onChange={(value) =>
                  estimator.setLeadValues((current) => ({ ...current, businessType: value }))
                }
              />
            ) : null}
            <TextField
              label="Email Address"
              type="email"
              value={estimator.leadValues.email}
              required
              onChange={(value) =>
                estimator.setLeadValues((current) => ({ ...current, email: value }))
              }
            />
            <TextField
              label="Phone Number (optional)"
              type="tel"
              value={estimator.leadValues.phone}
              onChange={(value) =>
                estimator.setLeadValues((current) => ({ ...current, phone: value }))
              }
            />
          </div>

          <HiddenSubmissionFields
            inputs={estimator.inputs}
            results={estimator.results}
            utmValues={estimator.utmValues}
          />

          <button
            type="submit"
            disabled={estimator.status === "submitting" || estimator.missedCallsInvalid}
            className="min-h-[52px] rounded-md bg-royal px-5 text-sm font-black text-white shadow-[0_16px_36px_rgba(0,92,255,0.25)] transition hover:bg-[#0048ce] disabled:cursor-not-allowed disabled:bg-slate-400 sm:text-base"
          >
            {estimator.status === "submitting" ? "Sending..." : buttonText}
          </button>
          {estimator.status === "success" ? (
            <p className="rounded-md bg-green-50 px-4 py-3 text-sm font-semibold text-green-800">
              Thank you. Your details were sent successfully.
            </p>
          ) : null}
          {estimator.status === "error" ? (
            <p className="rounded-md bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
              {estimator.errorMessage}
            </p>
          ) : null}
          <p className="text-center text-xs text-steel">{privacyText}</p>
        </form>
      </div>
    </div>
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
      <div className="relative min-w-0">
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
    <label className="grid min-w-0 gap-2 text-sm font-bold text-navy">
      {label}
      <input
        type={type}
        value={value}
        required={required}
        onChange={(event) => onChange(event.target.value)}
        className="min-h-12 w-full min-w-0 rounded-md border border-slate-300 bg-white px-3 text-base focus:border-royal focus:outline-none focus:ring-4 focus:ring-royal/15"
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
  results,
  utmValues
}: {
  inputs: EstimatorInputs;
  results: ReturnType<typeof calculateMissedCallOpportunity>;
  utmValues: UtmValues;
}) {
  const hiddenFields = {
    CallsPerDay: inputs.callsPerDay,
    MissedCallsPerDay: inputs.missedCallsPerDay,
    AverageCustomerValue: inputs.averageCustomerValue,
    ConversionPercentage: inputs.conversionPercentage,
    MonthlyOpportunity: Math.round(results.monthlyOpportunity),
    AnnualOpportunity: Math.round(results.annualOpportunity),
    MissedCallsPerMonth: Math.round(results.missedCallsPerMonth),
    EstimatedCustomersLost: Math.round(results.estimatedCustomersLost),
    UTMSource: utmValues.source,
    UTMMedium: utmValues.medium,
    UTMCampaign: utmValues.campaign
  };

  return (
    <>
      {Object.entries(hiddenFields).map(([name, value]) => (
        <input key={name} type="hidden" name={name} value={value} />
      ))}
    </>
  );
}
