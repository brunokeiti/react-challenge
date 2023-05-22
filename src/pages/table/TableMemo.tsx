import React, { memo } from "react";
import { TableRow } from "@mui/material";
import { StyledTableCell } from "./styled";
import { TableMemoProps } from "./interfaces";

const TableMemo = ({ dataTable, searchParam }: TableMemoProps) => {
  return (
    <>
      {dataTable.map((row, index) => {
        if (
          searchParam &&
          searchParam?.length > 0 &&
          !Object.values(row).find((elem) =>
            elem.toLowerCase().match(searchParam.toLowerCase())
          )
        ) {
          return null;
        }

        return (
          <TableRow
            key={index}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
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
      })}
    </>
  );
};

export default memo(TableMemo);
