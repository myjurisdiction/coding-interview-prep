/**
 * @param {number[]} nums
 * @return {boolean}
 *
 *
 * // [2,3,1,1,4]
 */
var canJump = function (nums) {
  let index = 0;
  let n = nums.length;
  function findEnd(index, memo = {}) {
    if (index in memo) {
      return memo[index];
    }

    if (index === n - 1) {
      return true;
    }

    if (nums[index] === 0) {
      return false;
    }

    for (let i = 1; i <= nums[index]; i++) {
      if (index + i < n) {
        const outcome = findEnd(index + i, memo);
        if (outcome) {
          memo[index] = outcome;
          return true;
        }
      }
    }

    memo[index] = false;
    return false;
  }

  return findEnd(index);
};

console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));
console.log(canJump([2, 0, 0]));
