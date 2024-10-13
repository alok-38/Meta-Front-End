var shoes = 100;
var stateTax = 1.1;
function totalPrice(price, tax) {
  return price * tax;
}
var toPay = totalPrice(shoes, stateTax);
console.log(toPay);

let currencyOne = 100;
let currencyTwo = 0;
let exchangeRate = 1.2;

function convertcurrency(amount, rate) {
  return amount * rate;
}

currencyTwo = convertcurrency(currencyOne, exchangeRate);
console.log(currencyTwo);

