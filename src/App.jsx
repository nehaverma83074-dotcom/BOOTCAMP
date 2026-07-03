import { useState } from "react";

export default function App() {
  const [balls, setBalls] = useState(0);
  const [runs, setRuns] = useState(0);

  const hitBall = () => {
    if (balls < 6) {
      const randomRun = [0, 1, 2, 3, 4, 6][
        Math.floor(Math.random() * 6)
      ];

      setRuns((prev) => prev + randomRun);
      setBalls((prev) => prev + 1);
    }
  };

  const resetGame = () => {
    setBalls(0);
    setRuns(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <div
        style={{
          background: "black",
          color: "white",
          width: "600px",
          margin: "auto",
          padding: "40px",
          borderRadius: "10px",
        }}
      >
        <h1>Cricket Score Board</h1>

        <h2>Balls : {balls}</h2>
        <h2>Runs : {runs}</h2>
      </div>

      <p style={{ marginTop: "20px", fontSize: "18px" }}>
        You get total of 6 balls (1 over). The button gets disabled after that.
      </p>

      <button
        onClick={hitBall}
        disabled={balls === 6}
        style={{
          padding: "10px 20px",
          marginRight: "10px",
          cursor: balls === 6 ? "not-allowed" : "pointer",
        }}
      >
        Click to hit the ball
      </button>

      <button
        onClick={resetGame}
        style={{ padding: "10px 20px" }}
      >
        Reset Game
      </button>
    </div>
  );
}