function jumpGame2(nums) {
  let result = 0;
  let left = 0;
  let right = 0;

  while (right < nums.length - 1) {
    let furthest = 0;

    for (let i = left; i < right + 1; i++) {
      furthest = Math.max(furthest, i + nums[i]);
    }

    left = right + 1;
    right = furthest;
    result++;
  }

  return result;
}
