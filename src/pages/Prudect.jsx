import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import ProductContent from "../components/ProductContent";

function Prudect() {
  const locations = useLocation();

  return (
    <Wrepper>
      <div className="container">
        <ProductContent locations={locations} />
      </div>
    </Wrepper>
  );
}

const Wrepper = styled.section`
  margin-top: 40px;
`;
export default Prudect;
