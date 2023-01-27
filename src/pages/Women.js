import React from "react";
import Item from "../components/Item";
import { WomenShoeList } from "../helpers/womensShoesList";

function Women() {
  return (
    <div className="womens-shoes">
      <div className="menu-title">Sneakers for Women</div>
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
