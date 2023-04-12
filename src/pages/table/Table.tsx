import React, { useEffect, useState, useRef } from "react";
import { Typography } from "@mui/material";

import { io, Socket } from "socket.io-client";

const ENDPOINT = `http://${window.location.hostname}:3003`;

export const Table = () => {
  const socketIo = useRef<Socket<ServerToClientEvents> | null>(null);
  const [dataTable, setDataTable] = useState<MarketDataProp>();

  useEffect(() => {
    socketIo.current = io(ENDPOINT);

    socketIo.current.on("market-data", (data: MarketDataProp) => {
      setDataTable(data);
    });

    return () => {
      socketIo.current?.disconnect();
    };
  }, []);

  useEffect(() => {
    console.log(dataTable);
  }, [dataTable]);

  return <Typography>Table {dataTable?.account_name}</Typography>;
};

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
