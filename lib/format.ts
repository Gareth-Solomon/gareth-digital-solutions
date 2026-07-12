export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    maximumFractionDigits: 0
  }).format(value);
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-ZA", {
    maximumFractionDigits: 0
  }).format(value);
}
