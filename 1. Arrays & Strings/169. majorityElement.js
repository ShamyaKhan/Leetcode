function majorityElement(nums) {
  let count = 0;
  let result = 0;

  for (const num of nums) {
    if (count === 0) {
      result = num;
    }
    if (num === result) {
      count++;
    } else {
      count--;
    }
  }

  return result;
}
