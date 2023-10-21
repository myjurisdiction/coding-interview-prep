/**
 * @param {string} s
 * @return {number}
 * 
 * Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.


I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.
 */
var romanToInt = function (s) {
  let result = 0;
  let n = s.length;

  const romanNumeralMapping = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < n; i++) {
    if (i < n - 1 && s[i] === "I" && s[i + 1] === "V") {
      result += 4;
      i++;
      continue;
    }

    if (i < n - 1 && s[i] === "I" && s[i + 1] === "X") {
      result += 9;
      i++;
      continue;
    }

    if (i < n - 1 && s[i] === "X" && s[i + 1] === "L") {
      result += 40;
      i++;
      continue;
    }

    if (i < n - 1 && s[i] === "X" && s[i + 1] === "C") {
      result += 90;
      i++;
      continue;
    }

    if (i < n - 1 && s[i] === "C" && s[i + 1] === "D") {
      result += 400;
      i++;
      continue;
    }

    if (i < n - 1 && s[i] === "C" && s[i + 1] === "M") {
      result += 900;
      i++;
      continue;
    }

    result += romanNumeralMapping[s[i]];
  }

  return result;
};

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
console.log(romanToInt("LIX"));
