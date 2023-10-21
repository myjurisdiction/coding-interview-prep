function howSum(targetSum, nums) {
  if (targetSum === 0) {
    return [];
  }

  if (targetSum < 0) {
    return null;
  }

  for (let num of nums) {
    let rem = targetSum - num;

    const result = howSum(rem, nums);

    if (result) {
      return [...result, num];
    }
  }

  return null;
}

console.log(howSum(100, [3, 4, 5, 2]));
console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(7, [3]));
// console.log(
//   howSum(
//     1000,
//     Array.from({ length: 100 }, () => Math.floor(Math.random() * 30))
//   )
// );

function sumArray(arr) {
  return arr.reduce((a, c) => a + c, 0);
}

console.log(
  sumArray([
    2, 14, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
    24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
    24, 24, 24, 24, 24,
  ])
);
