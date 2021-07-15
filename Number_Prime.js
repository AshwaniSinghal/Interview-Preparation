// To generate the prime numbers upto a specified value

function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function getPrimeNumbers(startLimit, endLimit) {
  const arr = [];
  let num = 2;
  let sum = 0;

  while(sum <= endLimit) {
    if (isPrime(num)) {
      arr.push(num);
      sum += num
    }

    num++;
  }

  return arr;
}

console.log(getPrimeNumbers(10, 90));
