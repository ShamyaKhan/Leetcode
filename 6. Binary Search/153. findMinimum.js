function findMinimum(nums) {
  let left = 0;
  let right = nums.length - 1;
  let highest = nums[right];

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] <= highest) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return nums[left];
}
