function findFactorial(num) {
  if (num < 0) {
    return -1
  } else if (num === 0) {
    console.log(1);
    return 1;
  } else {
    console.log(num);
    return num * findFactorial(num - 1);
  }
}

console.log(findFactorial(5));
