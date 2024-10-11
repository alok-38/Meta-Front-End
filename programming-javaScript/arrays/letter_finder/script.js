function letterFinder(word, match) {
  for (let index = 0; index < word.length; index++) {
    if (word[index] === match) {
      console.log(`Found the ${match} at ${index}`);
    } else {
      console.log("---No match found at", index);
    }
  }
}

letterFinder("Alok", "o");
letterFinder("Alokananda Y", "Y");
