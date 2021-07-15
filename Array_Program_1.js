//Count a total number of duplicate elements in an array

const arr = [10, 20, 10, 30, 10, 30, 20, 40, 30, 30];

function countDuplicate(arr) {
  const filteredArray = arr.filter((item, index) => {
    // return arr.indexOf(item) !== index; //To Return the elements which are duplicate
    return arr.indexOf(item) === index; // To Return only unique element from array
  });

  // return [...new Set(filteredArray)]; ////To Return the elements which are duplicate
  return filteredArray; //To Return only unique element from array
}

console.log(countDuplicate(arr));

//--------------------------------------------------------------------------------------------------------------------
