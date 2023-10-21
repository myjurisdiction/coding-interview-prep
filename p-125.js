/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

  let i = 0,
    j = s.length - 1;

  while (i < j) {
    if (s[i++] !== s[j--]) {
      return false;
    }
  }

  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"))
console.log(isPalindrome(" "))
// console.log(isPalindrome())
