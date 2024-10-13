try {
  console.log(a + b);
} catch (error) {
  console.log("There was an error", error.message);
  console.log("The error was saved in the error log");
}
console.log("My program does not stop");
