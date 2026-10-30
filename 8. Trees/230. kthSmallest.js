function kthSmallestElement(root, k) {
  let count = 0;
  let result = null;

  function inOrderTraversal(node) {
    if (!node || result !== null) {
      return;
    }

    inOrderTraversal(node.left);

    count++;

    if (count === k) {
      result = node.val;
    }

    inOrderTraversal(node.right);
  }

  inOrderTraversal(root);

  return result;
}
