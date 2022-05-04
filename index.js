const val = document.getElementById("val");
const currency = document.getElementById("currency");
const toCurrency = document.getElementById("toCurrency");
const bt = document.querySelector("button");
const div = document.getElementById("result");

bt.addEventListener("click", () => {
  let inputMoney = val.value;
  let money = currency.value;
  let toMoney = toCurrency.value;
  //Concatenação de string:
  let objName = money + toMoney;
  fetch(`https://economia.awesomeapi.com.br/last/${money}-${toMoney}`)
    .then((r) => r.json())
    .then((r) => {
      let newValue = inputMoney * parseFloat(r[objName].high);
      div.innerHTML = `<h2>O valor convertido é R$${newValue.toFixed(2)}</h2>`;
    });
});
