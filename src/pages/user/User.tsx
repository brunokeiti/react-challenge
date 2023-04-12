import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";

import { io, Socket } from "socket.io-client";

const ENDPOINT = `http://${window.location.hostname}:3003`;

export const User = () => {
  const [client, setClient] = useState<ClientProp>();

  useEffect(() => {
    const socket: Socket<ServerToClientEvents> = io(ENDPOINT);
    socket.on("client-connected", (client) => client && setClient(client));

    return () => {
      socket.disconnect();
    };
  }, []);

  if (!client) {
    return <Typography>There's no one client connected at moment</Typography>;
  }

  return <Typography>Client Connected: {client?.first_name}</Typography>;
};

type ClientProp = {
  client_id: string;
  first_name: string;
  job: string;
  job_description: string;
};

interface ServerToClientEvents {
  "client-connected": (a: ClientProp) => void;
}
