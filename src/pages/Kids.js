import React from "react";
import Item from "../components/Item";
import { KidsShoeList } from "../helpers/kidsShoesList";

function Kids() {
  return (
    <div className="kids-shoes">
      <div className="menu-title">Sneakers for Kids</div>
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
