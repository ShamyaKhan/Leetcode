function reverseLinkedList(head) {
  let prev = null;
  let curr = head;

  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  return prev;
}

function reverseLinkedListRecursive(head) {
  if (!head) {
    return null;
  }

  let newHead = head;

  if (head.next) {
    newHead = reverseLinkedListRecursive(head.next);
    head.next.next = head;
  }

  head.next = null;

  return newHead;
}
