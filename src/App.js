import React, { useState } from "react";
import "./style.css";

const emojiDictionary = {
  "😊": "smiling!",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance"
};
console.log(Object.keys(emojiDictionary));
var emojiweknow = Object.keys(emojiDictionary);
var userName = "Carson";

// var userName = prompt("Enter your name:");
var color = "blue";

export default function App() {
  // const [likeCounter, setLikeCounter] = useState(0);

  // function likeClickhandler() {
  //   setLikeCounter(likeCounter + 1);
  // }
  // const [userInput, setUserInput] = useState("");
  // function inputChangeHandler(event) {
  //   setUserInput(event.target.value);
  // }

  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "we dont have this in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    if (meaning === undefined) {
      meaning = "we dont have this in our database";
    }
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1 style={{ backgroundColor: color }}>Welcome {userName}</h1>
      {/* <button onClick={likeClickhandler}>{likeCounter}</button>
       */}
      {/* <input onChange={inputChangeHandler}></input>
      <div>Welcome {userInput}</div> */}
      <input onChange={emojiInputHandler} />
      <h2>{meaning}</h2>
      <h3>emoji we know</h3>

      {emojiweknow.map((emoji) => {
        return (
          <span
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
            onClick={() => emojiClickHandler(emoji)}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}