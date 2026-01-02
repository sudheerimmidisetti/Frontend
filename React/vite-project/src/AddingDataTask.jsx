import React, { useContext, useState } from "react";
import Store from "./Store";

export default function AddDataTask() {
  const [id, setId] = useState("");
  const [desc, setDesc] = useState("");
  const [name, setName] = useState("");
  const [prof, setProf] = useState("");
  const [err, setError] = useState(false);
  const { cards, setCards } = useContext(Store);

  const handleSubmit = (e) => {
    e.preventDefault();

    let duplicateFound = false;
    for (let card of cards) {
      if (card.id === id) {
        duplicateFound = true;
        break;
      }
    }

    if (duplicateFound) {
      setError(true);
      return;
    }

    const newCard = {
      id: id,
      desc: desc,
      name: name,
      Prof: prof,
    };

    setCards((prev) => [...prev, newCard]);
    console.log(cards);
    setError(false);

    setId("");
    setDesc("");
    setName("");
    setProf("");
  };

  return (
    <div>
      AddData
      <form action="" onSubmit={handleSubmit}>
        <label>
          Id:
          <input
            type="number"
            value={id}
            onChange={(e) => setId(parseInt(e.target.value))}
          />
        </label>
        <br />
        <label>
          desc:
          <input
            type="text"
            required
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </label>
        <br />
        <label>
          Name:
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          prof:
          <input
            type="text"
            value={prof}
            onChange={(e) => setProf(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}