import React from "react";

function Item({ name, image, price }) {
  return (
    <div>
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h3>{name}</h3>
      <h4>${price}</h4>
    </div>
  );
}

export default Item;
