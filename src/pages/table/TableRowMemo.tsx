import React, { memo } from "react";
import { TableRow } from "@mui/material";
import { StyledTableCell } from "./styled";
import { TableMemoProps } from "../../redux/services/marketData";

const TableRowMemo = ({ row }: TableMemoProps) => {
  console.log(`test rerender: ${row.credit_card_number}-${row.amount}`);
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <StyledTableCell component="th" scope="row">
        {row.account_name}
      </StyledTableCell>
      <StyledTableCell>{row.amount}</StyledTableCell>
      <StyledTableCell>{row.currency_name}</StyledTableCell>
      <StyledTableCell>{row.transaction_type}</StyledTableCell>
      <StyledTableCell>{row.transaction_description}</StyledTableCell>
      <StyledTableCell>{row.credit_card_number}</StyledTableCell>
      <StyledTableCell>{row.credit_card_issuer}</StyledTableCell>
      <StyledTableCell>{row.credit_card_cvv}</StyledTableCell>
    </TableRow>
  );
};

export default memo(TableRowMemo);
