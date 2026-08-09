class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    }
    if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }
}

function sortedArrayToBST(nums) {
  function helper(left, right) {
    if (left > right) {
      return null;
    }
    let mid = Math.floor((right + left) / 2);
    let root = new Node(nums[mid]);
    root.left = helper(left, mid - 1);
    root.right = helper(mid + 1, right);
    return root;
  }
  return helper(0, nums.length - 1);
}
