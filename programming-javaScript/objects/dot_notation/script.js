let droneParameters = ["speed", "altitude", "color"];
let droneObject = {
  speed: 100,
  altitude: 200,
  color: "red",
};

for (let index = 0; index < droneParameters.length; index++) {
  console.table(droneObject[droneParameters[index]]);
}
