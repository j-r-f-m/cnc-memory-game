import "./styles.css";
import shuffleArray from "./gameLogic";
import cardsArr from "./cards";
import addEvents from "./events";

console.log("hello world");

(() => {
  shuffleArray(cardsArr);
  addEvents(cardsArr);
})();
