console.log("I will try my best on this lab!");

console.log("==================================");
// Part 1: Thinking Functionally

// Take an array of numbers and return the sum
function sumArray(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

let numbers = [9, 4, 11, 14, 2, 6];
let result = sumArray(numbers);

console.log(result); // 46

// Take an array of numbers and return the average.
function averageArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

let average = averageArray(numbers);
console.log(average); // 7.66666666666666667

// function averageArray(arr) {
//   const sum = numbers.reduce((acc, val) => acc + val, 0);
//   return arr.length ? arr.length : 0;
// }
// let average = averageArray(numbers);

// console.log(average); // 6

// Take an array of strings and return the longest string
let strings = ["Hello", "JavaScript", "is", "difficult", ":("];

function longestStrArray() {
  let arraySplit = strings.split("");
  let longestWord = 0;
  for (let i = 0; i < strings.Split.length; i++) {
    if (arraySplit[i].length > longestWord) {
      longestWord = arraySplit[i].length;
    }
  }
  return longestWord;
}
console.log(longestStrArray(strings)); // JavaScript

// function longestStrArray(arr) {
//   let longest = "";
//   arr.map(function (str) {
//     if (str.length > longest.length) {
//       longest = str;
//     }
//   });
//   return longest;
// }

// let strings = ["Hello", "JavaScript", "is", "difficult", ":("];
// console.log(longestStrArray(strings));

// function longestStrArray(arr) {
//   let longestString = "";
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "string" && arr[i].length > longestString.length) {
//       longestString = strings[i];
//     }
//   }
//   return longestString;
// }

// function longestStrArray(arr) {
//   let longestStr = arr[0].length;
//   let answer = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     let longest = arr[i].length;
//     if (longest > longestStr) {
//       answer = arr[i];
//       longestStr = longest;
//     }
//   }
//   return answer;
// }

console.log("==================================");
// Part 1: Thinking Functionally
