function countConstruction(target, wordbank) {
  if (!target.length) {
    return 1;
  }

  let totalCount = 0;

  for (let word of wordbank) {
    if (target.startsWith(word)) {
      const newTarget = trimString(target, word);
      const result = countConstruction(newTarget, wordbank);
      //   update the count
      totalCount += result;
    }
  }

  return totalCount;
}

function trimString(target, str) {
  return target.substring(str.length);
}

console.log(countConstruction("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(countConstruction("cat", ["ca", "c", "at", "t"]));


// m = targetLnegth
// n = length of wordCount
// time complexity = n**m * m
// space complexity = 


