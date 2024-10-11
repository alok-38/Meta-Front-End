function listArray(arr) {
  // code to be added
  for (let index = 0; index < arr.length; index++) {
    const elements = arr[index];
    // console.log(elements);
    console.log(`element # ${index} = ${elements}`);
  }
}

listArray([1, 2, 3, 4, 5]);
