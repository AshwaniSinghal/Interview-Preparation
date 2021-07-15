// To find odd numbers

function getOddNumbers(endLimit) {
  const arr = [];
  let num = 0;

  while (arr.length < endLimit) {
    if (num % 2 !== 0) {
      arr.push(num);
    }

    num++
  }

  return arr;
}

console.log(getOddNumbers(10))
// console.log(getOddNumbers(7, 15));
