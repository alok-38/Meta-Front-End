var num1 = 10;
function score() {
  console.log(num1);
}

score();

// Global scope
var num2 = 10;

function score2() {
  // local scope
  var num3 = 20;
  console.log(num3);
  console.log(num2);
}

score2();
console.log(num2);
console.log(num3);

