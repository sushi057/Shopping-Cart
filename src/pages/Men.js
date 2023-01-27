import React from "react";
import { MenShoesList } from "../helpers/mensShoesList";
import Item from "../components/Item";

function Men() {
  return (
    <div className="mens-shoes">
      <div className="menu-title">Sneakers for Men</div>
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
