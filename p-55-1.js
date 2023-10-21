function howJump(nums) {
  let index = 0;
  let n = nums.length;

  function findJumpPath(nums, index, n) {
    if (index === n - 1) {
      return 1;
    }

    if (nums[index] === 0) {
      return 0;
    }

    let totalCount = 0;

    for (let i = 1; i <= nums[index]; i++) {
      if (index + i < n) {
        const outcome = findJumpPath(nums, index + i, n);
        if (outcome) {
          totalCount += outcome;
        }
      }
    }

    return totalCount;
  }

  return findJumpPath(nums, index, n);
}

console.log(howJump([2, 3, 1, 1, 4]));
console.log(howJump([3, 2, 1, 0, 4]));
console.log(howJump([2, 0, 0]));
