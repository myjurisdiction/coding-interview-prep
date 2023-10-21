/**
 * @param {number[]} prices
 * @return {number}
 *
 *
 * [7,1,5,3,6,4]
 */
var maxProfit2 = function (prices) {
  let maxProfit = 0,
    currentProfit = 0;

  for (let i = 0; i < prices.length - 1; i++) {
        if(prices[i] < prices[i + 1]) {
            currentProfit += prices[i + 1] - prices[i];
            maxProfit = Math.max(currentProfit, maxProfit)
        }
  }

  return maxProfit;
};


console.log(maxProfit2([7, 1, 5, 3, 6, 4]));

console.log(maxProfit2([7, 6, 4, 3, 1]));

console.log(maxProfit2( [1,2,3,4,5]));