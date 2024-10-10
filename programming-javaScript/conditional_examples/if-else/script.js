var signal = prompt("Do you see a green, orange or red?");

if (signal === "green" || signal === "Green") {
  console.log("Drive");
} else if (signal === "orange" || signal === "Orange") {
  console.log("Get ready");
} else if (signal === "red" || signal === "Red") {
  console.log("Don't drive");
} else {
  console.log("The light is not green, orange, or red");
}
