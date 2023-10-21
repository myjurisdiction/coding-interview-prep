function minFlipsToConvert(s) {
  let input = Array(s.length).fill(0).join("");
  let flips = 0;

  for (let i = 0; i < input.length; i++) {
    if (s[i] !== "0") {
      // Skip right bits since they will be flipped as well
      while (i < input.length && input[i] !== "0") {
        i++;
      }
      if (i < input.length) {
        flips++;
      }
    }
  }

  return flips;
}

const target = "001101";

const flipsNeeded = minFlipsToConvert(target);
console.log(`Minimum flips needed: ${flipsNeeded}`); // Output: Minimum flips needed: 3
