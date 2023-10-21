/**
 * 14. Longest Common Prefix
 * 
 * Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let answer = strs[0];

  for (let i = 1; i < strs.length; i++) {
    answer = findCommonInStrings(answer, strs[i]);
  }

  return answer;
};



function findCommonInStrings(s1, s2) {
  let answer = "";
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] === s2[i]) {
      answer += s1[i];
    } else {
      break;
    }
  }

  return answer;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));
