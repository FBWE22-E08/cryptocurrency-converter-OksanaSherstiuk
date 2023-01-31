// import "./css/style.css"; //importing css

const cryptoCurrency = document.querySelector("#dropdown");
const inputAmount = document.querySelector("#inputAmount");
const convertedCurrency = document.querySelector("#dropdown2");
const output = document.querySelector("#output");
const form = document.querySelector("form");

async function fetchCurrencyData(e) {
  e.preventDefault();
  try {
    let response = await fetch(
      `https://api.coinconvert.net/convert/${cryptoCurrency.value.toLowerCase()}/${convertedCurrency.value.toLowerCase()}?amount=${
        inputAmount.value
      }`
    );

    let data = await response.json();
    console.log(data);
    output.value = data[convertedCurrency.value.toUpperCase()];
  } catch (err) {
    console.log(err);
  }
}
form.addEventListener("submit", fetchCurrencyData);
