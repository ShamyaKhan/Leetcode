function threeSumClosest(nums, target) {
  let result = Infinity;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (Math.abs(target - sum) < Math.abs(target - result)) {
        result = sum;
      }
      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        return result;
      }
    }
  }

  return result;
}
