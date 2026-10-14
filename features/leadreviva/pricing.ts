export type SmsAllowance = 100 | 150;
export type LeadRevivaPlan = "basic" | "plus";

export const leadRevivaPlans = {
  basic: { name: "Basic", prices: { 100: 799, 150: 999 } },
  plus: { name: "Plus", prices: { 100: 1099, 150: 1399 } }
} as const;

export type LeadRevivaSelection = {
  plan: LeadRevivaPlan;
  allowance: SmsAllowance;
};

export function formatMonthlyPrice(price: number) {
  return `R${price.toLocaleString("en-US")}/month`;
}

export function getLeadRevivaSelection(
  plan: string | string[] | undefined,
  sms: string | string[] | undefined
): LeadRevivaSelection | undefined {
  if ((plan === "basic" || plan === "plus") && (sms === "100" || sms === "150")) {
    return { plan, allowance: sms === "100" ? 100 : 150 };
  }
}
