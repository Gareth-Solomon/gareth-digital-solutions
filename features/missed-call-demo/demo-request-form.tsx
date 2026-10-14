"use client";

import { FormEvent, useRef, useState } from "react";
import { siteConfig } from "@/config/site";
import { trackMetaLeadEvent } from "@/lib/meta-pixel";
import { formatMonthlyPrice, leadRevivaPlans, type LeadRevivaSelection } from "@/features/leadreviva/pricing";

type DemoFormValues = {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  businessType: string;
};

type DemoFormStatus = "idle" | "submitting" | "success" | "error";

const defaultValues: DemoFormValues = {
  name: "",
  businessName: "",
  email: "",
  phone: "",
  businessType: ""
};

function getUtmValues() {
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

export function DemoRequestForm({ selection }: { selection?: LeadRevivaSelection }) {
  const selectedPlan = selection ? leadRevivaPlans[selection.plan] : undefined;
  const selectedPrice = selection && selectedPlan ? selectedPlan.prices[selection.allowance] : undefined;
  const [values, setValues] = useState<DemoFormValues>(defaultValues);
  const [status, setStatus] = useState<DemoFormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const isSubmittingRef = useRef(false);
  const utmValues = useRef(getUtmValues());

  function updateValue(field: keyof DemoFormValues, value: string) {
    setValues((current) => ({
      ...current,
      [field]: value
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmittingRef.current) {
      return;
    }

    isSubmittingRef.current = true;
    setStatus("submitting");
    setErrorMessage("");

    const payload = {
      LeadSource: "missed_call_demo",
      Name: values.name,
      BusinessName: values.businessName,
      Email: values.email,
      PhoneNumber: values.phone,
      BusinessType: values.businessType || "Not provided",
      ...(selection && selectedPlan && selectedPrice !== undefined ? {
        LeadRevivaPackage: selectedPlan.name,
        MonthlySmsAllowance: selection.allowance,
        MonthlyPrice: formatMonthlyPrice(selectedPrice)
      } : {}),
      UTMSource: utmValues.current.source || "Not provided",
      UTMMedium: utmValues.current.medium || "Not provided",
      UTMCampaign: utmValues.current.campaign || "Not provided",
      _subject: `Missed Call Recovery Demo Request - ${values.businessName}`,
      _replyto: values.email
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

      trackMetaLeadEvent();
      setStatus("success");
      setValues(defaultValues);
    } catch {
      setStatus("error");
      setErrorMessage(
        "Something went wrong while sending your demo request. Please try again or contact Gareth directly."
      );
    } finally {
      isSubmittingRef.current = false;
    }
  }

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
