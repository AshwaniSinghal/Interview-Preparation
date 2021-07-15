// To Find the largest Palindrome in string

const str = "aaabababa";
const num = 101;

function isPalindrome (str) {
  return str === str.split("").reverse().join("")
}

function longestPalindrome (str) {
  let maxLength = 0;
  let maxPalindrome = "";
  let allPalindromes = [];

  for (let i=str.length; i > 0; i--) {
    for(let j=str.length; j>0; j--) {
      const subStr = str.substr(j-i, i);

      if (isPalindrome(subStr) && subStr.length > 1) {
        allPalindromes.push(subStr);
      }

      if (isPalindrome(subStr) && subStr.length > maxLength) {
        maxLength = subStr.length;
        maxPalindrome = subStr;
      }
    }
  }

  return {
    maxLength,
    maxPalindrome,
    allPalindromes
  }

}

console.log(longestPalindrome(str).maxLength);
console.log(longestPalindrome(str).maxPalindrome);

// console.log(isPalindrome(str));
// console.log(isPalindrome(num.toString()));
