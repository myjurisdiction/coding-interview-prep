function bestSum(target, nums) {
  if (target === 0) {
    return [];
  }

  if (target < 0) {
    return null;
  }

  let shortestCombination = null;

  for (let num of nums) {
    const rem = target - num;
    const result = bestSum(rem, nums);
    if (result) {
        const comb = [...result, num];
        if( !shortestCombination  || comb.length < shortestCombination.length) {
            shortestCombination = [...comb]
        }
    }
  }

  return shortestCombination;
}

console.log(bestSum(8, [2, 3, 4, 8]));
