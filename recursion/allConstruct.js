function allConstruct(target, wordbank) {
  if (!target.length) {
    return [[]];
  }

  let allCombinations = [];

  for (let word of wordbank) {
    if (target.startsWith(word)) {
      const newTarget = trimString(target, word);
      const result = allConstruct(newTarget, wordbank);

      //   here the result is a two dimensional array

      const updatedResult = result.map((arr) => [...arr, word]);
      allCombinations.push(...updatedResult);
    }
  }

  return allCombinations;
}

function trimString(target, str) {
  return target.substring(str.length);
}

console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(allConstruct("cat", ["ca", "c", "at", "t"]));

// m = targetLnegth
// n = length of wordCount
// time complexity = n**m * m , branching factor ** height * 
// space complexity = m**2, (m is the height of the tree and m new strings we created in each recursion)
