/**
 * @param {string} s
 * @return {string}
 * 
 * Example 1:

Input: s = "the sky is blue"
Output: "blue is sky the"
Example 2:

Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
Example 3:

Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
 */
var reverseWords = function (s) {
  let arrayOfWords = s.trim().split(" ").reverse();

  let emptryStringIndex = [];

  for (let i = 0; i < arrayOfWords.length; i++) {
    if (arrayOfWords[i] === "") {
      emptryStringIndex.push(i);
    }
  }

  while (emptryStringIndex.length > 0) {
    let index = emptryStringIndex.pop();
    arrayOfWords.splice(index, 1);
  }

  return arrayOfWords.join(" ");
};

console.log(reverseWords("a good   example"));
