import "./App.css";
import { useState } from "react";
import { sculptureList } from "./data";

function App() {
  const [index, setIndex] = useState(0);

  let sculpture = sculptureList[index];

  function handleClick() {
    setIndex(index + 1);
  }

  return (
    <div className="flex border border-white gap-4 pr-2">
      <img src={sculpture.url} alt={sculpture.alt} />
      <div className="flex flex-col gap-2">
        <p className="text-4xl font-semibold italic">{`${sculpture.name} by ${sculpture.artist}`}</p>
        <p className="text-left">{sculpture.description}</p>
        <button
          onClick={handleClick}
          className="bg-blue-500 rounded-sm self-center">
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
