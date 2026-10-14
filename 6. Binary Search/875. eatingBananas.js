function eatingBananas(piles, h) {
  let left = 1;
  let right = Math.max(...piles);
  let result = right;

  while (left <= right) {
    const k = Math.floor((left + right) / 2);
    let hours = 0;

    for (const p of piles) {
      hours = hours + Math.ceil(p / k);
    }

    if (hours <= h) {
      result = Math.min(result, k);
      right = k - 1;
    } else {
      left = k + 1;
    }
  }

  return result;
}
