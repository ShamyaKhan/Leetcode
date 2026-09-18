function baseballGame(operations) {
  const stack = [];
  let result = 0;

  for (let op of operations) {
    if (op === "C") {
      result -= stack[stack.length - 1];
      stack.pop();
    } else if (op === "D") {
      const num = stack[stack.length - 1] * 2;
      stack.push(num);
      result += num;
    } else if (op === "+") {
      const num = stack[stack.length - 1] + stack[stack.length - 2];
      stack.push(num);
      result += num;
    } else {
      const num = Number(op);
      stack.push(num);
      result += num;
    }
  }

  return result;
}
