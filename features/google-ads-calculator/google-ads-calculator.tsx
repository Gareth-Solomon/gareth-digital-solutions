"use client";

import { useMemo, useState } from "react";
import { formatCurrency, formatNumber } from "@/lib/format";

const defaultMonthlySpend = 5000;
const defaultAverageJobValue = 2500;
const defaultTargetJobs = 5;

function cleanNumber(value: number) {
  if (!Number.isFinite(value) || value < 0) {
    return 0;
  }

  return value;
}

function formatJobs(value: number) {
  if (!Number.isFinite(value)) {
    return "0";
  }

  if (Number.isInteger(value)) {
    return formatNumber(value);
  }

  return new Intl.NumberFormat("en-ZA", {
    maximumFractionDigits: 1
  }).format(value);
}

export function GoogleAdsCalculator() {
  const [monthlySpend, setMonthlySpend] = useState(defaultMonthlySpend);
  const [averageJobValue, setAverageJobValue] = useState(defaultAverageJobValue);
  const [targetJobs, setTargetJobs] = useState(defaultTargetJobs);

  const results = useMemo(() => {
    const spend = cleanNumber(monthlySpend);
    const jobValue = cleanNumber(averageJobValue);
    const jobs = Math.floor(cleanNumber(targetJobs));
    const targetJobValue = jobValue * jobs;
    const jobsNeeded = jobValue > 0 ? spend / jobValue : 0;
    const difference = targetJobValue - spend;

    return {
      spend,
      jobValue,
      jobs,
      targetJobValue,
      jobsNeeded,
      difference
    };
  }, [averageJobValue, monthlySpend, targetJobs]);

  return (
    <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="rounded-lg bg-white p-6 shadow-[0_20px_55px_rgba(7,20,51,0.08)]">
        <div className="grid gap-5">
          <NumberField
            label="How much are you thinking of spending on Google Ads each month?"
            prefix="R"
            value={monthlySpend}
            onChange={setMonthlySpend}
          />
          <NumberField
            label="What is an average new job worth to your business?"
            prefix="R"
            value={averageJobValue}
            onChange={setAverageJobValue}
          />
          <NumberField
            label="How many new jobs would you like Google Ads to generate each month?"
            value={targetJobs}
            onChange={(value) => setTargetJobs(Math.floor(value))}
          />
        </div>
      </div>

      <div className="rounded-lg bg-[#001633] p-6 text-white shadow-[0_24px_60px_rgba(7,20,51,0.18)]">
        <p className="text-sm font-black uppercase tracking-[0.14em] text-skybrand">
          Your estimate
        </p>
        <div className="mt-6 grid gap-4">
          <ResultBlock
            label="Monthly ad spend"
            value={`${formatCurrency(results.spend)} advertising spend`}
          />
          <ResultBlock
            label="Value of your target jobs"
            value={`${formatCurrency(results.targetJobValue)} potential sales value from ${formatNumber(
              results.jobs
            )} jobs`}
          />
          <ResultBlock
            label="Jobs needed to cover the advertising spend"
            value={`About ${formatJobs(results.jobsNeeded)} jobs would equal the advertising spend`}
          />
          <ResultBlock
            label="Sales value above the advertising spend"
            value={`${formatCurrency(results.difference)} difference before the costs of completing those jobs`}
          />
        </div>
        <p className="mt-5 text-xs leading-5 text-blue-100">
          This is based on revenue/job value, not profit. Results are illustrative estimates and
          are not a guarantee of advertising performance.
        </p>
      </div>
    </div>
  );
}

type NumberFieldProps = {
  label: string;
  value: number;
  onChange: (value: number) => void;
  prefix?: string;
};

function NumberField({ label, value, onChange, prefix }: NumberFieldProps) {
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
          min={0}
          value={value}
          onChange={(event) => onChange(cleanNumber(Number(event.target.value)))}
          className={`min-h-12 w-full rounded-md border border-slate-300 bg-white px-3 text-base focus:border-royal focus:outline-none focus:ring-4 focus:ring-royal/15 ${
            prefix ? "pl-8" : ""
          }`}
        />
      </div>
    </label>
  );
}

function ResultBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-white/12 bg-white/5 p-4">
      <p className="text-xs font-black uppercase tracking-[0.12em] text-skybrand">{label}</p>
      <p className="mt-2 text-xl font-black leading-tight">{value}</p>
    </div>
  );
}
