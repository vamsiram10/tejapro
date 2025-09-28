"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

const Card = React.memo(({ card, index, hovered, setHovered }) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      " rounded-lg relative top-30 bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
      hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
    )}
  >
    <div className="absolute inset-0 w-full h-full">
      <img
        src={card.src}
        alt={card.title}
        className="object-contain w-full h-full"
      />
    </div>
    <div
      className={cn(
        "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
        hovered === index ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="text-xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-200 md:text-2xl">
        {card.title}
      </div>
    </div>
  </div>
));

Card.displayName = "Card";

function FocusCards({ cards }) {
  const [hovered, setHovered] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [filteredCards, setFilteredCards] = useState(cards);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchValue.trim()) {
      setFilteredCards(cards);
      return;
    }
    const num = parseInt(searchValue, 10);
    if (!isNaN(num) && num >= 1 && num <= cards.length) {
      setFilteredCards([cards[num - 1]]);
    } else {
      setFilteredCards([]);
    }
  };

  // Reset filteredCards if cards prop changes
  React.useEffect(() => {
    setFilteredCards(cards);
  }, [cards]);

  return (
    <div className="relative mx-auto px-8 w-full max-w-5xl">
      {/* Search bar at top right */}
      <form
        onSubmit={handleSearch}
        className="z-10 absolute right-[3%] top-4 right-4 right-8 right-12 top-25 flex items-center gap-2 mt-2 sm:absolute md:absolute lg:absolute"
      >
        <input
          type="number"
          min={1}
          max={cards.length}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder={`Image # (1-${cards.length})`}
          className="px-3 py-2 w-32 text-black bg-white border-gray-300 border dark:border-neutral-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-neutral-900 dark:text-white"
        />
        <button
          type="submit"
          className="px-3 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition"
        >
          Search
        </button>
        <button
          type="button"
          className="px-2 py-2 text-gray-700 bg-gray-200 dark:bg-neutral-800 dark:text-gray-200 rounded hover:bg-gray-300 dark:hover:bg-neutral-700 transition"
          onClick={() => {
            setSearchValue("");
            setFilteredCards(cards);
          }}
        >
          Reset
        </button>
      </form>
      <div className="grid grid-cols-1 gap-10 pt-16 w-full md:grid-cols-3">
        {filteredCards.length === 0 ? (
          <div className="col-span-full text-center text-red-500 text-lg">
            No image found for this number.
          </div>
        ) : (
          filteredCards.map((card, index) => (
            <Card
              key={card.title}
              card={card}
              index={cards.indexOf(card)}
              hovered={hovered}
              setHovered={setHovered}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default FocusCards;
