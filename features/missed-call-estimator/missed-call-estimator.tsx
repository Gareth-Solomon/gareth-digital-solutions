"use client";

import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import { formatCurrency, formatNumber } from "@/lib/format";
import { AnimatedNumber } from "./animated-number";
import { calculateMissedCallOpportunity } from "./calculate";
import type { EstimatorInputs } from "./types";

const conversionOptions = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const defaultInputs: EstimatorInputs = {
  callsPerDay: 15,
  missedCallsPerDay: 3,
  averageCustomerValue: 1500,
  conversionPercentage: 30
};

function getInitialEstimatorInputs(): EstimatorInputs {
  if (typeof window === "undefined") {
    return defaultInputs;
  }

  const params = new URLSearchParams(window.location.search);

  function readNumber(key: keyof EstimatorInputs) {
    const value = Number(params.get(key));
    return Number.isFinite(value) && value >= 0 ? value : defaultInputs[key];
  }

  const conversionPercentage = readNumber("conversionPercentage");

  return {
    callsPerDay: readNumber("callsPerDay"),
    missedCallsPerDay: readNumber("missedCallsPerDay"),
    averageCustomerValue: readNumber("averageCustomerValue"),
    conversionPercentage: conversionOptions.includes(conversionPercentage)
      ? conversionPercentage
      : defaultInputs.conversionPercentage
  };
}

function useEstimatorState() {
  const [inputs, setInputs] = useState<EstimatorInputs>(getInitialEstimatorInputs);

  const results = useMemo(() => calculateMissedCallOpportunity(inputs), [inputs]);
  const missedCallsInvalid = inputs.missedCallsPerDay > inputs.callsPerDay;

  function updateInput(field: keyof EstimatorInputs, value: number) {
    setInputs((current) => ({
      ...current,
      [field]: Number.isNaN(value) ? 0 : value
    }));
  }

  return {
    inputs,
    results,
    missedCallsInvalid,
    updateInput
  };
}

export function MissedCallEstimator() {
  const estimator = useEstimatorState();

  function handleReportClick() {
    const params = new URLSearchParams({
      callsPerDay: String(estimator.inputs.callsPerDay),
      missedCallsPerDay: String(estimator.inputs.missedCallsPerDay),
      averageCustomerValue: String(estimator.inputs.averageCustomerValue),
      conversionPercentage: String(estimator.inputs.conversionPercentage)
    });

    window.location.href = `/missed-calls?${params.toString()}#demo-form`;
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
          <EstimatorPanel
            estimator={estimator}
            onReportClick={handleReportClick}
            reportButtonText="Get a Free Demo"
          />
        </div>
      </div>
    </section>
  );
}

export function MissedCallsLandingEstimator({ children }: { children?: ReactNode }) {
  const estimator = useEstimatorState();

  function handleReportClick() {
    window.location.href = "/missed-calls#demo-form";
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
              reportButtonText="Get a Free Demo"
              ctaHeading="Want to Stop Missing Customer Opportunities?"
              ctaCopy="See how our missed-call recovery system could work for your business in a free 15-minute demo."
            />
          </div>
        </div>
      </section>

      {children}
    </>
  );
}

type EstimatorState = ReturnType<typeof useEstimatorState>;

function EstimatorPanel({
  estimator,
  onReportClick,
  reportButtonText = "Get a Free Demo",
  ctaHeading,
  ctaCopy
}: {
  estimator: EstimatorState;
  onReportClick: () => void;
  reportButtonText?: string;
  ctaHeading?: string;
  ctaCopy?: string;
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
        ctaHeading={ctaHeading}
        ctaCopy={ctaCopy}
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
  reportButtonText,
  ctaHeading,
  ctaCopy
}: {
  estimator: EstimatorState;
  onReportClick: () => void;
  reportButtonText: string;
  ctaHeading?: string;
  ctaCopy?: string;
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
      {ctaHeading || ctaCopy ? (
        <div className="mt-6 rounded-md border border-royal/15 bg-mist p-5">
          {ctaHeading ? (
            <h3 className="text-xl font-black leading-tight text-navy">{ctaHeading}</h3>
          ) : null}
          {ctaCopy ? <p className="mt-3 text-sm leading-6 text-steel">{ctaCopy}</p> : null}
        </div>
      ) : null}
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

function ResultRow({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-4">
      <span className="text-sm font-bold text-navy">{label}</span>
      <span className="text-2xl font-black text-royal">{value}</span>
    </div>
  );
}
