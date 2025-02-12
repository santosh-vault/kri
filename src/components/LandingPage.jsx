import React from "react";
import "../App.css";

const LandingPage = ({ onResponse }) => {
  return (
    <div className="landing-page">
      <div className="overlay">
        <h1>Hello Kritika</h1>
        <button onClick={onResponse}>Response</button>
      </div>
    </div>
  );
};

export default LandingPage;
