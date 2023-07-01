import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { Box, IconButton } from "@mui/material";

function SearchIconClick() {
  return (
    <Box
      component={Link}
      to={"/search"}
      sx={{
        textDecoration: "none",
        color: "inherit",
        display: "flex",
        alignItems: "center",
      }}
    >
      <IconButton size="large" color="inherit">
        <SearchIcon />
      </IconButton>
    </Box>
  );
}

export default SearchIconClick;
