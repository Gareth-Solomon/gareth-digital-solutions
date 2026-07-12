import type { EstimatorInputs, EstimatorResults } from "./types";

export const WORKING_DAYS_PER_MONTH = 22;

export function calculateMissedCallOpportunity(
  inputs: EstimatorInputs
): EstimatorResults {
  const missedCallsPerMonth = inputs.missedCallsPerDay * WORKING_DAYS_PER_MONTH;
  const estimatedCustomersLost =
    missedCallsPerMonth * (inputs.conversionPercentage / 100);
  const monthlyOpportunity = estimatedCustomersLost * inputs.averageCustomerValue;

  return {
    missedCallsPerMonth,
    estimatedCustomersLost,
    monthlyOpportunity,
    annualOpportunity: monthlyOpportunity * 12
  };
}
