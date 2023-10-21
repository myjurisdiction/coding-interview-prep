/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// nums = [3,2,2,3], val = 3
// nums = [0,1,2,2,3,0,4,2], val = 2

var removeElement = function (nums, val) {
  const temp = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      temp.push(nums[i]);
    }
  }

  let j = 0;

  while (j < temp.length) {
    nums[j] = temp[j];
    j++;
  }

  nums.fill('_', j)

  return j;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
