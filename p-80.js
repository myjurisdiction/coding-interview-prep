/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * Input: nums = [1,1,1,2,2,3]
Output: 5, nums = [1,1,2,2,3,_]
 */

var removeDuplicates = function (nums) {
  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i < nums.length - 2 && nums[i] === nums[i + 2]) {
      continue;
    } else {
      nums[j++] = nums[i];
    }
  }

  // console.log(nums.slice(0, j));
  return j;
};

removeDuplicates([1, 1, 1, 2, 2, 3]);
