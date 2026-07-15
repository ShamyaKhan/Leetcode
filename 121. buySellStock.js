function buyAndSellStock(prices) {
  // [7, 1, 5, 3, 6, 4]
  // [7, 6, 4, 3, 1]
  // [5, 10, 1, 3];

  let left = 0;
  let right = 1;
  let maxProfit = 0;
  let profit;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      profit = prices[right] - prices[left];
      maxProfit = Math.max(profit, maxProfit);
    } else {
      left = right;
    }
    right++;
  }

  return maxProfit;
}
