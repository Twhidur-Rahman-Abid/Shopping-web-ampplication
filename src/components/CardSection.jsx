import React, { useState } from "react";

import styled from "styled-components";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";

import { cardData } from "../data";
import CategoryButtons from "./categoryButtons";
import Card from "./Card";
import CardListViwe from "./CardListViwe";
import Search from "./Search";

function CardSection() {
  const [card, setCard] = useState(cardData);
  const [isList, setIsList] = useState(false);

  const searchFilter = (data) => {
    console.log(data);
    const filter = cardData.filter((x) => x.name.toLowerCase().includes(data));
    setCard(filter);
  };

  const filterdata = (data) => {
    console.log(data);
    const filterCard = cardData.filter((x) => {
      if (data === "All") {
        return cardData;
      } else {
        return x.category === data;
      }
    });
    setCard(filterCard);
  };

  return (
    <Wrepper>
      <div className="container">
        <CategoryButtons filterdata={filterdata} />
        <div className="card-section__top">
          <div>
            {isList ? (
              <ViewModuleIcon
                fontSize="large"
                sx={{ cursor: "pointer", color: "#49111c" }}
                onClick={() => setIsList(!isList)}
              />
            ) : (
              <ViewListIcon
                fontSize="large"
                sx={{ cursor: "pointer", color: "#49111c" }}
                onClick={() => setIsList(!isList)}
              />
            )}
          </div>
          <Search searchFilter={searchFilter} />
        </div>

        <div className={isList ? "list" : "row"}>
          {!isList
            ? card.map((data) => <Card key={data.id} data={data} />)
            : card.map((data) => <CardListViwe key={data.id} data={data} />)}
        </div>
      </div>
    </Wrepper>
  );
}

const Wrepper = styled.section`
  margin-top: 40px;
  .card-section__top {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: start;
  }
  .list {
    display: flex;
    flex-direction: column;
  }
  .row {
    display: flex;
    justify-content: space-between;
    align-items: start;
  }
`;

export default CardSection;
