function insertGCD(head) {
  function gcd(a, b) {
    while (b > 0) {
      let remainder = a % b;
      a = b;
      b = remainder;
    }
    return a;
  }

  let node = head;

  while (node.next) {
    let n1 = node.val;
    let n2 = node.next.val;

    node.next = new ListNode(gcd(n1, n2), node.next);
    node = node.next.next;
  }

  return head;
}
