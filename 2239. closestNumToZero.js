function closestNumToZero(nums) {
  let result = Infinity;
  let index;

  for (let i = 0; i < nums.length; i++) {
    if (Math.abs(nums[i]) - 0 < result) {
      result = Math.abs(nums[i]) - 0;
      index = i;
    } else if (Math.abs(nums[i]) - 0 === result) {
      result = Math.abs(nums[i]) - 0;
      index = nums[i] > nums[index] ? i : index;
    }
  }

  return nums[index];
}
