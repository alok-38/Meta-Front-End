var signal = prompt("Do you see red, green or orange?");
switch (signal) {
  case "green" || "Green":
    console.log("Drive");
    break;
  case "orange" || "Orange":
    console.log("Get ready");
    break;
  case "red" || "Red":
    console.log("Don't drive");
    break;
  default:
    console.log("The light is not green, orange, or red");
    break;
}
