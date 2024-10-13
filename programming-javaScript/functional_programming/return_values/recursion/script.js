function example() {
  console.log("line one");
  console.log("line two");
  console.log("line three");
}

example();

function example2() {
  console.log("line one");
  console.log("line two");
  console.log("line three");
  example();
}

example2();

function myDay() {
    console.log('Morning');
    console.log('Afternoon');
    console.log('Evening');
    myDay();
}

myDay();
