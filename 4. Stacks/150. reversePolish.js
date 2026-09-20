function reversePolish(tokens) {
  const stack = [];

  const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => Math.trunc(a / b),
  };

  for (const token of tokens) {
    if (token in operators) {
      const num2 = stack.pop();
      const num1 = stack.pop();

      const result = operators[token](num1, num2);
      stack.push(result);
    } else {
      stack.push(Number(token));
    }
  }

  return stack.pop();
}
