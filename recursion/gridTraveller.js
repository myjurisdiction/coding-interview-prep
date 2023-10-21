function gridTraveller(m, n) {
  if (m === 1 && n === 1) {
    return 1;
  }

  if (m < 1 || n < 1) {
    return 0;
  }

  return gridTraveller(m - 1, n) + gridTraveller(m, n - 1);
}

console.time('slow')
console.log(gridTraveller(15, 15));
console.timeEnd('slow')

// how can i make it faster

function memoGridTraveller(m, n, memo = {}) {
  // check in the memo object if the result exist already
  let key = `${m}-${n}`;
  if (key in memo) {
    return memo[key];
  }

  if (m === 1 && n === 1) {
    return 1;
  }

  if (m < 1 || n < 1) {
    return 0;
  }

  memo[key] = memoGridTraveller(m - 1, n, memo) + memoGridTraveller(m, n - 1, memo);

  return memo[key];
}

console.time("fast");
console.log(memoGridTraveller(100, 100));
console.timeEnd("fast");
