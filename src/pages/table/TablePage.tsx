import React, { useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { StyledTableCell, StyledTextField } from "./styled";
import { useGetMarketDataQuery } from "../../redux/services/marketData";
import TableRowMemo from "./TableRowMemo";

export const TablePage = () => {
  const [searchParam, setSearchParam] = useState<string>();
  const { data, error, isLoading } = useGetMarketDataQuery();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchParam(event.target.value);
  };

  return (
    <Box sx={{ p: 8 }}>
      <StyledTextField
        size="small"
        variant="outlined"
        onChange={handleChange}
        InputProps={{
          endAdornment: <SearchIcon />,
        }}
      />
      <TableContainer>
        {error ? (
          <h1>Oh no! Anyway...</h1>
        ) : isLoading ? (
          <Box
            sx={{ display: "flex", height: 160 }}
            alignItems="center"
            justifyContent="center"
          >
            <CircularProgress />
          </Box>
        ) : data ? (
          <Table sx={{ minWidth: 650 }} size="small">
            <TableHead>
              <TableRow>
                <StyledTableCell>Account Name</StyledTableCell>
                <StyledTableCell>Amount</StyledTableCell>
                <StyledTableCell>Currency Name</StyledTableCell>
                <StyledTableCell>Transaction Type</StyledTableCell>
                <StyledTableCell>Transaction Description</StyledTableCell>
                <StyledTableCell>Credit Card Number</StyledTableCell>
                <StyledTableCell>Credit Card Issuer</StyledTableCell>
                <StyledTableCell>Credit Card CVV</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => {
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
                  <TableRowMemo
                    row={row}
                    key={`${row.credit_card_number}-${row.amount}`}
                  />
                );
              })}
            </TableBody>
          </Table>
        ) : null}
      </TableContainer>
    </Box>
  );
};
