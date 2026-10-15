"use client";

import { type FormEvent, useRef, useState } from "react";
import { siteConfig } from "@/config/site";
import { trackMetaLeadEvent } from "@/lib/meta-pixel";

function getUtmValues() {
  const params = new URLSearchParams(typeof window === "undefined" ? "" : window.location.search);
  return {
    UTMSource: params.get("utm_source") || "Not provided",
    UTMMedium: params.get("utm_medium") || "Not provided",
    UTMCampaign: params.get("utm_campaign") || "Not provided"
  };
}

type EnquirySubmissionOptions = {
  payload: Record<string, string | number>;
  onSuccess: () => void;
  errorMessage: string;
};

export function useEnquirySubmission({ payload, onSuccess, errorMessage }: EnquirySubmissionOptions) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [submissionError, setSubmissionError] = useState("");
  const isSubmittingRef = useRef(false);
  const utmValues = useRef(getUtmValues());

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmittingRef.current) return;

    isSubmittingRef.current = true;
    setStatus("submitting");
    setSubmissionError("");

    try {
      const response = await fetch(siteConfig.formspreeEndpoint, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, ...utmValues.current })
      });

      if (!response.ok) throw new Error("Formspree did not accept the submission.");

      trackMetaLeadEvent();
      setStatus("success");
      onSuccess();
    } catch {
      setStatus("error");
      setSubmissionError(errorMessage);
    } finally {
      isSubmittingRef.current = false;
    }
  }

  return { status, errorMessage: submissionError, handleSubmit };
}
