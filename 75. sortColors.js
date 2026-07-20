function sortColors(nums) {
  let left = 0;
  let right = nums.length - 1;
  let i = 0;

  while (i <= right) {
    if (nums[i] === 0) {
      let temp = nums[left];
      nums[left] = nums[i];
      nums[i] = temp;
      left++;
    } else if (nums[i] === 2) {
      let temp = nums[right];
      nums[right] = nums[i];
      nums[i] = temp;
      right--;
      i--;
    }
    i++;
  }
}
