import React, { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  const calculateBmi = (e) => {
    e.preventDefault();

    const w = parseFloat(weight);
    const h = parseFloat(height);

    if (!w || !h || w <= 0 || h <= 0) {
      alert("Please enter a valid weight and height.");
      return;
    }

    const bmiValue = ((w / (h * h)) * 703).toFixed(1);
    setBmi(bmiValue);

    setMessage(
      bmiValue < 18.5
        ? "You are underweight."
        : bmiValue < 25
        ? "You have a healthy weight."
        : bmiValue < 30
        ? "You are overweight."
        : "You are obese."
    );
  };

  const reset = () => {
    setWeight("");
    setHeight("");
    setBmi("");
    setMessage("");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4">
        <h2 className="text-center mb-4">BMI Calculator</h2>
        <form onSubmit={calculateBmi}>
          <div className="mb-3">
            <label htmlFor="weight" className="form-label">Weight (lbs)</label>
            <input
              type="number"
              id="weight"
              className="form-control"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter weight"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="height" className="form-label">Height (inches)</label>
            <input
              type="number"
              id="height"
              className="form-control"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter height"
            />
          </div>
          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-primary" type="submit">Calculate</button>
            <button className="btn btn-secondary" type="button" onClick={reset}>Reset</button>
          </div>
        </form>
        {bmi && (
          <div className="mt-4 text-center">
            <h3 className="bmi-result">Your BMI: {bmi}</h3>
            <p className="bmi-message">{message}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
