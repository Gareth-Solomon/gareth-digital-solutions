"use client";

import { useState } from "react";
import { TextField } from "@/components/ui/text-field";
import { useEnquirySubmission } from "@/features/enquiries/use-enquiry-submission";

const defaults = { name: "", businessName: "", email: "", phone: "", website: "", requirements: "" };
const packageNames = { bronze: "Bronze — Get Found Package", silver: "Silver — Get Calls Package", gold: "Gold — Get Booked Package" };
export type PackageTopic = keyof typeof packageNames;

export function PackageEnquiryForm({ topic }: { topic: PackageTopic }) {
  const [values, setValues] = useState(defaults);
  const { status, errorMessage, handleSubmit } = useEnquirySubmission({
    payload: {
      LeadSource: "Packages Page",
      SelectedPackage: packageNames[topic],
      ...(topic === "bronze" ? { PackagePrice: "R3,999 once-off (Launch Price)" } : {}),
      Name: values.name, BusinessName: values.businessName, Email: values.email,
      PhoneNumber: values.phone, ExistingWebsite: values.website || "Not provided",
      Requirements: values.requirements || "Not provided",
      _subject: `${packageNames[topic]} Enquiry - ${values.businessName}`,
      _replyto: values.email
    },
    onSuccess: () => setValues(defaults),
    errorMessage: "Something went wrong while sending your enquiry. Please try again or contact Gareth directly."
  });
  function update(field: keyof typeof defaults, value: string) {
    setValues(current => ({ ...current, [field]: value }));
  }
  if (status === "success") return (
    <p role="status" className="rounded-md bg-green-50 px-4 py-3 font-semibold leading-7 text-green-800">
      Thank you for your enquiry! We&apos;ll review your requirements and get back to you to discuss the next steps.
    </p>
  );
  return (
    <form aria-label="Package enquiry form" onSubmit={handleSubmit} className="grid gap-4">
      <p className="rounded-md bg-mist p-4 font-bold text-navy">Enquiry: {packageNames[topic]}</p>
      <fieldset disabled={status === "submitting"} className="grid min-w-0 gap-4 sm:grid-cols-2">
        <legend className="sr-only">Your business and contact details</legend>
        <TextField label="Full name" required value={values.name} onChange={v => update("name", v)} />
        <TextField label="Business name" required value={values.businessName} onChange={v => update("businessName", v)} />
        <TextField label="Email address" type="email" required value={values.email} onChange={v => update("email", v)} />
        <TextField label="Contact number" type="tel" pattern={String.raw`\+?(?:[\s\-\(\)\.]*[0-9]){7,15}[\s\-\(\)\.]*`} title="Enter a phone number with 7–15 digits. You can include a leading +, spaces, brackets, hyphens or dots." required value={values.phone} onChange={v => update("phone", v)} />
        <label className="grid min-w-0 gap-2 text-sm font-bold text-navy sm:col-span-2">
          Do you already have a website?
          <select value={values.website} onChange={e => update("website", e.target.value)} className="min-h-12 w-full rounded-md border border-slate-300 bg-white px-3 text-base focus:border-royal focus:outline-none focus:ring-4 focus:ring-royal/15">
            <option value="">Please select</option><option>Yes</option><option>No</option>
          </select>
        </label>
        <label className="grid min-w-0 gap-2 text-sm font-bold text-navy sm:col-span-2">
          Briefly tell us about your business and what you need (optional)
          <textarea value={values.requirements} onChange={e => update("requirements", e.target.value)} rows={4} className="w-full min-w-0 resize-y rounded-md border border-slate-300 bg-white px-3 py-3 text-base font-normal focus:border-royal focus:outline-none focus:ring-4 focus:ring-royal/15" />
        </label>
      </fieldset>
      <button type="submit" disabled={status === "submitting"} className="min-h-[52px] rounded-md bg-royal px-5 text-sm font-black text-white shadow-[0_16px_36px_rgba(0,92,255,0.25)] transition hover:bg-[#0048ce] disabled:cursor-not-allowed disabled:bg-slate-400 sm:text-base">
        {status === "submitting" ? "Sending..." : "Send My Enquiry"}
      </button>
      {status === "error" && <p role="alert" className="rounded-md bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{errorMessage}</p>}
      <p className="text-center text-xs leading-6 text-steel">Your details will only be used to respond to your enquiry and discuss your requirements. Submitting this form does not trigger a payment.</p>
    </form>
  );
}
