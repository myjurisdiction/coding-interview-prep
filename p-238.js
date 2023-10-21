/**
 * @param {number[]} nums
 * @return {number[]}
 */

/**
 * Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 */

var productExceptSelf = function (nums) {
  const answer = [];

  for (let i = 0; i < nums.length; i++) {
    let productResult = 1;
    for (let j = 0; j < nums.length; j++) {
      if (j === i) {
        continue;
      }

      productResult = productResult * nums[j];
    }
    answer[i] = productResult == "-0" ? 0 : productResult;
  }

  return answer;
};

// console.log(productExceptSelf([1, 2, 3, 4]));
// console.log(productExceptSelf([-1, 1, 0, -3, 3]));
// console.log(productExceptSelf([0, 0]));
// console.log(productExceptSelf([1, -1]));

// looks like it can be solved via following kadanes algorithm

// This is a false issue
var productExceptSelf2 = function (nums) {
  const answer = Array.from({ length: nums.length }).fill(1);
  const leftArr = Array.from({ length: nums.length }).fill(1);
  const rightArr = Array.from({ length: nums.length }).fill(1);

  let leftProduct = 1;
  for (let i = 1; i < nums.length; i++) {
    leftProduct *= nums[i - 1];
    leftArr[i] = leftProduct;
  }

  let rightProduct = 1;
  for (let i = nums.length - 2; i > -1; i--) {
    rightProduct *= nums[i + 1];
    rightArr[i] = rightProduct;
  }

  for (let i = 0; i < nums.length; i++) {
    let product = leftArr[i] * rightArr[i];
    answer[i] = product == "-0" ? 0 : product;
  }

  return answer;
};

console.log(productExceptSelf2([1, 2, 3, 4]));
console.log(productExceptSelf2([-1, 1, 0, -3, 3]));
console.log(productExceptSelf2([0, 0]));
console.log(productExceptSelf2([1, -1]));
