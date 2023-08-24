import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";

const SearchBar = ({
  validateSearch,
  parameter,
  filter,
  order,
  history,
  home,
}) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleKeyPress = (e) => {
    validateSearch(e, parameter, filter, order);
    if (e.key !== "Enter") {
      return;
    } else if (home && e.key === "Enter" && e.target.value !== "") {
      history.push("/search");
    } else {
      e.preventDefault();
    }
  };

  return (
    <form autoComplete="off">
      <TextField
        label="Search for a book"
        id="q_book"
        onKeyPress={(e) => handleKeyPress(e)}
        onChange={(e) => handleChange(e)}
        fullWidth={true}
        margin="normal"
        value={searchValue}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={(e) => {
          const isValid = validateSearch(e, filter);
          if (isValid) {
            history.push("/search?q="+searchValue);
          }
        }}
      >
        Search
      </Button>
    </form>
  );
};

export default withRouter(SearchBar);
