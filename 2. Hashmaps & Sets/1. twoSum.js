function twoSum(nums, target) {
  const prevMap = new Map();

  for (const [i, n] of nums.entries()) {
    let diff = target - n;

    if (prevMap.has(diff)) {
      return [prevMap.get(diff), i];
    }

    prevMap.set(n, i);
  }

  return;
}
