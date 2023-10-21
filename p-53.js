/**
 * @param {number[]} nums
 * @return {number}
 *
 * [-2,1,-3,4,-1,2,1,-5,4]
 * [1]
 */

// bruteforce approach
var maxSubArray1 = function (nums) {
  let global = 0;

  for (let i = 0; i < nums.length; i++) {
    let local = 0;

    for (let j = i; j < nums.length; j++) {
      local += nums[j];
      global = Math.max(global, local);
    }
  }

  return global;
};

// console.log(maxSubArray1([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// console.log(maxSubArray1([1]));
// console.log(maxSubArray1([5, 4, -1, 7, 8]));

var maxSubArray2 = function (nums) {
  let global = -Infinity;
  let local = 0;

  for (let i = 0; i < nums.length; i++) {
    local = Math.max(nums[i], local + nums[i]);
    global = Math.max(local, global);
  }

  return global;
};

console.log(maxSubArray2([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray2([1]));
console.log(maxSubArray2([5, 4, -1, 7, 8]));
console.log(maxSubArray2([-1]));
