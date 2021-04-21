import React, { useState } from "react";
import "./styles.css";

var headerText = "Emojee..😁"; //JSX
var color = "blue";
//var username = "Tushar"; //prompt("Please enter your name: ");

var emojiDictionary = {
  "🙈": "See no evil Monkey",
  "💥": "Collision",
  "🤓": "Nerd Face",
  "🤏": "Pinching Hand",
  "❤️": "Red Heart",
  "🏡": "Working From Home"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setUser] = useState("");

  function inputHandlerEmoji(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined)
      meaning = "Sorry! We don't have this in our database..";

    setUser(meaning);
  }

  function clickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setUser(meaning);
  }

  return (
    <div className="App">
      <h1>{headerText}</h1>

      <input onChange={inputHandlerEmoji}></input>
      <h2 className="yellow"> {meaning} </h2>

      <h2> Emojis we know.. </h2>
      <ol>
        {emojisWeKnow.map((emoji) => {
          return (
            <li key={emoji} onClick={() => clickHandler(emoji)}>
              {emoji}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
