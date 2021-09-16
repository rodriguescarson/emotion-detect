import React, { useState } from "react";
import "./style.css";

const emojiDictionary = {
  "😊": "smiling!",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "😍": "Heart-Eyes",
  "😘": "winky-kissy",
  "😏": "Smirking Face",
  "🥺":"Pleading Face"
};
console.log(Object.keys(emojiDictionary));
var emojiweknow = Object.keys(emojiDictionary);

// var userName = prompt("Enter your name:");

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
      <header>
      
    <h1  className="header">Which is this emoji?</h1>
      </header>
<main className="container container-center">

      {/* <button onClick={likeClickhandler}>{likeCounter}</button>
       */}
      {/* <input onChange={inputChangeHandler}></input>
      <div>Welcome {userInput}</div> */}
      
      <input className="input-text" onChange={emojiInputHandler} />
        <h2 style={{padding:"20px"}}>{meaning}</h2>
      
      <h3 style={{padding:"20px"}}>emoji we know</h3>

      {emojiweknow.map((emoji) => {
        return (
          <span
            style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
            key={emoji}
            onClick={() => emojiClickHandler(emoji)}
          >
            {emoji}
          </span>
        );
      })}

</main>
    <footer class="footer container">
        <div class="footer-header">Connect with me on social media</div>
        <ul class="social-links list-non-bullet">
            <li class="list-item-inline">
                <a class="link" href="https://www.linkedin.com/in/rodriguescarson">
                    Linkedin
                </a>
            </li>
            <li class="list-item-inline">
                <a class="link" href="https://github.com/rodriguescarson">
                    Github
                </a>
            </li>
            <li class="list-item-inline">
                <a class="link" href="https://twitter.com/carsonmarz">
                    twitter
                </a>
            </li>
        </ul>
    </footer>
    </div>
  );
}