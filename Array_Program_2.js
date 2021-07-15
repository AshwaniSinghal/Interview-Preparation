// To find which number is coming max time in an array

const arr1 = [1, 2, 11, 2, 11, 2, 11, 0, 2, 11, 11, 11, 0, 2, 3, 8, 0, 9, 2, 3, 10, 11];
// const arr1 = ["Ashwani", "Urvashi", "Ashwani", "Urvashi", "Ashwani", "Urvashi", "Urvashi", "AShwani"];

function findMaxDuplicate (arr) {
  let maxCount = 0;
  let maxCountItem;

  for(let i=0; i < arr.length; i++) {
    let tempCount = 0;

    for (let j=i; j<arr.length; j++) {
      if (arr[i] === arr[j]) {
        tempCount++
      }

      if (maxCount < tempCount) {
        maxCount = tempCount;
        maxCountItem = arr[i];
      }
    }
  }

  return maxCountItem;
}

//Approach 2 with only one time loop. This will not work if we have array with both string and numbers. For that
// Approach 1 is required
function findMaxDuplicateNew (arr) {
  const sortedArr = arr.sort((a,b) => a-b);
  // const sortedArr = arr.sort();
  let maxCount = 0;
  let maxCountItem;

  for (let i= 0; i < sortedArr.length; i++) {
    const firstIndex = sortedArr.indexOf(sortedArr[i]);
    const lastIndex = sortedArr.lastIndexOf(sortedArr[i]);
    const diff = (lastIndex - firstIndex) + 1;

    if (diff > maxCount) {
      maxCount = diff;
      maxCountItem = sortedArr[i];
    }
  }

  return {
    maxCount,
    maxCountItem
  };
}

// console.log(findMaxDuplicate(arr1));
console.log(findMaxDuplicateNew(arr1).maxCount);
console.log(findMaxDuplicateNew(arr1).maxCountItem);
