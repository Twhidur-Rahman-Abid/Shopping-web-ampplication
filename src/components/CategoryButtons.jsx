// category component for buttons
import React from "react";
import styled from "styled-components";

import { cardData } from "../data";
// search category for category button
const buttonData = ["All", ...new Set(cardData.map((data) => data.category))];

function CategoryButtons({ filterdata }) {
  console.log(buttonData);
  return (
    <Wrepper>
      {buttonData.map((data, index) => (
        <button key={index} onClick={() => filterdata(data)}>
          {data}
        </button>
      ))}
    </Wrepper>
  );
}

const Wrepper = styled.section`
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  button {
    padding: 8px 13px;
    border: 2px solid #5e503f;
  }

  @media (max-width: 630px) {
    gap: 20px;
    button {
      padding: 5px 8px;
    }
  }

  @media (max-width: 430px) {
    gap: 10px;
    button {
      padding: 5px 8px;
    }
  }
`;

export default React.memo(CategoryButtons);
