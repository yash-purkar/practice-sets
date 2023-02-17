// https://akanksha-neogcamp.notion.site/ES6-Practice-Question-Set-1-10b3595abec64e34916ea6267b6ac25f
// practice set link


// 1️⃣. Write a function that takes a user's age and determines if they are old enough to vote (age 18 or older).

const isEligibleToVote = age => age >= 18 ? `Eligible to vote` : `Not eligible to vote`;

// console.log(isEligibleToVote(20)); //Eligible to vote
// console.log(isEligibleToVote(18)); //Eligible to vote
// console.log(isEligibleToVote(17)); //Not eligible to vote


// 2️⃣. Write a function that takes two numbers as input and determines which one is greater.

const isGreater = (a, b) => a > b ? `${a} is Greater` : `${b} is Greater`;

// console.log(isGreater(2, 5)); // 5 is Greater
// console.log(isGreater(10, 5)); // 10 is Greater


// 3️⃣ Write a function that takes a number as input and determines if it is positive or negative.

const checkNum = num => num >= 1 ? `Positive Number` : `Negative Number`;

// console.log(checkNum(9)); //Positive Number
// console.log(checkNum(-8)); //Negative Number
// console.log(checkNum(22)); //Positive Number

// 4️⃣ Write a function that takes a number as input and determines if it is even or odd.

const isEvenOrOdd = num => num % 2 == 0 ? `Even Number` : `Odd Number`;
// console.log(isEvenOrOdd(5)); //Odd Number
// console.log(isEvenOrOdd(8)); //Even Number
// console.log(isEvenOrOdd(10)); //Even Number

// 5️⃣ Write a function that takes a string as input and determines if it contains the letter 'a' or ‘A’.
// 1st Way

const checkForAlphabetA = str => str.toLowerCase().includes(`a`) ? `Includes a` : `Does not include a`

// 2nd Way
/*const checkForAlphabetA = str => {
  // console.log(str.split(``));
  const newStrArr = str.split(``);
  for (let i = 0; i < newStrArr.length; i++) {
    if (newStrArr[i].toLowerCase() === `a`) {
      return `Includes a`;
    }
  }
  return `Not Includes a`;
}*/

// Your ES6 code here

// console.log(checkForAlphabetA(`Tanay`)) // Includes a 
// console.log(checkForAlphabetA(`Jeep`)) // Does not include a 
// console.log(checkForAlphabetA(`Jane`)) // Includes a 


// 6️⃣ Write a function that takes a string as input and determines if it is longer than 5 characters.

const checkLength = str => str.length > 5 ? `More than 5 characters` : `Less than 5 characters`;

// console.log(checkLength(`Programming`)) //More than 5 characters
// console.log(checkLength(`Jeep`)) // less than 5 characters 

// 7️⃣ Write a function that takes a number as input and determines if it is between 1 and 10.

const isBetweenOneAndTen = num => (num > 1 && num < 10);

// console.log(isBetweenOneAndTen(5)); // true
// console.log(isBetweenOneAndTen(11)); // false


// 8️⃣ Write a function that takes a string as input and determines if it contains the word `hello`.
const isHelloPresent = str => str.includes(`hello`);

// console.log(isHelloPresent(`hello world`)) // true
// console.log(isHelloPresent(`World`)) // false

// 9️⃣ Write a function that takes a number as input and determines if it is a multiple of 3.

const isMultipleOfThree = num => num % 3 == 0;

// console.log(isMultipleOfThree(5));
// console.log(isMultipleOfThree(9));

// 🔟 Write a function which takes in a number as input and returns it after multiplying by 10.

const multiplyByTen = num => num * 10;

// console.log(multiplyByTen(20)); // 200
// console.log(multiplyByTen(40)); // 400

// 1️⃣1️⃣ Console individual values of the product object using object destructuring.

const product = {
  title: `iPhone`,
  price: 5999,
  description: `The iPhone is a smartphone developed by Apple`
}

const { title, price, description } = product;

// console.log(title); // iPhone
// console.log(price); // 999
// console.log(description); // The iPhone is a smartphone developed by Apple

// 1️⃣2️⃣ Create an object book with properties title, author, and pages. Create a function getBookDetails that takes a book object as a parameter and returns if the book has more than 100 pages.

const bookObj = {
  title: `Wise and other wise`,
  author: `Sudha murthy`,
  pages: 158
}

const getBookDetails = bookObj => bookObj.pages > 100;
// console.log(getBookDetails(bookObj)); // true


// 1️⃣3️⃣ Create a function changeOccupation that takes an object person and a string newOccupation as parameters, and changes the occupation property of the person object to the newOccupation. Log the person object to the console before and after calling the function.

const person = {
  name: `p1`,
  age: 21,
  occupation: `Student`
}

const changeOccupation = (obj, newOcc) => obj.occupation = newOcc;

// console.log(person);
// changeOccupation(person, `Employee`);
// console.log(person);


// 1️⃣4️⃣ Given an array numbers containing the numbers 1, 2, and 3. Use array destructuring to log each number to the console.

const numbers = [1, 2, 3];
const [a, b, c] = numbers;
// console.log(a); //1
// console.log(b); //2
// console.log(c); //3


// 1️⃣5️⃣ Convert the given function into ES6 with least amount of characters.
/*function defaultParamsFunc(a, b, c) {
  if (c === undefined) {
      c = 4;
  }
  return a * b * c;
};*/

const defaultParamsFunc = (a, b, c = 4) => a * b * c;

console.log(defaultParamsFunc(3, 1)); //12
console.log(defaultParamsFunc(3, 10)); //120