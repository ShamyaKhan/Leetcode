// 1. prefix sum pattern
// commonly used to query sum of elements in a subarray

function prefixSumPattern(array, i, j) {
  const sum = [array[0]];
  for (let i = 1; i < array.length; i++) {
    sum.push(array[i] + sum[i - 1]);
  }
  return sum[j] - sum[i - 1];
}

// 2 pointers pattern

function palindrome(string) {
  let start = 0;
  let end = string.length - 1;

  while (start < end) {
    if (string[start] !== string[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

// 3. sliding window pattern
// find subarray or substrings to meet some criteria

function slidingWindow(array, k) {
  const n = array.length;
  let window_sum = array.slice(0, k).reduce((acc, curr) => acc + curr, 0);

  let max_sum = window_sum;
  let max_start_index = 0;

  for (let i = 0; i < n - k; i++) {
    window_sum = window_sum - array[i] + array[i + k];
    if (window_sum > max_sum) {
      max_sum = window_sum;
      max_start_index = i + 1;
    }
  }

  return {
    max_subarray: array.slice(max_start_index, max_start_index + k),
    max_sum,
  };
}

// 4. fast and slow pointers pattern
// move two pointers at different speed
// problems related to linked list and array that involves finding cycles

// 5. linked list in-place traversal
// change nodes and pointers in-place without using extra space

function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

// 6. monotonic stack pattern
// uses a stack to find the next greater/smaller element in an array

function nextGreaterElement(array) {
  const n = array.length;
  const stack = [];
  const result = [-1] * n;

  for (let i = 0; i < n; i++) {
    while (stack && array[i] > array[stack[-1]]) {
      result[stack.pop()] = array[i];
    }
    stack.push(i);
  }

  return result;
}

// 7. top k elements pattern
// finds k largest/smallest/most frequent elements in a dataset
// k largest: min heap, k-smallest: max-heap
// QuickSelect algorithm

// 8. overlapping intervals pattern
// useful for intervals or ranges that may overlap
// merging interval, interval intersection, insert interval, find minimum meeting rooms
