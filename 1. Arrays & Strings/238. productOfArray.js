function productExceptSelf(nums) {
  // nums    [1, 2, 3, 4]
  // prefix  [1, 2, 6, 24]
  // postfix [24, 24, 12, 4]
  // result  [24, 12, 8, 6]

  let result = Array(nums.length).fill(1);
  let prefix = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix = prefix * nums[i];
  }

  let postfix = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = result[i] * postfix;
    postfix = postfix * nums[i];
  }

  return result;
}
