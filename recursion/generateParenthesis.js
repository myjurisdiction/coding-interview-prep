/**
 * @param {number} n
 * @return {string[]}
 */

/**
 * Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
 */
var generateParenthesis = function (n) {
  let resultArray = [];
  let combination = "";

  function permutate(combination, left = 0, right = 0) {
    if (left === n && right === n) {
      resultArray.push(combination);
      return;
    }

    if (left < n) {
      permutate(combination + "(", left + 1, right);
    }

    if (right < left) {
      permutate(combination + ")", left, right + 1);
    }
  }

  permutate(combination);

  return resultArray;
};

console.log(generateParenthesis(3));
