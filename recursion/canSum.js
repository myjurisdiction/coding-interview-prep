function canSum(targetSum, nums) {
  if (targetSum === 0) {
    return true;
  }

  if(targetSum < 0) {
    return false;
  }

  for (let i = 0; i < nums.length; i++) {
    const remainder = targetSum - nums[i];
    const result = canSum(remainder, nums);

    if (result) {
      return true;
    }
  }

  return false;
}

console.log(canSum(8, [3,5]));
