import { Link } from "react-router-dom";
import { Grid, Typography, Button, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const HomePage = () => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <Box flexDirection="column">
        <Typography variant="h2" color="#fff" textAlign="center">
          Tech Challenge
        </Typography>
        <Box flexDirection="row">
          <Link to={"/user"} style={{ textDecoration: "none" }}>
            <StyledButton variant="outlined">User</StyledButton>
          </Link>
          <Link to={"/table"} style={{ textDecoration: "none" }}>
            <StyledButton variant="outlined">Table</StyledButton>
          </Link>
        </Box>
      </Box>
    </Grid>
  );
};

const StyledButton = styled(Button)({
  textTransform: "none",
  fontSize: 24,
  padding: "1.5rem 3rem",
  margin: "2rem",
  border: "1px solid",
  lineHeight: 1.5,
  borderColor: "#0063cc",
  color: "#fff",
  transition: "all .2s ease-in-out",
  "&:hover": {
    transform: "scale(1.1)",
  },
});
