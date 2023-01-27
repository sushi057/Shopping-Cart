import React from "react";

function Item(name, image, price) {
  return (
    <div>
      <img src={image} alt={image} />
      <h3>{name}</h3>
      <h4>{price}</h4>
    </div>
  );
}

export default Item;
