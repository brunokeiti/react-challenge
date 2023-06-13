import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Box,
  CircularProgress,
} from "@mui/material";
import { useGetClientQuery } from "../../redux/services/client";

export const UserPage = () => {
  const { data, error, isLoading } = useGetClientQuery();

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <Card sx={{ width: 400, height: 200, position: "relative" }}>
        <CardContent>
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
            <>
              <Typography variant="subtitle2" align="right">
                {data?.client_id}
              </Typography>
              <Box position="absolute" bottom="15px">
                <Typography variant="h5">{data?.first_name}</Typography>
                <Typography variant="caption">
                  {data?.job_descriptor}
                </Typography>
                <Typography variant="body2">{data?.job}</Typography>
              </Box>
            </>
          ) : null}
        </CardContent>
      </Card>
    </Grid>
  );
};
