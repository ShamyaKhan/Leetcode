function minSubArrayLen(target, nums) {
  let left = 0;
  let sum = 0;
  let result = Infinity;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum >= target) {
      result = Math.min(right - left + 1, result);
      sum -= nums[left];
      left += 1;
    }
  }

  return result === Infinity ? 0 : result;
}
