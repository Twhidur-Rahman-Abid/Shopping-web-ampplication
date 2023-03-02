// another card component for list views

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function CardListViwe({ data }) {
  const { id, name, img, category, price } = data;

  return (
    <Wrepper>
      <Link to={`/${id}`} state={data}>
        <div className="listCard">
          <div className="img">
            {" "}
            <img src={img} alt="" width="100%" />
          </div>
          <div className="card-details">
            <h3>{name}</h3>

            <p>{category}</p>
            <p>${price}</p>
          </div>
        </div>
      </Link>
    </Wrepper>
  );
}

const Wrepper = styled.div`
  border: 4px solid #fff;
  border-radius: 10px;
  margin-bottom: 25px;

  h3,
  p {
    color: #444;
  }

  .listCard {
    display: flex;
    .img {
      flex-basis: 50%;
      border-radius: 4px;

      img {
        border-radius: 4px;
      }
    }
    .card-details {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex-basis: 50%;
      gap: 10px;
      padding-left: 20px;
      h3 {
        font-size: 18px;
      }
    }
  }

  @media (min-width: 720px) {
    width: 600px;
  }
`;

export default CardListViwe;
