import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { io, Socket } from "socket.io-client";

const ENDPOINT = `http://${window.location.hostname}:3003`;

export const clientApi = createApi({
  reducerPath: "clientApi",
  baseQuery: fetchBaseQuery({ baseUrl: ENDPOINT, credentials: "include" }),
  endpoints: (builder) => ({
    getClient: builder.query<ClientProp, void>({
      queryFn: () => ({
        data: {
          client_id: "",
          first_name: "",
          job: "",
          job_descriptor: "",
        },
      }),
      async onCacheEntryAdded(
        arg,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      ) {
        try {
          await cacheDataLoaded;

          const socket: Socket<ServerToClientEvents> = io(ENDPOINT);
          socket.on("client-connected", (client) => {
            updateCachedData(() => {
              return client;
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

export const { useGetClientQuery } = clientApi;

type ClientProp = {
  client_id: string;
  first_name: string;
  job: string;
  job_descriptor: string;
};

interface ServerToClientEvents {
  "client-connected": (a: ClientProp) => void;
}
