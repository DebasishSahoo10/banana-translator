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
    
      <h1 className='tittle-box'>banana translator</h1>
    
      <div id='box'>
        <input
          placeholder="put your english text here"
          onChange={userInput}
          className='tittle-box'
        ></input>
        <button onClick={fetchData} className='tittle-box'>Translate</button>
        <div className='tittle-box'>{outputValue}</div>
        <p className='tittle-box'>
          Are you a fan of minions? Did you know that the gibberish they say is an
          actual language.
        </p>
        <p className='tittle-box'>
          Use the translator to convert your text from English to
          Minion speak or Banana language.
        </p>
      </div>
      
    </div>
  )
}

export default App
