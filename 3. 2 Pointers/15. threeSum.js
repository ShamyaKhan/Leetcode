function threeSum(nums) {
  const result = [];
  nums.sort((a, b) => a - b);

  for (const [i, n] of nums.entries()) {
    if (i > 0 && n === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = n + nums[left] + nums[right];
      if (sum === 0) {
        result.push([n, nums[left], nums[right]]);
        left++;
        while (nums[left] === nums[left - 1] && left < right) {
          left++;
        }
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}
