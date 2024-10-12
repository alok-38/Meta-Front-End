let car = {};
car.color = "red";
// Add a method to the car object so that it can be called
car.turnKey = function () {
  console.log("Engine started");
};

// call the method
car.turnKey();

car.mileage = 98765;
console.log(car);

car.turnOnTheWiper = function () {
  console.log("The lights are on... Why?");
};

car.turnOnTheWiper();
