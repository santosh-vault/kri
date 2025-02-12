import React, { useState } from "react";
import "../App.css";

const FinalDecision = () => {
  const [response, setResponse] = useState(null);
  const [shake, setShake] = useState(false);

  const handleYes = () => {
    setResponse("I love you too! ❤️");
  };

  const handleNo = () => {
    setShake(true); // Add shake effect
    setTimeout(() => setShake(false), 400); // Remove shake effect after animation duration
  };

  return (
    <div className="final-decision">
      {response ? (
        <p>{response}</p>
      ) : (
        <>
          <h2>Will You be my love? </h2>
          <div className="buttons">
            <button className="yesButton" onClick={handleYes}>
              Yes
            </button>
            <button
              className={`noButton ${shake ? "shake" : ""}`}
              onClick={handleNo}
            >
              No
            </button>
          </div>
        </>
      )}
      <p className="designer">Proposal designed by Santosh </p>
    </div>
  );
};

export default FinalDecision;
