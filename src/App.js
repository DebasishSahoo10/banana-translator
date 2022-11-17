import "./styles.css";
import { useState } from "react";
let serverURL = "https://api.funtranslations.com/translate/minion.json";

export default function App() {
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
      <h1>Banana Translator</h1>
      <input
        placeholder="put your english text here"
        onChange={userInput}
      ></input>
      <button onClick={fetchData}>Translate</button>
      <div>{outputValue}</div>
      <p>
        Are you a fan of minions? Did you know that the gibberish they say is an
        actual language. Use the translator to convert your text from English to
        Minion speak or Banana language.
      </p>
    </div>
  );
}
