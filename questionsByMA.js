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

// console.log(getDetails(obj3));
// OUTPUT My name is Ankit Singhania. I scored 99 in Math and 96 in Computer from ISC board


// ❓11  Write a function to calculate sum of n elements where n>=2

const sumOfN = (...numbers) => numbers.reduce((acc, curr) => acc + curr, 0)
// console.log(sumOfN(1, 2, 3)); // 6
// console.log(sumOfN(1, 2, 3, 4)) // 10

const sumOfN2 = (...numbers) => {
  let sum = 0;
  for (let num of numbers) sum += num;
  return sum;
}
// console.log(sumOfN2(1, 2, 3, 4)) // 10


// ❓12 write a function which will take an array of "n" numbers as an argument and will return the object containing maximum number, minimum number and avg of all numbers in array.

const getOutput2 = numbers => {
  let min = numbers[0];
  let max = numbers[0];
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (min > numbers[i]) min = numbers[i];
    if (max < numbers[i]) max = numbers[i];
    sum += numbers[i];
  }
  return { max, min, avg: sum / numbers.length };
}
// console.log(getOutput2([1, 2, 3, 4, 5])); // output : {max: 5, min: 1, avg: 3}

// note: do it without using any inbuilt function



// ❓13 Given an array of numbers, write a function that returns the sum of all the even numbers.
const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8];
const sumOfEven = numbers => numbers.reduce((acc, curr) => curr % 2 === 0 ? acc += curr : acc, 0);
// console.log(sumOfEven(numbers3)); //20


// ❓14 Given an array of numbers, write a function that returns the difference between the largest and smallest numbers.
const numbers4 = [10, 2, 7, 14, 5];
// OUTPUT 12

//1
const difference = numbers => {
  const min = Math.min(...numbers); //Math.min(10,2,7,14,5) = 2
  const max = Math.max(...numbers); //Math.max(10,2,7,14,5) = 14
  return max - min
}

//2
/*const difference = numbers => {
  let min = numbers[0]
  let max = numbers[0]
  for (let i = 0; i < numbers4.length; i++) {
    if (min > numbers4[i]) min = numbers4[i];
    if (max < numbers4[i]) max = numbers4[i];
  }
  return max - min;
}*/
// console.log(difference(numbers4)); 

//3
/*const diff = numbers => numbers.reduce((acc, curr) => {
  if (acc.min > curr) acc.min = curr;
  if (acc.max < curr) acc.max = curr;
  acc.dif = acc.max - acc.min;
  return acc
}, { min: numbers[0], max: numbers[0], dif: 0 });

const getDifference = diff(numbers4);
// console.log(getDifference);
const { dif } = getDifference;
// console.log(dif);*/
// Note: you may use inbuilt function if you want


// ❓15 Given an array of objects representing students, use the reduce function to find the student name with the highest grade.

const students = [
  { name: 'Alice', grade: 85 },
  { name: 'Bob', grade: 70 },
  { name: 'Charlie', grade: 90 },
  { name: 'Dave', grade: 80 }
];

const findStudentName = students => students.reduce((acc, curr) => {
  return acc.grade < curr.grade ? curr : acc;
}, students[0]).name;
const student = findStudentName(students);
// console.log(student);
// OUTPUT Charlie


// ❓16 Given an array of strings, use the reduce function to find the total length of all the strings combined.

const strings = ['hello', 'world', 'how', 'are', 'you'];
const totalLength = strings => strings.reduce((total, curr) => total + curr.length, 0);

/*const totalLength = strings => strings.reduce((acc, curr) => {
  return acc += curr;
}, "").length*/
// console.log(totalLength(strings));
// Output: 19


