import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Store from "./Store";

export default function Product() {
  const nav = useNavigate();
  const { cards } = useContext(Store);
  const handleClick = (id) => {
    nav(`/ProductDetails/${id}`);
  };
  return (
    <div>
      Product
      {/* <h1>hii</h1> */}
      {cards.map((card) => {
        return (
          <div
            key={card.id}
            id={card.id}
            style={{
              border: "1px solid black",
              padding: "10px",
              margin: "10px",
              cursor: "pointer",
            }}
            onClick={(e) => handleClick(card.id)}
          >
            <h1>{card.name}</h1>
            <h2>{card.desc} </h2>
            <h3>{card.Prof} </h3>
          </div>
        );
      })}
    </div>
  );
}