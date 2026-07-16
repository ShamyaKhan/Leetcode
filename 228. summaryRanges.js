function summaryRanges(nums) {
  let result = [];
  let i = 0;

  while (i < nums.length) {
    let val = nums[i];
    while (i < nums.length - 1 && nums[i] + 1 === nums[i + 1]) {
      i++;
    }
    if (nums[i] === val) {
      result.push(String(val));
    } else {
      result.push(String(val) + "->" + String(nums[i]));
    }
  }

  return result;
}
