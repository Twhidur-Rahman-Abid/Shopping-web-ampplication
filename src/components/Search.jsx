import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { cardData } from "../data";

function Search({ searchFilter }) {
  const [search, setSearch] = useState("");
  useEffect(() => {
    searchFilter(search);
  }, [search]);
  return (
    <Wrepper>
      <input
        type="text"
        value={search}
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </Wrepper>
  );
}

const Wrepper = styled.div`
  input {
    border: none;
    padding: 6px;
    border-radius: 4px;
  }
`;

export default Search;
