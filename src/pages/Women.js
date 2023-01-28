import React from "react";
import Item from "../components/Item";
import { WomenShoeList } from "../helpers/womensShoesList";
import "../styles/Item.css";

function Women() {
  return (
    <div className="main-section">
      <div className="page-title">Sneakers for Women</div>
      <div className="shoes-list">
        {WomenShoeList.map((shoe, key) => {
          return (
            <Item name={shoe.name} image={shoe.image} price={shoe.price} />
          );
        })}
      </div>
    </div>
  );
}

export default Women;
