import React, { useContext } from "react";
import styled from "styled-components";

import { add_action } from "../state/action";
import { cartContext } from "../state/cardContex";

function ProductContent({ locations }) {
  const { cardDispatch, cartData } = cartContext();
  const { img, name, price, category, color } = locations.state;
  console.log(cartData);
  return (
    <Row>
      <div className="col">
        <img src={img} alt="" width="100%" />
      </div>
      <div className="col">
        <div className="desc">
          <table>
            <tr>
              <td>Name</td>
              <td>:</td>
              <td>{name}</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>:</td>
              <td>${price}</td>
            </tr>
            <tr>
              <td>Category</td>
              <td>:</td>
              <td>{category}</td>
            </tr>
            {color && (
              <tr>
                <td>Color</td>
                <td>:</td>
                <td>{color}</td>
              </tr>
            )}
            <tr>
              <td>Delivery</td>
              <td>:</td>
              <td>2 Hours</td>
            </tr>
          </table>
        </div>

        <button
          onClick={() => cardDispatch(add_action(locations.state, cartData))}
        >
          Add to card
        </button>
      </div>
    </Row>
  );
}

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-wrap: wrap;
  .col {
    flex-basis: 45%;
    .desc {
      table {
        tr {
          margin-bottom: 20px;
          td {
            padding: 5px;
          }
        }
      }
    }
  }
  button {
    padding: 5px 8px;
    margin-top: 10px;
  }

  @media (max-width: 560px) {
    .col {
      flex-basis: 100%;
    }
  }
`;

export default ProductContent;
