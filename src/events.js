import cardsArr from "./cards";

// change state of object
const changeState = (objCard) => {
  if (objCard.faceUp === false) {
    objCard.faceUp = true;
  } else {
    objCard.faceUp = false;
  }
};

// show image
const showImage = (event, objCard) => {
  const srcCard = event.target.firstElementChild;
  srcCard.src = objCard.src;
};

// card they palyer choose
let choosenCards = [];

// index of object that is stored in the cards array
const pushClickedCard = (indexStr) => {
  // turn index into number
  const indexInt = parseInt(indexStr);
  choosenCards.push(cardsArr[indexInt]);
  console.log("choosen cards");
  console.log(choosenCards);
};

const turnCardsFaceDown = () => {
  // get all children
  const allImgs = document.querySelectorAll("img");

  for (let i = 0; i < allImgs.length; i++) {
    //console.log(allImgs[i]);
    const currImg = allImgs[i];
    currImg.src = "";
  }
};
// delete ?????!!!!
// // remove events
// const removeEvents = () => {
//   const cardsDiv = document.querySelectorAll(".card");
//   console.log("remove events");
//   console.log(cardsDiv);
//   for (let i = 0; i < cardsDiv.length; i++) {
//     cardsDiv[i].removeEventListener();
//   }
// };

// objs that keeps track of timer
// if timer is running disable eventlisteners
const objTimerRunning = {
  running: false,
};

const checkforPairs = (clickedElement) => {
  //console.log(clickedElement);
  // check if player has clicked two times on card
  if (choosenCards[0].name === choosenCards[1].name) {
    // if you get a pair
    console.log("pair");
  } else {
    // player did not get a match
    // start a timer so player has time to remeber positions

    // set the state of obj to true becaus timer is going to start
    objTimerRunning.running = true;
    // wait a time befor turning the cards around
    setTimeout(() => {
      // turn cards face down
      turnCardsFaceDown();
      // reset choosen cards array
      choosenCards.length = 0;
      // add function that returns eventlisteners after countdown
      objTimerRunning.running = false;
      console.log("choosen cards");
      console.log(choosenCards);
    }, 3000);
  }
};

const addEvents = (arrCards) => {
  for (let i = 0; i < arrCards.length; i++) {
    const card = document.getElementById(`${i}`);

    card.addEventListener("click", (e) => {
      // if timer is running players has two cards revealde -> eventlisteners
      // need to be disabled
      if (objTimerRunning.running === true) {
        console.log("timer is running -> do nothing");
      } else {
        changeState(arrCards[i]);
        showImage(e, arrCards[i]);
        pushClickedCard(e.target.id);
        if (choosenCards.length === 2) {
          checkforPairs(e.target);
        }
      }
    });
  }
};

export default addEvents;
