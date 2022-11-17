import { useState } from 'react'
import './App.css'
let serverURL = "https://api.funtranslations.com/translate/minion.json";

function App() {
  let [inputValue, setInput] = useState("");
  let [outputValue, setOutput] = useState("");
  let API = (text) => {
    return serverURL + "?" + "text=" + text;
  };
  let fetchData = () => {
    fetch(API(inputValue))
      .then((response) => response.json())
      .then((json) => setOutput(json.contents.translated));
  };
  let userInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="App">
        <img src="\src\assets\tittle-border.svg" alt="" id='tittle-box'/>
        <h1 id='tittle'>banana translator</h1>

        <input
          placeholder="put your english text here"
          onChange={userInput}
        ></input>

        <button onClick={fetchData}>Translate</button>

        <div>{outputValue}</div>

        <p>
          Are you a fan of minions? Did you know that the gibberish they say is an
          actual language.
        </p>

        <p>
          Use the translator to convert your text from English to
          Minion speak or Banana language.
        </p>
      
      
    </div>
  )
}

export default App
