import React, { useState } from "react";
import "../App.css";

const ProposalCards = ({ onComplete }) => {
  const [currentCard, setCurrentCard] = useState(0);

  const proposalLines = [
    "k xa sanchai? hehe",
    "Dherau kura vannu thiyo tmlai.",
    "Aaja vandim ki vanera sochi raxu. Sachi vanam ta?",
    "so, i never thought. we will talk this long.",
    "From Snap Chat to Insta, and instagram to Video call, its beautiful journey.",
    "And i am planning to come to Jhapa in few monts, so hamro vet chaidai hola. sayed",
    "and aru kta haru sanga bloleko dhekeisi jalan hunxa k malai, tmlai arule galat najar le naheros vanera",
    "So, ali nataki xu, kaile kaile dherai nai niu khojxu, narisaye tei ho.",
    "Anyways, Maile veterai vanxu vanethe yo kura but, Aafulai raknai sakena, k garnu",
    "Vanam ta? haha",
    "I LOVE YOU! Kritika Ghimirey",
    "AKA Mero Dil",
  ];

  const handleNext = () => {
    if (currentCard < proposalLines.length - 1) {
      setCurrentCard(currentCard + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className="proposal-cards">
      <div className="card">
        <p>{proposalLines[currentCard]}</p>
        <button className="nextButton" onClick={handleNext}>
          {currentCard < proposalLines.length - 1 ? "Next" : "Final Answer"}
        </button>
      </div>
    </div>
  );
};

export default ProposalCards;
