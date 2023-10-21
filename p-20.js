/**
 * @param {string} s
 * @return {boolean}
 * 
 * Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 */
var isValid = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
      continue;
    } else if (
      s[i] === ")" &&
      stack.length &&
      stack[stack.length - 1] === "("
    ) {
      stack.pop();
    } else if (
      s[i] === "]" &&
      stack.length &&
      stack[stack.length - 1] === "["
    ) {
      stack.pop();
    } else if (
      s[i] === "}" &&
      stack.length &&
      stack[stack.length - 1] === "{"
    ) {
      stack.pop();
    } else {
      return false;
    }
  }

  if (stack.length) {
    return false;
  }

  return true;
};

console.log(isValid("()[]{}"));
console.log(isValid("()"));
console.log(isValid("(]"));
console.log(isValid("]"));

/**
 * var isValid = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else if (
      s[i] === ")" &&
      stack.length &&
      stack[stack.length - 1] === "("
    ) {
      stack.pop();
    } else if (
      s[i] === "}" &&
      stack.length &&
      stack[stack.length - 1] === "{"
    ) {
      stack.pop();
    } else if (
      s[i] === "]" &&
      stack.length &&
      stack[stack.length - 1] === "["
    ) {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0;
};

 */
