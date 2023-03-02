import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { cartContext } from "../state/cardContex";

function Navber() {
  const { totalCart } = cartContext();
  return (
    <Wrepper>
      <div className="container">
        <div className="row">
          <NavLink className="nav__link" to="/">
            <HomeRoundedIcon fontSize="large" />
          </NavLink>
          <div className="nav__item cart">
            <NavLink className="nav__link " to="/cart">
              <ShoppingCart fontSize="large" content="3" />
            </NavLink>
            <span>{totalCart}</span>
          </div>
        </div>
      </div>
    </Wrepper>
  );
}

const Wrepper = styled.nav`
  background: #a9927d;
  padding: 10px 0 10px;
  svg {
    color: #49111c;
  }
  .logo {
    font-size: 34px;
    color: #49111c;

    font-weight: 600;
    span {
      color: #0a0908;
    }
  }

  .nav__item {
    display: flex;
    gap: 40px;
    .nav__link {
      font-size: 24px;
      color: #0a0908;
    }
  }
  .cart {
    position: relative;
    span {
      position: absolute;
      right: -6px;
      top: -5px;
      font-size: 18px;
      font-weight: 600;
      color: #0a0908;
    }
  }
`;

export default Navber;
