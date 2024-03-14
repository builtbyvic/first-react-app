// import "./App.css";
import { useState } from "react";

let nextId = 0;

function App() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);

  function handleChange(e) {
    setName(e.target.value);
  }

  // let nextId = 0;
  function handleClick() {
    setArtists([{ name: name, id: nextId++ }, ...artists]);
  }

  return (
    <>
      <div className="p-4">
        <input
          placeholder="Enter name..."
          value={name}
          className="border-zinc-700 border p-2 mr-4 rounded"
          type="text"
          onChange={handleChange}
        />
        <button
          onClick={handleClick}
          className="bg-green-600 text-white font-semibold rounded cursor-pointer hover:bg-green-500 p-2 transition-all ease-in">
          Add Artist
        </button>
        <ul className="bg-blue-100 mt-2 rounded p-2 flex flex-col gap-2">
          {artists.map((artist) => (
            <li key={artist.id}>
              {artist.name}
              <button
                onClick={() => {
                  setArtists(artists.filter((a) => a.id !== artist.id));
                }}
                className="bg-red-500 text-white font-semibold rounded cursor-pointer hover:bg-red-600 p-2 transition-all ease-in">
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;

// learning points / issues
// positioning keys to avoid duplication
// does whatever is in the array have to be an object? what guides this?
// learnt - adding items at the beginning & end of an array using the spread syntax rather than the corresponding array methods (unshift & push) which mutate the original array
