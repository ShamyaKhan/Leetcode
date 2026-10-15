function maxAverage(nums, k) {
  let currentSum = 0;

  for (let i = 0; i < k; i++) {
    currentSum += nums[i];
  }

  let avg = currentSum / k;
  let maxAvg = avg;

  for (let i = k; i < nums.length; i++) {
    currentSum = currentSum + nums[i] - nums[i - k];
    avg = currentSum / k;
    maxAvg = Math.max(avg, maxAvg);
  }

  return maxAvg;
}
