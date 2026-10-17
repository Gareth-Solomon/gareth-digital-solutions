export const basicSmsAllowances = [25, 50, 100, 150] as const;
export const plusSmsAllowances = [100, 150] as const;
export type SmsAllowance = (typeof basicSmsAllowances)[number];
export type PlusSmsAllowance = (typeof plusSmsAllowances)[number];
export type LeadRevivaPlan = "basic" | "plus";

export const leadRevivaPlans = {
  basic: { name: "Basic", prices: { 25: 399, 50: 499, 100: 799, 150: 999 } },
  plus: { name: "Plus", prices: { 100: 1099, 150: 1399 } }
} as const;

export type LeadRevivaSelection =
  | { plan: "basic"; allowance: SmsAllowance }
  | { plan: "plus"; allowance: PlusSmsAllowance };

export function getLeadRevivaPrice(selection: LeadRevivaSelection) {
  return selection.plan === "basic"
    ? leadRevivaPlans.basic.prices[selection.allowance]
    : leadRevivaPlans.plus.prices[selection.allowance];
}

export function formatMonthlyPrice(price: number) {
  return `R${price.toLocaleString("en-US")}/month`;
}

export function getLeadRevivaSelection(
  plan: string | string[] | undefined,
  sms: string | string[] | undefined
): LeadRevivaSelection | undefined {
  if (plan === "basic") {
    const allowance = basicSmsAllowances.find((value) => String(value) === sms);
    if (allowance !== undefined) return { plan, allowance };
  }
  if (plan === "plus") {
    const allowance = plusSmsAllowances.find((value) => String(value) === sms);
    if (allowance !== undefined) return { plan, allowance };
  }
}
