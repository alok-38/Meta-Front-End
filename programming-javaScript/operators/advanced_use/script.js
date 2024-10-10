var score = 8;
console.log("Mid-level skills: " + (score > 0 && score < 10));

var timeRemaining = 0;
var energy = 10;
console.log("Game over: " + (timeRemaining === 0 || energy === 0));

var number1  = prompt("Number 1:");
var number2 = prompt("Number 2:");
var test1 = number1 % 2;
console.log(test1);
var test2 = number2 % 2;
console.log(test2);
var result1 = test1 === 0;
var result12 = test2 === 0;
console.log(result1);
console.log("Is " + number1 + " an even number? " + result1);
console.log("Is " + number2 + " an even number? " + result12);




