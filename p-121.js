/**
 * @param {number[]} prices
 * @return {number}
 */


// this solution is slow
var maxProfit = function (prices) {
  let finalProfit = 0;
  const n = prices.length;

  for (let i = 0; i < n; i++) {
    let currentProfit = 0;
    for (let j = i + 1; j < n; j++) {
      if (prices[i] < prices[j]) {
        currentProfit = prices[j] - prices[i];
        finalProfit = Math.max(finalProfit, currentProfit);
      }
    }
  }

  return finalProfit;
};

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));

// console.log(maxProfit([7, 6, 4, 3, 1]));


// kadanes algorithm

function maxProfit2 (prices) {
    let total = 0, local = 0;

    for (let i = 0; i < prices.length - 1; i++) {
        local = Math.max(0, local + prices[i + 1] - prices[i]);
        total = Math.max(local, total);
    }

    return total
}

console.log(maxProfit2([7, 1, 5, 3, 6, 4]));

console.log(maxProfit2([7, 6, 4, 3, 1]));