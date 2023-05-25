import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TableRowMemo from "./TableRowMemo";
import { MarketDataProp } from "./interfaces";

it("Render row info", async () => {
  const info: MarketDataProp = {
    account_name: "Personal Loan Account",
    amount: "890.86",
    credit_card_cvv: "248",
    credit_card_issuer: "maestro",
    credit_card_number: "6370-9605-9936-9733",
    currency_name: "Pataca",
    transaction_description: "payment transaction at Greenfelder",
    transaction_type: "withdrawal",
  };
  render(<TableRowMemo row={info} />);
  Object.keys(info).forEach(function (key) {
    expect(screen.getByText(info[key as keyof MarketDataProp])).toBeVisible();
  });
});
