// Find GCD and LCM of Two numbers
// a * b = LCM * GCD

function getGCD(x, y) {
  x = Math.abs(x);
  y = Math.abs(y);

  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }

  return x;
}

function getLCM(a, b) {
  return ((a * b) / getGCD(a, b));
}

function findPossibleCombinations(LCM, GCD) {
  let count = 0;
  const product = LCM * GCD;

  for (let a = 1; a <= LCM; a++) {
    if (product % a === 0 && getGCD(a, product/a) ===  GCD) {
      count++;
    }
  }

  return count;
}

// console.log(getGCD(12,8));
// console.log(getLCM(12,8));

const G = 2, L = 12;

console.log(findPossibleCombinations(12, 4));
