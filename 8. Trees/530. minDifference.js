function minAbsoluteDifference(root) {
  let prev = null;
  let result = Infinity;

  function dfs(node) {
    if (!node) {
      return;
    }

    dfs(node.left);

    if (prev !== null) {
      result = Math.min(result, node.val - prev);
    }

    prev = node.val;

    dfs(node.right);
  }

  dfs(root);

  return result;
}
