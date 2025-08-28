import React, { useRef, useState } from "react";
import Card from "./Card";

const Foreground = () => {
  const ref = useRef(null);

  // initial cards (optional)
  const [cards, setCards] = useState([
    { id: 1, desc: "Click to add text..." },
    { id: 2, desc: "Click to add text..." },
  ]);

  // ADD
  const addCard = () => {
    setCards((prev) => [
      ...prev,
      { id: Date.now(), desc: "Click to add text..." },
    ]);
  };

  // DELETE
  const deleteCard = (id) => {
    setCards((prev) => prev.filter((c) => c.id !== id));
  };

  // UPDATE
  const updateCard = (id, newDesc) => {
    setCards((prev) =>
      prev.map((c) => (c.id === id ? { ...c, desc: newDesc } : c))
    );
  };

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[3] w-full h-full flex flex-wrap gap-4 p-5 overflow-hidden"
    >
      {cards.map((card) => (
        <Card
          key={card.id}
          data={card}
          reference={ref}
          onDelete={deleteCard}
          onUpdate={updateCard}
        />
      ))}

      <button
        type="button"
        onClick={addCard}
        className="fixed bottom-6 right-6 z-[50] bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-2xl shadow-lg font-semibold"
      >
        + Add Card
      </button>
    </div>
  );
};

export default Foreground;
