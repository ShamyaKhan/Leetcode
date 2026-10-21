function invertBinaryTree(root) {
  if (!root) {
    return null;
  }

  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertBinaryTree(root.left);
  invertBinaryTree(root.right);

  return root;
}
