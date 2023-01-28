import React from "react";
import Item from "../components/Item";
import { KidsShoeList } from "../helpers/kidsShoesList";
import "../styles/Item.css";

function Kids() {
  return (
    <div className="main-section">
      <div className="page-title">Sneakers for Kids</div>
      <div className="shoes-list">
        {KidsShoeList.map((shoe, key) => {
          return (
            <Item name={shoe.name} image={shoe.image} price={shoe.price} />
          );
        })}
      </div>
    </div>
  );
}

export default Kids;
