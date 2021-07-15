function getFirstNFabonacciNumbers (endIndex) {
  const arr = [];
  let index = 0;

  while(arr.length < endIndex) {
    if (index < 2) {
      arr.push(1);
    } else {
      arr.push(arr[index - 1] + arr[index - 2]);
    }

    index++
  }

  return arr;
}

function getFabonacciSeiesUpto (endLimit) {
  let arr = [];
  let index = 0;
  let sum = 0;

  while(sum < endLimit) {
    if (index < 2) {
      arr.push(1);
    } else {
      sum = arr[index - 1] + arr[index - 2];

      if (sum < endLimit) {
        arr.push(arr[index - 1] + arr[index - 2]);
      }
    }

    index++
  }

  return arr;
}

console.log(getFirstNFabonacciNumbers(10));
console.log(getFabonacciSeiesUpto(100));
