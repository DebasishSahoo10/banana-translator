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
      .then((json) => setOutput(json.contents.translated))
      .catch(setOutput("something went wrong! try again later"))
  };
  let userInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="App">
        <img src="\tittle-border.svg" alt="" id='tittle-box'/>
        <h1 id='tittle'>banana translator</h1>

        <input
          placeholder="your input goes here"
          onChange={userInput}
          id="input-field"
        ></input>

        

        <div id='output-field' contentEditable={true} data-text="your output will come here">{outputValue}</div>


        <button onClick={fetchData} id="fetch-btn">translate</button>


        <p id='detail-tab-one'>
          Are you a fan of minions? Did you know that the gibberish they say is an
          actual language.
        </p>

        <p id='detail-tab-two'>
          Use the translator to convert your text from English to
          Minion speak or Banana language.
        </p>
      
        <img src="\victory-sign.svg" alt="" id='emoji-set-one'/>
        <img src="\footer-badge.svg" alt="" id='emoji-set-two'/>
    </div>
  )
}

export default App
