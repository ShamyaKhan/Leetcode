function removeDuplicates2(nums) {
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    let count = 1;

    while (right + 1 < nums.length && nums[right] === nums[right + 1]) {
      right++;
      count++;
    }

    for (let i = 0; i < Math.min(2, count); i++) {
      nums[left] = nums[right];
      left++;
    }

    right++;
  }

  return left;
}
