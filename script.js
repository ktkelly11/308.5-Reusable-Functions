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
// let strings = ["Hello", "JavaScript", "is", "difficult", ":("];
function longestStrings(array) {
  let maxLength = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > maxLength) {
      maxLength = array[i].length;
    }
  }
  const longestStrs = array.filter((str) => str.length === maxLength);

  return longestStrs;
}
const strings = ["Hello", "JavaScript", "is", "difficult", ":("];
const longest = longestStrings(strings);
console.log(longest); // JavaScript

// function longestStrArray(strings) {
//   let arraySplit = strings.split("");
//   let longestWord = 0;
//   for (let i = 0; i < strings.Split.length; i++) {
//     if (arraySplit[i].length > longestWord) {
//       longestWord = arraySplit[i].length;
//     }
//   }
//   return longestWord;
// }
// console.log(longestStrArray(strings)); // should return JavaScript, but isn't

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

// Take an array of strings, and a number and return an array of the strings that are longer than the given number
const words = [
  "I",
  "hate",
  "JavaScript",
  "and",
  "really",
  "don't",
  "understand",
];

function wordsLongerArray(words, minLength) {
  return words.filter((word) => word.length > minLength);
}

const longWords = wordsLongerArray(words, 3);
console.log(longWords); // ["hate","JavaScript", "really", "don't", "understand"]

// function wordsLongerArray(string, k) {
//   let words = string.plit(" ");
//   let count = 0;
//   for (let word of words) {
//     if (word.length > k) {
//       console.log(word);
//       count++;
//     }
//     if (count === 0) {
//       console.log("No word is greater than length ${k");
//     }

//     return count;
//   }
// }

// Take a number, n, and print every number between 1 and n without using loops. Use recursion.
function printNum(n) {
  if (n > 0) {
    printNum(n - 1);
    console.log(n + " ");
  }
  return;
}

let n = 11;
console.log(printNum(n - 1));

console.log("==================================");
// Part 2: Thinking Methodically
const newArray = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" },
];

// Sort the array by age
function sortByAge(arr) {
  return newArray.sort((a, b) => parseInt(a.age) - parseInt(b.age));
}

console.log(sortByAge([...newArray])); // ordered the ages as: 19, 25, 41, 58, 111

// function groupBy(arr, callback) {
//   let result = {};

//   arr.forEach((obj) => {
//     let key = callback(obj);

//     if (!result.hasOwnProperty(key)) {
//       result[key] = [];
//     }

//     result[key].push(obj);
//   });

//   return result;
// }

// console.log(
//   groupBy(newArray, function (obj) {
//     return obj.age;
//   })
// );

// Filter the array to remove entries with an age greater than 50
let newerArray = newArray.filter((person) => person.age <= 50);

console.log(newerArray); // returned Bob (19), Barry (25), and Bruce(41)

// Map the array to change the “occupation” key to “job” and increment every age by 1

// function rename() {
//   newestArray = newerArray.map(function (obj) {
//     obj["occupation"] = obj["job"];

//     delete obj["Burma"];

//     return obj;
//   });
//   console.log(newestArray);
// }

// rename();

// const newestArray = newerArray.map(({ occupation: job, ...rest }) => ({
//   job,
//   ...rest,
// }));

// console.log(newerArray);
