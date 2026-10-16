function maxConsecutiveOnes(nums, k) {
  let maxWindow = 0;
  let numZeroes = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      numZeroes++;
    }

    while (numZeroes > k) {
      if (nums[left] === 0) {
        numZeroes--;
      }
      left++;
    }

    let window = right - left + 1;

    maxWindow = Math.max(window, maxWindow);
  }

  return maxWindow;
}
