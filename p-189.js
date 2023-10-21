/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * 
 * 
 * 
 * Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]



Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
 */
var rotate = function (nums, k) {
  const n = nums.length;
  reverseInPlace(nums, 0, k);
  reverseInPlace(nums, n - k, 0);
  reverseInPlace(nums, 0, 0);
};

function reverseInPlace(nums = [], reverseIndexStart = 0, reverseIndexEnd = 0) {
  let i = reverseIndexStart,
    j = nums.length - reverseIndexEnd - 1;

  while (i <= j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
    i++;
    j--;
  }
}

// // ex 1
// rotate([1, 2, 3, 4, 5, 6, 7], 3);

// // ex 2
// rotate([-1, -100, 3, 99], 2);

function rotate2(nums, k) {
  let n = nums.length;
  while (k > 0) {
    let lastEl = nums[n - 1];
    nums.pop();
    nums.unshift(lastEl);
    k--;
  }
}

// // ex 1
// rotate2([1, 2, 3, 4, 5, 6, 7], 3);

// // ex 2
// rotate2([-1, -100, 3, 99], 2);

// // ex3 -> failing for rotate1

// rotate2([1, 2], 3);

function rotate3(nums, k) {
  const temp = [];
  const n = nums.length;

  for (let i = 0; i < nums.length; i++) {
    let newIndex = (i + k) % n;
    temp[newIndex] = nums[i];
  }

  for (i = 0; i < nums.length; i++) {
    nums[i] = temp[i];
  }
}

// ex 1
rotate3([1, 2, 3, 4, 5, 6, 7], 3);

// ex 2
rotate3([-1, -100, 3, 99], 2);

// ex3 -> failing for rotate1

rotate3([1, 2], 3);
