import { useParams } from "react-router-dom";
import { useContext } from "react";
import Store from "./Store";

export default function ProductDetails() {
  const { id } = useParams();
  const parsedId = parseInt(id, 10);
  const { cards } = useContext(Store);
  console.log(cards);

  const card = cards.find((card) => card.id === parsedId);

  if (!card) {
    return <div>Card not found for id: {id}</div>;
  }

  return (
    <div>
      ProductDetails
      <div
        key={card.id}
        id={card.id}
        style={{
          border: "1px solid black",
          padding: "10px",
          margin: "10px",
          cursor: "pointer",
        }}
      >
        <h1>{card.name}</h1>
        <h2>{card.desc}</h2>
        <h3>{card.Prof}</h3>
      </div>
    </div>
  );
}