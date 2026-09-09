function fourSum(nums, target) {
  nums.sort((a, b) => a - b);
  const result = [];
  const quad = [];

  function KSum(k, start, target) {
    if (k !== 2) {
      for (let i = start; i < nums.length - k + 1; i++) {
        if (i > start && nums[i] === nums[i - 1]) {
          continue;
        }

        quad.push(nums[i]);
        KSum(k - 1, i + 1, target - nums[i]);
        quad.pop();
      }
      return;
    }
    let left = start;
    let right = nums.length - 1;

    while (left < right) {
      if (nums[left] + nums[right] < target) {
        left++;
      } else if (nums[left] + nums[right] > target) {
        right--;
      } else {
        result.push([...quad, nums[left], nums[right]]);
        left++;
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }
      }
    }
  }

  KSum(4, 0, target);

  return result;
}
