// ❓1 Write a function that takes an array and returns all the numbers in a new array increased by 10.
const numbers = [1, 2, 3, 4, 5];
const increaseNumbersBy10 = numbers => numbers.map(num => num + 10);
// console.log(increaseNumbersBy10(numbers));
// OUTPUT [ 11, 12, 13, 14, 15 ]

// ❓2 Write a function that takes an array and returns a new array having even indexes numbers subtracted by 2 and odd indexes numbers added by 3.
const numbers1 = [10, 20, 30, 40, 50]
const getNums = numbers => numbers.map((num, i) => i % 2 === 0 ? num - 2 : num + 3);
// console.log(getNums(numbers1));
// OUTPUT [ 8, 23, 28, 43, 48 ]


// ❓3 Write a function that takes an array and returns a new array having even numbers multiplied by 20 and odd numbers multiplied by 30.
const numbers2 = [8, 5, 7, 2, 4, 13, 27, 10];
const getMultipliedNums = numbers => numbers.map(num => num % 2 === 0 ? num * 20 : num * 30);
// console.log(getMultipliedNums(numbers2));
// OUTPUT [160, 150, 210,  40,80, 390, 810, 200]


// ❓4 Given an object, Write a program using destructing to find a number in this object which is divisible both by 3 and 5
const obj = {
  a: 10,
  b: 12,
  arr: [10, 8, 15, 14]
}

const findNumbers = ({ a, b, arr }) => {
  const allNumbers = [a, b, ...arr];
  return allNumbers.filter(num => num % 3 === 0 && num % 5 === 0);
}
// console.log(findNumbers(obj));
// OUTPUT [ 15 ]


// ❓5 Given an object, Write a function that takes the above object and returns a new array containing the company names.
const obj1 = {
  details: [
    { name: 'Ankit', company: 'Chalo' },
    { name: 'Rohan', company: 'Razorpay' },
    { name: 'Shivam', company: 'No Broker' }
  ]
}

const getCompanyNames = ({ details }) => details.map(({ company }) => company);
// console.log(getCompanyNames(obj1));
// OUTPUT [ 'Chalo', 'Razorpay', 'No Broker' ]


// ❓6 Write a function that takes the above object and returns a new array containing the company names for people having names starting with A.
const obj2 = {
  details: [
    { name: 'Ankit', company: 'Chalo' },
    { name: 'Rohan', company: 'Razorpay' },
    { name: 'Shivam', company: 'No Broker' }
  ]
}

const getComapny = ({ details }) => details.filter(({ name, company }) => name[0] === "A").map(({ company }) => company);
// console.log(getComapny(obj2));
// OUTPUT [ 'Chalo' ]


// ❓7 Write a function that takes a string of words separated by space and returns an array with the string of word separated by its length.

const string = "apple banana";
const getStrArr = string => string.split(" ").map(word => `${word} ${word.length}`);
// console.log(getStrArr(string));
// OUTPUT [ 'apple 5', 'banana 6' ]


// ❓8 Given an array of objects, write a code for "getOutput" function to return the first object that contains a specific given key-value pair.
const arr = [
  { name: "John", age: 25 },
  { name: "Sarah", age: 30 },
  { name: "Bob", age: 20 }
]
const key = "age"
const value = 25

const getOutput = (peoples, key, value) => peoples.find(people => people[key] === value);
// console.log(getOutput(arr));
// OUTPUT { name: 'John', age: 25 }


// ❓9  Given an array of strings, use the filter method to return a new array containing only the strings that are palindromes.
const arrOfStrings = ["racecar", "banana", "level", "apple"];

// 1st way
const getPalindromeStings = strings => strings.filter(elem => elem.split("").reverse().join("") === elem);
// console.log(getPalindromeStings(arrOfStrings));
// OUTPUT [ 'racecar', 'level' ]

// 2nd way
const getPalindromeSting = string => {
  let reverseStr = "";
  let splitStr = string.split("")
  for (let i = splitStr.length - 1; i >= 0; i--) {
    // console.log(string[i]);
    reverseStr += splitStr[i];
  };
  return reverseStr === string;
}
const palindromeStrings = arrOfStrings.filter(getPalindromeSting)
// console.log(palindromeStrings);
// OUTPUT [ 'racecar', 'level' ]


// 3rd way
// Here we are comparing 1st letter with last letter, second letter to the second last letter and so on.
const getPalindromeStr = str => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
}
const palindromeStrings2 = arrOfStrings.filter(getPalindromeStr);
// console.log(palindromeStrings2);
// OUTPUT [ 'racecar', 'level' ]


// ❓10 Given an object, Write a arrow function which takes an object and prints the particular sentence "My name is Ankit Singhania. I scored 99 in Math and 96 in Computer from ISC board".
const obj3 = {
  name: "Ankit Singhania",
  school: {
    board: ["ISC"],
    marks: [
      { subject: "Math", percent: 99 },
      { subject: "Computer", percent: 96 },
    ],
  },
};

const getDetails = ({ name, school: { board: [board], marks: [{ subject: sub1, percent: sub1M }, { subject: sub2, percent: sub2M }] } }) => {
  // const { name, school } = obj;
  // const { board, marks } = school;
  // const [subject1, subject2] = marks;
  // const { subject: sub1, percent: sub1mark } = subject1;
  // const { subject: sub2, percent: sub2mark } = subject2;
  return `My name is ${name}. I scored ${sub1mark} in ${sub1} and ${sub2mark} in ${sub2} from ${board} board.`
}
// const obj = {
//   name: "Ankit Singhania",
//   school: {
//     board: ["ISC"],
//     marks: [
//       { subject: "Math", percent: 99 },
//       { subject: "Computer", percent: 96 },
//     ],
//   },
// };


// console.log(name,board,sub1,sub1M)
// console.log(getDetails(obj3));
// OUTPUT My name is Ankit Singhania. I scored 99 in Math and 96 in Computer from ISC board