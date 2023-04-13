import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Box,
  CircularProgress,
} from "@mui/material";

import { io, Socket } from "socket.io-client";

const ENDPOINT = `http://${window.location.hostname}:3003`;

export const UserPage = () => {
  const [client, setClient] = useState<ClientProp>();

  useEffect(() => {
    const socket: Socket<ServerToClientEvents> = io(ENDPOINT);
    socket.on("client-connected", (client) => client && setClient(client));

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <Card sx={{ width: 400, height: 200, position: "relative" }}>
        <CardContent>
          {!client && (
            <Box
              sx={{ display: "flex", height: 160 }}
              alignItems="center"
              justifyContent="center"
            >
              <CircularProgress />
            </Box>
          )}
          {client && (
            <>
              <Typography variant="subtitle2" align="right">
                {client?.client_id}
              </Typography>
              <Box position="absolute" bottom="15px">
                <Typography variant="h5">{client?.first_name}</Typography>
                <Typography variant="caption">
                  {client?.job_descriptor}
                </Typography>
                <Typography variant="body2">{client?.job}</Typography>
              </Box>
            </>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
};

type ClientProp = {
  client_id: string;
  first_name: string;
  job: string;
  job_descriptor: string;
};

interface ServerToClientEvents {
  "client-connected": (a: ClientProp) => void;
}
