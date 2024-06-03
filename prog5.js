function CapitalizeLetter(str) {
  const words = str.split(" ");
  const result = words.map((word) => {
    return word.trim().charAt(0).toUpperCase() + word.slice(1);
  });
  return result.join(" ");
}

// console.log(CapitalizeLetter("  this is me sakshi "));


