//------------------------------------[Game function]------------------------------------
const randomNumberGame = function (player1: number, player2: number): void {
  let randomNumber: number = Math.random() * (100 - 1 + 1);
  randomNumber = Math.floor(randomNumber);
  console.log("Numero random:", randomNumber);
  console.log("Numero giocatore 1:", player1);
  console.log("Numero giocatore 2:", player2);

  //result reference
  const randomNumberContainer = document.getElementById(
    "random-number"
  ) as HTMLInputElement;
  const player1Container = document.getElementById(
    "player1-number"
  ) as HTMLInputElement;
  const player2Container = document.getElementById(
    "player2-number"
  ) as HTMLInputElement;
  const resultContainer = document.getElementById("result") as HTMLInputElement;

  randomNumberContainer.innerText = randomNumber.toString();
  player1Container.innerText = player1.toString();
  player2Container.innerText = player2.toString();

  if (player1 === player2) {
    if (player1 === randomNumber) {
      resultContainer.innerHTML = `I giocatori hanno entrambi azzeccato il numero! random!`;
    } else {
      resultContainer.innerHTML = `Entrambi i giocatori hanno inserito lo stesso numero ma non hanno indovinato il numero random :(`;
    }




  } else {
    if (randomNumber === player1) {
      resultContainer.innerHTML = `Il giocatore 1 ha indovinato il numero estratto!`;
    } else if (randomNumber === player2) {
      resultContainer.innerHTML = `Il giocatore 2 ha indovinato il numero estratto!`;
    } else {
      let player1Close: number = randomNumber - player1;
      let player2Close: number = randomNumber - player2;

      if (player1Close > player2Close) {
        resultContainer.innerHTML = `Il giocatore 2 è arrivato più vicino al numero random avendo scelto il numero: ${player2}
          `;
      } else {
        resultContainer.innerHTML = `Il giocatore 1 è arrivato più vicino al numero random avendo scelto il numero: ${player1}
          `;
      }
    }
  }
};
//-----------------------------------------------------------------------------------------------------





//------------------------------------------------[Form event]------------------------------------------------
const formReference = document.querySelector("form")!;

formReference.addEventListener("submit", function (e) {
  e.preventDefault();

  const player1 = document.querySelector("#player1") as HTMLInputElement;
  const player2 = document.querySelector("#player2") as HTMLInputElement;
  const player1Number: number = Number(player1.value);
  const player2Number: number = Number(player2.value);

  randomNumberGame(player1Number, player2Number);
  formReference.reset();
});
//--------------------------------------------------------------------------------------------------