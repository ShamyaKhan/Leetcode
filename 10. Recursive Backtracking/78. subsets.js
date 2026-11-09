function subsets(nums) {
  let result = [];
  let path = [];

  function backtrack(index) {
    // base case
    if (index === nums.length) {
      result.push([...path]);
      return;
    }

    // choice 1: include current element
    path.push(nums[index]);

    backtrack(index + 1);

    // backtrack: undo the choice
    path.pop();

    // choice 2: exclude current element
    backtrack(index + 1);
  }

  backtrack(0);

  return result;
}
