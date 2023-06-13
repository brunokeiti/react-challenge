import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { io, Socket } from "socket.io-client";

const ENDPOINT = `http://${window.location.hostname}:3003`;

export const marketDataApi = createApi({
  reducerPath: "marketDataApi",
  baseQuery: fetchBaseQuery({ baseUrl: ENDPOINT, credentials: "include" }),
  endpoints: (builder) => ({
    getMarketData: builder.query<MarketDataProp[], void>({
      queryFn: () => ({
        data: [],
      }),
      async onCacheEntryAdded(
        arg,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      ) {
        try {
          await cacheDataLoaded;
          const socket: Socket<ServerToClientEvents> = io(ENDPOINT);
          socket.on("market-data", (data: MarketDataProp) => {
            console.log(data);
            updateCachedData((draft) => {
              draft.push(data);
            });
          });

          await cacheEntryRemoved;
          socket.disconnect();
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});

export const { useGetMarketDataQuery } = marketDataApi;

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
  row: MarketDataProp;
}
