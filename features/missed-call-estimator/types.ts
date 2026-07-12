export type EstimatorInputs = {
  callsPerDay: number;
  missedCallsPerDay: number;
  averageCustomerValue: number;
  conversionPercentage: number;
};

export type EstimatorResults = {
  missedCallsPerMonth: number;
  estimatedCustomersLost: number;
  monthlyOpportunity: number;
  annualOpportunity: number;
};

export type LeadFormValues = {
  name: string;
  businessName: string;
  email: string;
  phone: string;
};
