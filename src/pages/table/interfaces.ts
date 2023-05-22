export type MarketDataProp = {
  account_name: string;
  amount: string;
  credit_card_cvv: string;
  credit_card_issuer: string;
  credit_card_number: string;
  currency_name: string;
  transaction_description: string;
  transaction_type: string;
};

export interface ServerToClientEvents {
  "market-data": (data: MarketDataProp) => void;
}

export interface TableMemoProps {
  dataTable: MarketDataProp[];
  searchParam: string | undefined;
}
