function subTree(root, subRoot) {
  if (!subRoot) {
    return true;
  }

  if (!root) {
    return false;
  }

  if (sameTree(root, subRoot)) {
    return true;
  }

  return subTree(root.left, subRoot) || subTree(root.right, subRoot);
}

function sameTree(s, t) {
  if (!s && !t) {
    return true;
  }
  if (s && t && s.val === t.val) {
    return sameTree(s.left, t.left) && sameTree(s.right, t.right);
  }
  return false;
}
