function copyRandomList(head) {
  const oldToCopy = new Map();
  let current = head;
  oldToCopy.set(null, null);

  while (current) {
    const copy = new Node(current.val);
    oldToCopy.set(current, copy);
    current = current.next;
  }

  current = head;

  while (current) {
    const copy = oldToCopy.get(current);
    copy.next = oldToCopy.get(current.next);
    copy.random = oldToCopy.get(current.random);
    current = current.next;
  }

  return oldToCopy.get(head);
}
