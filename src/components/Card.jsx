import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Card({ data }) {
  const { id, name, img, category, price } = data;

  return (
    <Wrepper className="col-4">
      <Link to={`/${id}`} state={data}>
        <div className="card">
          <img src={img} alt="" width="100%" />
          <div className="card-details">
            <h3>{name}</h3>
            <div className="desc">
              <p>{category}</p>
              <p>${price}</p>
            </div>
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
  img {
    border-radius: 4px;
  }

  .card-details {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px 5px;
    h3 {
      font-size: 18px;
    }
    .desc {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export default Card;
