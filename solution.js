let insertedMoney = 0;
let selectedCoffee = 0;
let change;
let coffeePrices = [1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];

// Funktion um Geld einzuzahlen
function insertMoney(amount) {
  insertedMoney += amount;
  document.getElementById("inserted-money").innerHTML =
    "Eingezahltes Geld: €" + insertedMoney.toFixed(2);
  console.log(insertedMoney);
}

// Funktion um Kaffeesorte auszuwählen
function selectCoffee(coffee) {
  selectedCoffee = coffeePrices[coffee - 1];
  document.getElementById("display").innerHTML =
    "Sie haben ein Getränk ausgewählt. Bitte drücken Sie den Auslieferungs-Knopf um ihren Getränk zu erhalten.";
  console.log(selectedCoffee);
}
// Hier wird die Geldmenge mit dem Preis verglichen
let geld = document.querySelector(".change");
const exchangeBtn = document.querySelector(".changeA");
exchangeBtn.addEventListener("click", () => {
  if (insertedMoney >= selectedCoffee) {
    console.log("test 2");
    change = insertedMoney - selectedCoffee;
    geld.textContent = change;

    document.getElementById("display").innerText =
      "Vielen Dank für ihren Kauf! Ihr Getränk wird ausgeliefert.";
    document.getElementById("coffee-cup").style.display = "block";
  } else {
    document.getElementById("display").innerHTML =
      "Ihr Einzahlungsbetrag ist nicht ausreichend. Bitte zahlen Sie mehr Geld ein.";
  }
});
// Um ein neues Getränk zu wählen.
function reset() {
  location.reload();
}
