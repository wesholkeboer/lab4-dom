"use strict";

let total = 0;
let totalParagraph = document.querySelector(".total");
let colaButton = document.querySelector(".cola");
let peanutsButton = document.querySelector(".peanuts");
let chocolateButton = document.querySelector(".chocolate");
let gummiesButton = document.querySelector(".gummies");

colaButton.addEventListener("click", () => {
  let amount = parseFloat(colaButton.getAttribute("data-amount"));
  total += amount;
  totalParagraph.innerText = `Total $${total}.00`;
});

peanutsButton.addEventListener("click", () => {
  let amount = parseFloat(peanutsButton.getAttribute("data-amount"));
  total += amount;
  totalParagraph.innerText = `Total $${total}.00`;
});

chocolateButton.addEventListener("click", () => {
  let amount = parseFloat(chocolateButton.getAttribute("data-amount"));
  total += amount;
  totalParagraph.innerText = `Total $${total}.00`;
});

gummiesButton.addEventListener("click", () => {
  let amount = parseFloat(gummiesButton.getAttribute("data-amount"));
  total += amount;
  totalParagraph.innerText = `Total $${total}.00`;
});

// first attempt
// let moneyMaker = document.querySelector(".make-money");
// // let moneyContainer = document.querySelector(".money-container");
// // let coinSelector = document.querySelector("#coin");

// moneyMaker.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let coinType = document.querySelector("#coin").value;
//   let numberOfCoins = document.querySelector("#how-many").value;
//   let newCoin = document.createElement("div");
//   newCoin.classList.add("coin");
//   for (let i = 0; i < numberOfCoins; i++) {
//     moneyContainer.append((newCoin.innerText = `${coinType}`));
//     newCoin.innerText = `${coinType}`;
//     newCoin.classList.add("coin");
//     // newCoin.addEventListener("click", () => {
//     //   // newCoin.classList.toggle("coin");
//     //   // newCoin.innerText = "";
//     // });
//   }
//   console.dir(newCoin);
// });

// second attempt
// let makeMoneyForm = document.querySelector(".make-money");
// let numberOfCoins = document.querySelector("#how-many").value;
// let coinType = document.querySelectorAll("#coin").value;
// const newCoin = document.createElement("div");
// newCoin.classList.add("coin");

// console.log(numberOfCoins);

// const moneyMaker = () => {
//   console.dir(newCoin);
//   let number = numberOfCoins;
//   let type = coinType;
//   for (let i = 0; i < number; i++) {
//     // newCoin.innerText(`${type}`);
//     makeMoneyForm.append(newCoin.innerText(`${type}`));
//     console.dir(newCoin);
//   }
// };

// makeMoneyForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   moneyMaker();
// });

// console.log(moneyMaker());

// Mitch's version
let moneyForm = document.querySelector(".make-money");
let coinContainer = document.querySelector(".coin-container");

moneyForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let amount = document.querySelector("#how-many").value;
  let coin = document.querySelector("#coin").value;
  for (let i = 0; i < amount; i++) {
    let newCoin = document.createElement("div");
    newCoin.innerText = coin;
    coinContainer.append(newCoin);
    newCoin.classList.add("coin", coin);
    newCoin.addEventListener("click", () => {
      newCoin.remove();
    });
  }
});

let lightbulb = document.querySelector(".bulb");
let onButton = document.querySelector(".on-button");
let offButton = document.querySelector(".off-button");
let toggleButton = document.querySelector(".toggle-button");
let endButton = document.querySelector(".end-button");

lightbulb.innerText = "Light Bulb";

onButton.addEventListener("click", () => {
  lightbulb.classList.add("on");
  lightbulb.classList.remove("off");
});

offButton.addEventListener("click", () => {
  lightbulb.classList.add("off");
  lightbulb.classList.remove("on");
});

toggleButton.addEventListener("click", () => {
  lightbulb.classList.toggle("on");
  lightbulb.classList.remove("off");
});

endButton.addEventListener("click", () => {
  lightbulb.classList.remove("bulb");
  lightbulb.innerText = "";
  onButton.disabled = true;
  offButton.disabled = true;
  toggleButton.disabled = true;
  endButton.disabled = true;
});
