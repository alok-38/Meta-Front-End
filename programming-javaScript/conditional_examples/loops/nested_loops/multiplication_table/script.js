// single loop
for (let firstNum = 0; firstNum < 2; firstNum++) {
  console.log(firstNum);
}

for (let secondNum = 0; secondNum < 10; secondNum++) {
  console.log(secondNum);
}

// Nested loops
for (let outerLoop = 0; outerLoop < 2; outerLoop++) {
  for (let innerLoop = 0; innerLoop <= 10; innerLoop++) {
    console.log(`${outerLoop} * ${innerLoop} = ${outerLoop * innerLoop}`);
  }
}
