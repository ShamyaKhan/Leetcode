function diameterOfBinaryTree(root) {
  let result = 0;

  function dfs(current) {
    if (!current) {
      return 0;
    }

    const left = dfs(current.left);
    const right = dfs(current.right);

    result = Math.max(result, left + right);
    return 1 + Math.max(left, right);
  }

  dfs(root);
  return result;
}
