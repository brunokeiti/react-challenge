import React, { useEffect, useState, useRef } from "react";
import {
  Box,
  Table,
  TableBody,
  TableContainer,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { io, Socket } from "socket.io-client";

const ENDPOINT = `http://${window.location.hostname}:3003`;

export const TablePage = () => {
  const socketIo = useRef<Socket<ServerToClientEvents> | null>(null);
  const [newData, setNewData] = useState<MarketDataProp>();
  const [dataTable, setDataTable] = useState<MarketDataProp[]>([]);
  const [searchParam, setSearchParam] = useState<string>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchParam(event.target.value);
  };

  useEffect(() => {
    socketIo.current = io(ENDPOINT);

    socketIo.current.on("market-data", (data: MarketDataProp) => {
      console.log(data);
      setNewData(data);
    });

    return () => {
      socketIo.current?.disconnect();
    };
  }, []);

  useEffect(() => {
    if (newData) {
      setDataTable((prev) => {
        const updatedDataTable = [...prev];
        updatedDataTable.push(newData);
        return updatedDataTable;
      });
    }
  }, [newData]);

  return (
    <Box sx={{ p: 6 }}>
      <StyledTextField
        size="small"
        variant="outlined"
        onChange={handleChange}
        InputProps={{
          endAdornment: <SearchIcon />,
        }}
      />
      <TableContainer>
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
                  <StyledTableCell>
                    {row.transaction_description}
                  </StyledTableCell>
                  <StyledTableCell>{row.credit_card_number}</StyledTableCell>
                  <StyledTableCell>{row.credit_card_issuer}</StyledTableCell>
                  <StyledTableCell>{row.credit_card_cvv}</StyledTableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

const StyledTextField = styled(TextField)({
  marginBottom: "1rem",
  "> div": {
    backgroundColor: "#fff",
  },
});

const StyledTableCell = styled(TableCell)({
  color: "#fff",
});

type MarketDataProp = {
  account_name: string;
  amount: string;
  credit_card_cvv: string;
  credit_card_issuer: string;
  credit_card_number: string;
  currency_name: string;
  transaction_description: string;
  transaction_type: string;
};

interface ServerToClientEvents {
  "market-data": (data: MarketDataProp) => void;
}
