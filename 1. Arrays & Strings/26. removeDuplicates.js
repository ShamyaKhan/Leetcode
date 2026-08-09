function removeDuplicates(nums) {
  let k = 1;
  let i = 1;

  while (i < nums.length) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
    i++;
  }
  return k;
}
