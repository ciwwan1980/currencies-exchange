// The following line makes sure your styles are included in the project. Don't remove this.
import "../styles/main.scss";
// Import any additional modules you want to include below \/
import "regenerator-runtime/runtime";
import "bootstrap/dist/css/bootstrap.css";
// \/ All of your javascript should go here \/

document.querySelector("#cryptoInput").addEventListener("change", () => {
  cryptoAmount = document.querySelector("#cryptoInput").value;

  console.log(cryptoAmount, "___________cryptoAmount");
});
document.querySelector("#dropdown").addEventListener("change", () => {
  cryptoSelected = document.querySelector("#dropdown").value;
  console.log(cryptoSelected);
});
document.querySelector("#dropdown2").addEventListener("change", () => {
  fiatSelected = document.querySelector("#dropdown2").value;
  console.log(fiatSelected);
});
document.querySelector("#conversion-form").addEventListener("submit", event => {
  event.preventDefault();
  convert();
});

let cryptoSelected = "";
let fiatSelected = "";
let cryptoAmount = 1;

const convert = async () => {
  // console.log(cryptoSelected);
  // console.log(fiatSelected);
  if (cryptoSelected && fiatSelected) {
    const convAPI = `https://api.cryptonator.com/api/full/${cryptoSelected}-${fiatSelected}`;

    console.log(convAPI, "convAPI")
    const fetchResult = fetch(convAPI);
    const myResponse = await fetchResult;
    const jsonData = await myResponse.json();
    const price = parseFloat(jsonData.ticker.price);
    document.querySelector("#cryptoOutput").value = (
      price * cryptoAmount
    ).toFixed(2);

  }
};

  