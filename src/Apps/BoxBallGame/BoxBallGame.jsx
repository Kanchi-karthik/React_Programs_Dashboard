import { useState } from "react";

function BoxBallGame() {
  const initialBoxes = [
    { id: "A", color: "violet", count: 0 },
    { id: "B", color: "orange", count: 0 },
    { id: "C", color: "green", count: 0 },
    { id: "D", color: "white", count: 0 },
  ];

  const [boxes, setBoxes] = useState(initialBoxes);
  const [initialBalls, setInitialBalls] = useState(2);

  const initGame = () => {
    const newBoxes = boxes.map((box, i) => ({
      ...box,
      count: initialBalls * Math.pow(2, i),
    }));
    setBoxes(newBoxes);
  };

  const choice1 = () => {
    const newBoxes = boxes.map((box) => ({ ...box, count: box.count * 2 }));
    setBoxes(newBoxes);
  };

  const choice2 = () => {
    let newBoxes = [...boxes];
    let lastCount = newBoxes.slice(0, -1).reduce((sum, b) => sum + b.count, 0);
    newBoxes = newBoxes.map((box, i) =>
      i === newBoxes.length - 1 ? { ...box, count: box.count + lastCount } : { ...box, count: 0 }
    );
    setBoxes(newBoxes);
  };

  const choice3 = () => {
    const newBoxes = boxes.map((box, i) => ({ ...box, count: box.count }));
    for (let i = 0; i < newBoxes.length; i++) {
      if ((i + 1) % 2 !== 0 && i + 1 < newBoxes.length) {
        newBoxes[i + 1].count += newBoxes[i].count;
        newBoxes[i].count = 0;
      }
    }
    setBoxes(newBoxes);
  };

  return (
    <div>
      <h3>Box Ball Game</h3>
      <div>
        <label>Initial Balls: </label>
        <input
          type="number"
          value={initialBalls}
          onChange={(e) => setInitialBalls(Number(e.target.value))}
        />
        <button onClick={initGame}>Start Game</button>
      </div>

      <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
        {boxes.map((box) => (
          <div
            key={box.id}
            style={{
              width: "80px",
              height: "80px",
              margin: "0 10px",
              border: "2px solid #333",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: box.color,
              color: box.color === "white" ? "black" : "white",
              fontWeight: "bold",
            }}
          >
            {box.id}: {box.count}
          </div>
        ))}
      </div>

      <div>
        <button onClick={choice1}>Choice 1: Double Balls</button>
        <button onClick={choice2}>Choice 2: Shift Consecutive</button>
        <button onClick={choice3}>Choice 3: Odd into Even</button>
      </div>
    </div>
  );
}

export default BoxBallGame;
