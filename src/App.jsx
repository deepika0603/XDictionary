import { useState } from 'react';
import dictionary from "./dictionary.json";

function App() {
  const [input, setInput] = useState("");
  const [meaning, setMeaning] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const findMeaning = (e) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (!trimmedInput) {
      setMeaning('Word not found in the dictionary.');
      return;
    }

    const inputWord = capitalize(trimmedInput);
    const wordMeaning = dictionary.find((word) => inputWord === word.word);

    if (wordMeaning) {
      setMeaning(wordMeaning.meaning);
    } else {
      setMeaning('Word not found in the dictionary.');
    }
  };

  return (
    <>
      <h1>Dictionary App</h1>
      <form onSubmit={findMeaning}>
        <div>
          <input
            type="text"
            placeholder="Enter a word"
            aria-label="search-input"
            value={input}
            onChange={handleInput}
          />
          <button type="submit" aria-label="search-button">Search</button>
          <h3>Definition:</h3>
          <p>{meaning}</p>
        </div>
      </form>
    </>
  );
}

export default App;

function capitalize(str) {
  if (!str) return '';
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}