function addTwoNums(a, b) {
  try {
    if (typeof a !== "number") {
      throw new TypeError("The first argument is not a number");
    } else if (typeof b !== "number") {
      throw new TypeError("The second argument is not a number");
    } else {
      return a + b;
    }
  } catch (error) {
    console.log("Error:", error.message);
  }
}

console.log(addTwoNums(5, 5));
console.log(addTwoNums(5, "5"));
console.log(addTwoNums("It still works."));
