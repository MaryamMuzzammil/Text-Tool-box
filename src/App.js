// App.js
import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  // Handlers for text transformation
  const handleUppercase = () => {
    setOutputText(inputText.toUpperCase());
  };

  const handleLowercase = () => {
    setOutputText(inputText.toLowerCase());
  };

  const handleTitleCase = () => {
    const titleCased = inputText
      .split(" ")
      .map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      )
      .join(" ");
    setOutputText(titleCased);
  };

  const handleReset = () => {
    setInputText("");
    setOutputText("");
  };

  return (
    <div className="App">
      <h1>Text Utility App</h1>

      {/* Input Text Box */}
      <textarea
        placeholder="Enter your text here..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      ></textarea>

      {/* Action Buttons */}
      <div className="buttons">
        <button onClick={handleUppercase}>Uppercase</button>
        <button onClick={handleLowercase}>Lowercase</button>
        <button onClick={handleTitleCase}>Capitalize</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      {/* Output Display */}
      <div className="output">
        <h3>Output:</h3>
        <p>{outputText}</p>
      </div>
    </div>
  );
}

export default App;