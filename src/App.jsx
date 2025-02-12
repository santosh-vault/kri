import React, { useState } from "react";
import LandingPage from "./components/LandingPage";
import ProposalCards from "./components/ProposalCard";
import FinalDecision from "./components/FinalDecision";
import "./App.css";

const App = () => {
  const [step, setStep] = useState("landing");

  return (
    <div className="App">
      {step === "landing" && (
        <LandingPage onResponse={() => setStep("proposal")} />
      )}
      {step === "proposal" && (
        <ProposalCards onComplete={() => setStep("final")} />
      )}
      {step === "final" && <FinalDecision />}
    </div>
  );
};

export default App;
