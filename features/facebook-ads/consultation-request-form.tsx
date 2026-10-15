"use client";

import { useState } from "react";
import { TextField } from "@/components/ui/text-field";
import { useEnquirySubmission } from "@/features/enquiries/use-enquiry-submission";

const defaultValues = {
  name: "",
  businessName: "",
  email: "",
  phone: "",
  businessArea: "",
  helpWith: ""
};

export function ConsultationRequestForm() {
  const [values, setValues] = useState(defaultValues);
  const { status, errorMessage, handleSubmit } = useEnquirySubmission({
    payload: {
      LeadSource: "Facebook Ads Service Page",
      Name: values.name,
      BusinessName: values.businessName,
      Email: values.email,
      PhoneNumber: values.phone,
      BusinessArea: values.businessArea || "Not provided",
      HelpWith: values.helpWith || "Not provided",
      _subject: `Facebook Ads Consultation Request - ${values.businessName}`,
      _replyto: values.email
    },
    onSuccess: () => setValues(defaultValues),
    errorMessage: "Something went wrong while sending your consultation request. Please try again or contact Gareth directly."
  });

  function updateValue(field: keyof typeof defaultValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4" aria-label="Facebook Ads consultation request form">
      <div className="grid gap-4 sm:grid-cols-2">
        <TextField label="Your Name" value={values.name} required onChange={(value) => updateValue("name", value)} />
        <TextField label="Business Name" value={values.businessName} required onChange={(value) => updateValue("businessName", value)} />
        <TextField label="Email Address" type="email" value={values.email} required onChange={(value) => updateValue("email", value)} />
        <TextField label="Phone Number" type="tel" value={values.phone} required onChange={(value) => updateValue("phone", value)} />
        <div className="sm:col-span-2">
          <TextField label="Business Area (optional)" placeholder="e.g. Durbanville, Cape Town" value={values.businessArea} onChange={(value) => updateValue("businessArea", value)} />
        </div>
        <label className="grid min-w-0 gap-2 text-sm font-bold text-navy sm:col-span-2">
          What would you like help with? (optional)
          <textarea
            value={values.helpWith}
            onChange={(event) => updateValue("helpWith", event.target.value)}
            rows={4}
            className="w-full min-w-0 resize-y rounded-md border border-slate-300 bg-white px-3 py-3 font-sans text-base font-normal focus:border-royal focus:outline-none focus:ring-4 focus:ring-royal/15"
          />
        </label>
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="min-h-[52px] rounded-md bg-royal px-5 text-sm font-black text-white shadow-[0_16px_36px_rgba(0,92,255,0.25)] transition hover:bg-[#0048ce] disabled:cursor-not-allowed disabled:bg-slate-400 sm:text-base"
      >
        {status === "submitting" ? "Sending..." : "Request a Free Consultation"}
      </button>
      {status === "success" ? (
        <p role="status" className="rounded-md bg-green-50 px-4 py-3 text-sm font-semibold text-green-800">
          Thank you. Your consultation request was sent successfully. Gareth will follow up with you soon.
        </p>
      ) : null}
      {status === "error" ? (
        <p role="alert" className="rounded-md bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          {errorMessage}
        </p>
      ) : null}
      <p className="text-center text-xs text-steel">
        Free consultation. No obligation. Your details will only be used to respond to your enquiry.
      </p>
    </form>
  );
}
