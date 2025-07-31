import { useState } from 'react';
import dictionary from "./dictionary.json";

function App(){
  const [input,setInput]= useState("");
  const [meaning , setMeaning]= useState("");
  
const handleInput = (e)=>{
  setInput(e.target.value);
};

const findMeaning = (e, input) => {
  e.preventDefault();
  if(!input) {
    setMeaning('Word not found in the dictionary.');
    return;
  }
  

  const inputWord = Capitalization(input);
    // console.log(word);


  const wordMeaning = dictionary.find((word) => inputWord === word.word);
  // console.log(wordMeaning);
  if (wordMeaning) {
    setMeaning(wordMeaning.meaning);
  } else {
    setMeaning('Word not found in the dictionary.');
  }
};


return(
<>
<h1>Dictionary APP</h1>
<form onSubmit={(e)=> findMeaning(e, input)}>
<div>
<input
    type="text"
    placeholder="Search for a word..."
    value={input}
    onChange={handleInput}
 />
 <button type="submit">Search</button>
 <h3>Defination:</h3>
 <p>{meaning}</p>
</div>
</form>
</>
);
}
export default App;

function Capitalization(letters) {

  let word = letters.toLowerCase().split("");
  word[0] = word[0].toUpperCase();
  word = word.join("");
  return word;
}