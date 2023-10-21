function canConstruct(target, wordbank) {
  if (!target.length) {
    return true;
  }

  for (let word of wordbank) {
    if (target.startsWith(word)) {
      const newTarget = trimString(target, word);
      const result = canConstruct(newTarget, wordbank);

      if (result) {
        return true;
      }
    }
  }

  return false;
}

function trimString(target, str) {
  return target.substring(str.length);
}

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(canConstruct("cat", ["ca", "a", "b", "t"]));
