import React, { useEffect, useState, useRef, useCallback } from "react";
import {
  Box,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { io, Socket } from "socket.io-client";
import { StyledTableCell, StyledTextField } from "./styled";
import TableRowMemo from "./TableRowMemo";
import { MarketDataProp, ServerToClientEvents } from "./interfaces";

const ENDPOINT = `http://${window.location.hostname}:3003`;

export const TablePage = () => {
  const socketIo = useRef<Socket<ServerToClientEvents> | null>(null);
  const [dataTable, setDataTable] = useState<MarketDataProp[]>([]);
  const [searchParam, setSearchParam] = useState<string>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchParam(event.target.value);
  };

  const addNewData = useCallback(
    (data: MarketDataProp) => {
      setDataTable([...dataTable, data]);
    },
    [dataTable]
  );

  useEffect(() => {
    socketIo.current = io(ENDPOINT);

    socketIo.current.on("market-data", (data: MarketDataProp) => {
      console.log(data);
      addNewData(data);
    });

    return () => {
      socketIo.current?.disconnect();
    };
  }, [addNewData]);

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
            {dataTable.map((row) => {
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
      </TableContainer>
    </Box>
  );
};
