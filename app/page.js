"use client";

import { useState, useEffect } from "react";
import FlipCard from "./components/FlipCard";

export default function Home() {
  const [cards, setCards] = useState([]);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [cardMatched, setCardMatched] = useState(0);

  const data = [
    { number: 5, matched: false },
    { number: 4, matched: false },
    { number: 3, matched: false },
    { number: 1, matched: false },

  ];

  // random cards
  const randomCard = () => {
    const randomCards = [...data, ...data]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(randomCards);
    setCardMatched(0);
  };

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) :  setChoiceOne(card)
  };

  const handleCompareChoice = () => {
    if (cardMatched == 6) {
      
      setCardMatched(0);
      randomCard();
    }
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.number == choiceTwo.number) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            return card.number === choiceOne.number &&
              card.number === choiceTwo.number
              ? { ...card, matched: true }
              : card;
          });
        });
        setCardMatched(cardMatched + 1);
        resetTurn();
      } else {
        setTimeout(() => {
          setDisabled(false);
          setChoiceOne(null);
          setChoiceTwo(null);
        }, 2000);
      }
    }
  };
  const resetTurn = () => {
    setDisabled(false);
    setChoiceOne(null);
    setChoiceTwo(null);
  };

  useEffect(() => {
    randomCard();
  }, []);

  useEffect(() => {
    handleCompareChoice();
  }, [choiceOne, choiceTwo]);

  return (
    <main className="flex min-h-screen flex-col items-center md:px-44 bg-[#111827]">
      <h2 className="text-3xl font-bold text-center my-10">Matching Number</h2>

      <button
        type="button"
        onClick={() => randomCard()}
        class="text-white mb-10 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">New Game</button>

      <h2 className="text-2xl text-center mb-10">Match : {cardMatched}</h2>
      <div className="flex flex-wrap justify-center gap-3">
        {cards.map((number) => {
          return (
            <FlipCard
              key={number.id}
              data={number}
              handleChoice={handleChoice}
              isFlipped={
                number == choiceOne || number === choiceTwo || number.matched
              }
              disabled={disabled}
            />
          );
        })}
      </div>
    </main>
  );
}
