import React, { useState } from "react";
import "./styles.css";
import SearchIcon from "@mui/icons-material/Search";

function Search({ search, handleChange }) {
  return (
    <div className="search-flex">
      <SearchIcon sx={{ color: "var(--grey)", fontSize: "1.2rem" }} />
      <input
        className="search-input"
        placeholder="Search cryptocurrencies..."
        value={search}
        onChange={(e) => handleChange(e)}
        aria-label="Search cryptocurrencies by name or symbol"
      />
    </div>
  );
}

export default Search;
