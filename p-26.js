/**
 * @param {number[]} nums
 * @return {number}
 */

// nums = [0,0,1,1,1,2,2,3,3,4], [1,1,2]
var removeDuplicates = function (nums) {
  // brilliant idea

  let j = 1,
    i = 1;

  for (; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[j] = nums[i];
      j++;
    }
  }

  return j;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));


