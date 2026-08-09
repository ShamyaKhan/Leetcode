function removeElement(nums, val) {
  let k = 0;
  let i = 0;

  while (i < nums.length) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
    i++;
  }
  return k;
}
