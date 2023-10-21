function bestJump(nums) {
  let index = 0;
  let n = nums.length;
  const bestCountArray = Array(n).fill(Infinity);

  function findBestJumpPath(index) {
    if (index === n - 1) {
      return 0;
    }

    if (nums[index] === 0) {
      return Infinity;
    }

    if (bestCountArray[index] !== Infinity) {
      return bestCountArray[index];
    }

    for (let i = 1; i <= nums[index]; i++) {
      if (index + i < n) {
        const outcome = findBestJumpPath(index + i);
        if (outcome !== Infinity) {
          bestCountArray[index] = Math.min(bestCountArray[index], outcome + 1);
        }
      }
    }

    return bestCountArray[index];
  }

  const result = findBestJumpPath(index);

  return result === Infinity ? 0 : result;
}

console.log(bestJump([2, 3, 1, 1, 4]));
console.log(bestJump([2, 3, 0, 1, 4]));
console.log(bestJump([3, 2, 1, 0, 4]));
console.log(bestJump([2, 0, 0]));
