import { useState } from "react";

// Import your apps
import FeeTracker from "./Apps/FeeTracker/FeeTracker";
import NaturalNumbers from "./Apps/NaturalNumbers/NaturalNumbers";
import SumOfNaturalNumbers from "./Apps/SumOfNaturalNumbers/SumOfNaturalNumber";
import Armstrong from "./Apps/ArmstrongNumber/ArmstrongNumber";
import Factorial from "./Apps/Factorial/Factorial";
import GreatestOfThreeNumbers from "./Apps/GreatestOfThreeNumbers/GreatestOfThreeNumbers";
import BoxBallGame from "./Apps/BoxBallGame/BoxBallGame";

function App() {
  const [activeApp, setActiveApp] = useState(null);

  const programs = [
    { name: "Natural Numbers", component: <NaturalNumbers /> },
    { name: "Sum Of Natural Numbers", component: <SumOfNaturalNumbers /> },
    { name: "Armstrong Number", component: <Armstrong /> },
    { name: "Factorial Number", component: <Factorial /> },
    { name: "Greatest Of Three Numbers", component: <GreatestOfThreeNumbers /> },
    { name: "Fee Tracker", component: <FeeTracker /> },
    { name: "Box Ball Game", component: <BoxBallGame /> },  // ✅ Added here
  ];

  const cardStyle = {
    cursor: "pointer",
    padding: "20px",
    border: "2px solid #555",
    borderRadius: "10px",
    minWidth: "150px",
    textAlign: "center",
    backgroundColor: "#2e2e3e",
    color: "#f5f5f5",
    transition: "0.3s",
  };

  const cardHover = (e, hover) => {
    e.currentTarget.style.backgroundColor = hover ? "#44445a" : "#2e2e3e";
  };

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial",
        backgroundColor: "#1e1e2f",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ color: "#f0f0f0" }}>React Programs Dashboard</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginBottom: "30px",
        }}
      >
        {programs.map((program, index) => (
          <div
            key={index}
            style={cardStyle}
            onClick={() => setActiveApp(program.component)}
            onMouseEnter={(e) => cardHover(e, true)}
            onMouseLeave={(e) => cardHover(e, false)}
          >
            {program.name}
          </div>
        ))}
      </div>

      <div
        style={{
          border: "2px solid #555",
          borderRadius: "10px",
          padding: "20px",
          minHeight: "200px",
          backgroundColor: "#2e2e3e",
          color: "#f5f5f5",
        }}
      >
        {activeApp ? activeApp : <p>Please select a program to run.</p>}
      </div>
    </div>
  );
}

export default App;
