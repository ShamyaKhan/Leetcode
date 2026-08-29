function sortedSquares(nums) {
  let left = 0;
  let right = nums.length - 1;
  let result = [];

  while (left <= right) {
    if (nums[left] ** 2 > nums[right] ** 2) {
      result.push(nums[left] ** 2);
      left++;
    } else {
      result.push(nums[right] ** 2);
      right--;
    }
  }

  return result.reverse();
}
