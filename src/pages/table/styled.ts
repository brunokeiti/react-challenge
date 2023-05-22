import { styled } from "@mui/material/styles";
import { TableCell, TextField } from "@mui/material";

export const StyledTextField = styled(TextField)({
  marginBottom: "1rem",
  "> div": {
    backgroundColor: "#fff",
  },
});

export const StyledTableCell = styled(TableCell)({
  color: "#fff",
});
