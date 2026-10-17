"use client";

import { useState } from "react";
import { TextField } from "@/components/ui/text-field";
import { useEnquirySubmission } from "@/features/enquiries/use-enquiry-submission";
import { formatMonthlyPrice, getLeadRevivaPrice, leadRevivaPlans, type LeadRevivaSelection } from "@/features/leadreviva/pricing";

type DemoFormValues = {
  name: string;
  businessName: string;
  businessArea: string;
  email: string;
  phone: string;
  businessType: string;
  missedCallsPerDay: string;
  nextStep: string;
};

const defaultValues: DemoFormValues = {
  name: "",
  businessName: "",
  businessArea: "",
  email: "",
  phone: "",
  businessType: "",
  missedCallsPerDay: "",
  nextStep: ""
};

const qualificationQuestions = [
  {
    field: "missedCallsPerDay",
    label: "Approximately how many customer calls does your business miss per day?",
    options: ["0–2", "3–5", "6–10", "11–20", "More than 20", "Not sure"]
  },
  {
    field: "nextStep",
    label: "What would you like to do next?",
    options: ["I'm interested in getting started", "I'd like to see a demonstration", "I'm just exploring"]
  }
] as const;

export function DemoRequestForm({ selection }: { selection?: LeadRevivaSelection }) {
  const selectedPlan = selection ? leadRevivaPlans[selection.plan] : undefined;
  const selectedPrice = selection ? getLeadRevivaPrice(selection) : undefined;
  const [values, setValues] = useState<DemoFormValues>(defaultValues);
  function updateValue(field: keyof DemoFormValues, value: string) {
    setValues((current) => ({
      ...current,
      [field]: value
    }));
  }

  const payload = {
    LeadSource: "missed_call_demo",
    Name: values.name,
    BusinessName: values.businessName,
    BusinessArea: values.businessArea || "Not provided",
    Email: values.email,
    PhoneNumber: values.phone,
    BusinessType: values.businessType || "Not provided",
    MissedCallsPerDay: values.missedCallsPerDay,
    NextStep: values.nextStep,
    ...(selection && selectedPlan && selectedPrice !== undefined ? {
      LeadRevivaPackage: selectedPlan.name,
      SelectedPackage: `${selectedPlan.name} ${selection.allowance}`,
      MonthlySmsAllowance: selection.allowance,
      MonthlyPrice: formatMonthlyPrice(selectedPrice)
    } : {}),
    _subject: `Missed Call Recovery Demo Request - ${values.businessName}`,
    _replyto: values.email
  };

  const { status, errorMessage, handleSubmit } = useEnquirySubmission({
    payload,
    onSuccess: () => setValues(defaultValues),
    errorMessage: "Something went wrong while sending your demo request. Please try again or contact Gareth directly."
  });

  return (
    <form onSubmit={handleSubmit} className="grid gap-4" aria-label="Free demo request form">
      {selection && selectedPlan && selectedPrice !== undefined ? (
        <div className="rounded-md border border-royal/20 bg-mist p-4 text-sm text-navy">
          <p className="font-black">Your selected LeadReviva package</p>
          <p className="mt-1">{selectedPlan.name} · {selection.allowance} SMS · {formatMonthlyPrice(selectedPrice)}</p>
          <p className="mt-2 text-steel">This selection will be included with your enquiry.</p>
        </div>
      ) : null}
      <div className="grid gap-4 sm:grid-cols-2">
        <TextField
          label="Name"
          value={values.name}
          required
          onChange={(value) => updateValue("name", value)}
        />
        <TextField
          label="Business name"
          value={values.businessName}
          required
          onChange={(value) => updateValue("businessName", value)}
        />
        <div className="sm:col-span-2">
          <TextField
            label="Business Area"
            placeholder="e.g. Durbanville, Cape Town"
            value={values.businessArea}
            onChange={(value) => updateValue("businessArea", value)}
          />
        </div>
        <TextField
          label="Email address"
          type="email"
          value={values.email}
          required
          onChange={(value) => updateValue("email", value)}
        />
        <TextField
          label="Phone number"
          type="tel"
          value={values.phone}
          required
          onChange={(value) => updateValue("phone", value)}
        />
        <div className="sm:col-span-2">
          <TextField
            label="Business type (optional)"
            value={values.businessType}
            onChange={(value) => updateValue("businessType", value)}
          />
        </div>
      </div>

      <div className="grid gap-4 border-t border-slate-200 pt-4">
        {qualificationQuestions.map((question) => (
          <label key={question.field} className="grid min-w-0 gap-2 text-sm font-bold text-navy">
            {question.label}
            <select
              value={values[question.field]}
              required
              onChange={(event) => updateValue(question.field, event.target.value)}
              className="min-h-12 w-full min-w-0 rounded-md border border-slate-300 bg-white px-3 text-base focus:border-royal focus:outline-none focus:ring-4 focus:ring-royal/15"
            >
              <option value="" disabled>Select an option</option>
              {question.options.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
          </label>
        ))}
      </div>

      <p className="text-center text-sm font-bold text-navy">
        Plans from R399/month. No long-term contracts.
      </p>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="min-h-[52px] rounded-md bg-royal px-5 text-sm font-black text-white shadow-[0_16px_36px_rgba(0,92,255,0.25)] transition hover:bg-[#0048ce] disabled:cursor-not-allowed disabled:bg-slate-400 sm:text-base"
      >
        {status === "submitting" ? "Sending..." : "Request My Free Demo"}
      </button>

      {status === "success" ? (
        <p className="rounded-md bg-green-50 px-4 py-3 text-sm font-semibold text-green-800">
          Thank you. Your demo request was sent successfully. Gareth will follow up with you soon.
        </p>
      ) : null}

      {status === "error" ? (
        <p className="rounded-md bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          {errorMessage}
        </p>
      ) : null}

      <p className="text-center text-xs text-steel">
        Free demo. No obligation. Your details will only be used to respond to your enquiry.
      </p>
    </form>
  );
}
