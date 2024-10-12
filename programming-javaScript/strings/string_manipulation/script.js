// Original string
const originalString = "Hello, World! Welcome to JavaScript Programming.";

// using charAt()

const firstchar = originalString.charAt(0);
console.log("First character:", firstchar);

// 3. Using indexOf() and lastIndexOf()
const indexOfJavaScript = originalString.indexOf("JavaScript");
const lastIndexOfO = originalString.lastIndexOf("o");
console.log("Index of 'JavaScript':", indexOfJavaScript);
console.log("Last index of 'o':", lastIndexOfO);

// using split
const words = originalString.split("");
words.forEach((word) => console.log(word));
