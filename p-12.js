/**
 * @param {string} s
 * @return {number}
 * 
 * Example 1:

Input: num = 3
Output: "III"
Explanation: 3 is represented as 3 ones.
Example 2:

Input: num = 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.
Example 3:

Input: num = 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 


I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.
 */
var intToRoman = function (num) {
  let answer = "";

  const numberMapping = new Map([
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ]);

  for (let [key, value] of numberMapping.entries()) {
    let count = Math.floor(num / key);
    if (count) {
      while (count > 0) {
        answer += value;
        count -= 1;
      }

      num = Math.floor(num % key);
    }
  }

  return answer;
};

console.log(intToRoman(3));
console.log(intToRoman(58));
console.log(intToRoman(1994));
