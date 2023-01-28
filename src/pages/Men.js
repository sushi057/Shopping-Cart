import React from "react";
import { MenShoesList } from "../helpers/mensShoesList";
import Item from "../components/Item";
import "../styles/Item.css";

function Men() {
  return (
    <div className="main-section">
      <div className="page-title">Sneakers for Men</div>
      <div className="shoes-list">
        {MenShoesList.map((item, key) => {
          return (
            <Item name={item.name} image={item.image} price={item.price} />
          );
        })}
      </div>
    </div>
  );
}

export default Men;
