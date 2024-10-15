class Car {
  constructor(color, speed) {
    this.color = color;
    this.speed = speed;
  }

  accelerate(amount) {
    this.speed += amount;
    console.log(`The car accelerates to ${this.speed} km/h.`);
  }

  brake(amount) {
    this.speed = Math.max(0, this.speed - amount);
    console.log(`The car slows down to ${this.speed} km/h.`);
  }

  display() {
    console.log(`This car is ${this.color} and moving at ${this.speed} km/h.`);
  }
}

const myCar = new Car("red", 50);
myCar.accelerate(20);
myCar.brake(10);
myCar.display();
