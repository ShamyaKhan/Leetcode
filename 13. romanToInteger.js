function romanToInteger(s) {
  const romans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (i + 1 < s.length && romans[s[i]] < romans[s[i + 1]]) {
      result -= romans[s[i]];
    } else {
      result += romans[s[i]];
    }
  }

  return result;
}

function romanToInteger2(s) {
  const romans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const subtract = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };

  // MCMXCIV

  let i = 0;
  let sum = 0;

  while (i < s.length) {
    if (i + 1 < s.length && Object.keys(subtract).includes(s[i] + s[i + 1])) {
      sum += subtract[s[i] + s[i + 1]];
      i += 2;
    } else {
      sum += romans[s[i]];
      i++;
    }
  }

  return sum;
}
