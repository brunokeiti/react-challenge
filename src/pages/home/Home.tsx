import { Link } from "react-router-dom";
import { Grid, Typography, Button, Box } from "@mui/material";

export const Home = () => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      flexDirection="column"
    >
      <Typography variant="h2" color="#fff">
        Tech Challenge
      </Typography>
      <Box flexDirection="row">
        <Link to={"/user"} style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            size="large"
            sx={{ m: 3, py: 3, width: "200px" }}
          >
            User
          </Button>
        </Link>
        <Link to={"/table"} style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            size="large"
            sx={{ m: 3, py: 3, width: "200px" }}
          >
            Table
          </Button>
        </Link>
      </Box>
    </Grid>
  );
};
