import "./App.css";
import { useState } from "react";
import { sculptureList } from "./data";

function App() {
  const [index, setIndex] = useState(0);
  const [showDescription, setShowDescription] = useState(false);

  let sculpture = sculptureList[index];

  function handleNext() {
    if (index < sculptureList.length - 1) {
      setIndex(index + 1);
    }
  }

  function handlePrevious() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  function handleShowDescription() {
    setShowDescription(!showDescription);
  }

  return (
    <div className="flex border border-white gap-4 pr-2">
      <img src={sculpture.url} alt={sculpture.alt} />
      <div className="flex flex-col gap-2">
        <p className="text-4xl font-semibold italic">{`${sculpture.name} by ${sculpture.artist}`}</p>
        <button
          onClick={handleShowDescription}
          className="bg-blue-500 rounded-sm self-center">
          {" "}
          {showDescription ? "Hide " : "Show "}
          Description
        </button>
        <p className="text-left">
          {showDescription ? sculpture.description : ""}
        </p>
        <div>
          {index + 1} of {sculptureList.length}
        </div>
        <button
          onClick={handlePrevious}
          className="bg-blue-500 rounded-sm self-center">
          Previous
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-500 rounded-sm self-center">
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
