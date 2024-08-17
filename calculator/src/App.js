// src/App.js
import React, { useState } from "react";
import { fetchNumbers } from "./services/apiService";
import "./App.css";

function App() {
  const [numberType, setNumberType] = useState("e");
  const [response, setResponse] = useState(null);

  const handleFetchNumbers = async () => {
    const data = await fetchNumbers(numberType);
    if (data) {
      setResponse(data);
    }
  };

  return (
    <div className="App">
      <h1>Average Calculator Microservice</h1>
      <div>
        <label>Select Number Type:</label>
        <select value={numberType} onChange={(e) => setNumberType(e.target.value)}>
          <option value="p">Prime</option>
          <option value="f">Fibonacci</option>
          <option value="e">Even</option>
          <option value="r">Random</option>
        </select>
        <button onClick={handleFetchNumbers}>Fetch Numbers</button>
      </div>

      {response && (
        <div className="results">
          <h2>Results</h2>
          <p><strong>Window Previous State:</strong> {JSON.stringify(response.windowPrevState)}</p>
          <p><strong>Window Current State:</strong> {JSON.stringify(response.windowCurrState)}</p>
          <p><strong>Fetched Numbers:</strong> {JSON.stringify(response.numbers)}</p>
          <p><strong>Average:</strong> {response.avg.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}

export default App;
