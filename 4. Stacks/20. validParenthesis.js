function validParenthesis(s) {
  const stack = [];
  const hash = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const char of s) {
    if (char in hash) {
      if (stack.length && stack[stack.length - 1] === hash[char]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}
