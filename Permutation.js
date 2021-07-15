const tempArr = [];

function swap(str, i ,j) {
  const arr = str.split("");
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;

  return arr.join("");

}

function getPermutation(str, startIndex, endIndex) {
  if (startIndex === endIndex) {
    tempArr.push(str);
    return str;
  } else {
    for (let i=startIndex; i <= endIndex; i++) {
      str = swap(str, startIndex, i);
      getPermutation(str, startIndex + 1, endIndex);
      str = swap(str, startIndex, i);
    }
  }
}

const str = "ABBDD";
getPermutation(str, 0, str.length - 1);

const uniqueArr = tempArr.filter((item, index) => {
  return tempArr.indexOf(item) === index;
});

console.log(uniqueArr.length);
