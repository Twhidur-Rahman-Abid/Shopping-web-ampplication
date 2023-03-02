import React from "react";
import styled from "styled-components";

// Material icons
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import DisabledByDefaultRoundedIcon from "@mui/icons-material/DisabledByDefaultRounded";

// cart state
import { add_action, remove, remove_action } from "../state/action";
import { cartContext } from "../state/cardContex";

function Cart() {
  const { cartData, totalPrice, cardDispatch } = cartContext();

  return (
    <Wrepper>
      <div className="container">
        {cartData.length > 0 ? (
          <div>
            <table border="1px solid #ccc ">
              <tr>
                <td className="tableData">Remove</td>
                <td className="tableData">Image</td>
                <td className="tableData">Product</td>
                <td className="tableData">Price</td>
                <td className="tableData">Quantity</td>
              </tr>
              {cartData.map((x) => (
                <tr>
                  <td className="tableData">
                    <DisabledByDefaultRoundedIcon
                      sx={{ color: "red" }}
                      onClick={() => cardDispatch(remove(x.id, cartData))}
                    />
                  </td>
                  <td className="tableData">
                    <img src={x.img} alt="" width="60px" />
                  </td>
                  <td className="tableData">{x.name}</td>
                  <td className="tableData">{x.price}</td>
                  <td className="tableData qty">
                    <div className="qty-data">
                      <button
                        onClick={() => cardDispatch(add_action(x, cartData))}
                      >
                        <AddBoxIcon sx={{ color: "#362" }} />
                      </button>
                      <p>{x.qty}</p>
                      <button
                        onClick={() => cardDispatch(remove_action(x, cartData))}
                      >
                        <IndeterminateCheckBoxIcon sx={{ color: "red" }} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </table>

            <div className="priceing">
              <table>
                <tr>
                  <td>Total Price</td>
                  <td> : </td>
                  <td>{totalPrice}</td>
                </tr>

                <tr>
                  <td>Vat</td>
                  <td> : </td>
                  <td>00</td>
                </tr>

                <tr>
                  <td>Delivery</td>
                  <td> : </td>
                  <td>00</td>
                </tr>
              </table>
              <hr />
              <h3>Total : {totalPrice}</h3>
            </div>
          </div>
        ) : (
          <h1>cart is empty</h1>
        )}
      </div>
    </Wrepper>
  );
}

const Wrepper = styled.div`
  margin-top: 40px;
  table {
    border-collapse: collapse;

    .tableData {
      padding: 10px 60px;
      text-align: center;
      font-size: 24px;
    }
    .qty {
      .qty-data {
        display: flex;
        align-items: center;
        gap: 5px;
      }
      button {
        border: none;
        background: transparent;
        i {
          font-size: 24px;
          margin: 10px;
        }
      }
    }
  }

  .priceing {
    margin-top: 30px;
    hr {
      width: 200px;
      margin: 10px 0;
    }
    table {
      td {
        padding: 5px;
        padding-left: 0;
      }
    }
  }

  @media (max-width: 1000px) {
    table {
      .tableData {
        padding: 10px 30px;
      }
    }
  }

  @media (max-width: 780px) {
    table {
      .tableData {
        padding: 10px;
      }
    }
  }

  @media (max-width: 560px) {
    table {
      .tableData {
        padding: 5px;

        font-size: 14px;
      }
    }
  }
`;

export default Cart;
