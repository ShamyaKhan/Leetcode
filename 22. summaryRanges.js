function summaryRanges(nums) {
  const result = [];
  let i = 0;

  while (i < nums.length) {
    let start = nums[i];
    while (i < nums.length - 1 && nums[i] + 1 === nums[i + 1]) {
      i++;
    }
    if (start !== nums[i]) {
      result.push(String(start) + "->" + String(nums[i]));
    } else {
      result.push(String(nums[i]));
    }
    i++;
  }
  return result;
}
