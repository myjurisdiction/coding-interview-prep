function uniqueStringPermutations(str) {
  const result = [];
  str = str.split("").sort().join("");
  const usedCharacters = new Set();
  permuteUnique(str, [], usedCharacters, result);
  return result;
}

function permuteUnique(str, currentPerm, usedCharacters, result) {
  if (currentPerm.length === str.length) {
    result.push(currentPerm.join(""));
    return;
  }

  for (let i = 0; i < str.length; i++) {
    if (
      usedCharacters.has(i) ||
      (i > 0 && str[i] === str[i - 1] && !usedCharacters.has(i - 1))
    ) {
      continue;
    }

    usedCharacters.add(i);
    currentPerm.push(str[i]);
    permuteUnique(str, currentPerm, usedCharacters, result);
    usedCharacters.delete(i);
    currentPerm.pop();
  }
}

const permutations = uniqueStringPermutations("aba");
console.log(permutations);
