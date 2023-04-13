export interface IOffer {
  insurer: {
    id: string;
    name: string;
  };
  riskProfile: string;
  price: {
    amount: number;
    currency: string;
  };
}
