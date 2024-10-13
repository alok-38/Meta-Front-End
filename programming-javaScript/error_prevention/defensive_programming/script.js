function letterFinder(word, match) {
  let condition1 = typeof word === "string" && word.length >= 2;
  let condition2 = typeof match === "string" && match.length === 1;

  if (condition1 && condition2) {
    for (let index = 0; index < word.length; index++) {
      if (word[index] === match) {
        console.log("Found the", match, "at", index);
      } else {
        console.log("---No match found at", index);
      }
    }
  } else {
    console.log("Please pass correct arguments to the function.");
  }
}

letterFinder(1, 1); // This will prompt the error message
letterFinder("cat", "c"); // This will find the match
