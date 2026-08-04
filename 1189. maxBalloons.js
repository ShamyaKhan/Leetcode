function maxNumberOfBalloons(text) {
  const counter = new Map();
  const balloon = "balloon";

  for (let char of text) {
    if (balloon.includes(char)) {
      counter.set(char, (counter.get(char) || 0) + 1);
    }
  }

  return Math.min(
    counter.get("b") || 0,
    counter.get("a") || 0,
    Math.floor((counter.get("l") || 0) / 2),
    Math.floor((counter.get("o") || 0) / 2),
    counter.get("n") || 0,
  );
}
