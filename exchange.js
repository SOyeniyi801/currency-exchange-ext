const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const convert = document.getElementById("convert");
const result = document.getElementById("result");

const apiKey = "Bg1lS1Bzefd1ocrQ1rIsOg==jWcbuvlfWQXMm29e"
const apiUrl = "https://api.api-ninjas.com/v1/exchangerate?pair=GBP_";

convert.addEventListener("click", () => {
  const amountTotal = amount.value;
  const currencyTotal = currency.value;
  const url = apiUrl + currencyTotal;

  fetch(url, {
    headers: {
      "X-API-KEY": apiKey,
    },
  })
    .then(response => response.json())
    .then(data => {
      const rate = data.exchange_rate;
      const calculatedResult = amountTotal * rate; // Rename result to calculatedResult
      result.innerHTML = `${amountTotal} ${currencyTotal} = ${calculatedResult.toFixed(2)} USD`; // Use calculatedResult here
    })
    .catch(error => {
        console.error('Request failed:', error)
        result.innerHTML = "An error has occurred, please try again later";
    })
});
