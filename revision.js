// 🔸ES6+ Practice Question Set 1

// 1. Write a function that takes a user's age and determines if they are old enough to vote (age 18 or older).

// Your ES6 code here
const isEligibleToVote = age => age >= 18 ? `Eligible to vote` : `Not eligible to vote`


// console.log(isEligibleToVote(20)) // Eligible to vote
// console.log(isEligibleToVote(18)) // Eligible to vote
// console.log(isEligibleToVote(17)) // Not eligible to vote



// 2. Write a function that takes two numbers as input and determines which one is greater.

// Your ES6 code here
const isGreater = (num1, num2) => num1 > num2 ? `${num1} is greater than ${num2}` : `${num2} is greater than ${num1}`


// console.log(isGreater(2, 5)) // 5 is greater than 2
// console.log(isGreater(10, 5)) // 10 is greater than 5



// 3. Write a function that takes a number as input and determines if it is positive or negative.
// Your ES6 code here
const checkNum = num => num >= 0 ? `Positive Number` : `Negative Number`


// console.log(checkNum(9)) // Positive Number
// console.log(checkNum(-8)) // Negative Number
// console.log(checkNum(22)) // Positive Number


//4. Write a function that takes a number as input and determines if it is even or odd.

// Your ES6 code here
const isEvenOdd = num => num % 2 === 0 ? `Even Number` : `Odd Number`


// console.log(isEvenOdd(5)) // Odd Number
// console.log(isEvenOdd(8)) // Even Number
// console.log(isEvenOdd(10)) // Even Number


// 5.Write a function that takes a string as input and determines if it contains the letter 'a' or ‘A’.
// Your ES6 code here

const checkForAlphabetA = str => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a' || str[i] === 'A') return 'Includes a'
  }
  return 'Does not include a'
}

// console.log(checkForAlphabetA("Tanay")) // Includes a 
// console.log(checkForAlphabetA("Jeep")) // Does not include a 
// console.log(checkForAlphabetA("Jane")) // Includes a 



// 6.Write a function that takes a string as input and determines if it is longer than 5 characters.
// Your ES6 code here
const checkLength = str => str.length > 5 ? `more than 5 characters` : `less than 5 characters`


// console.log(checkLength("Programming")) // more than 5 characters 
// console.log(checkLength("Jeep")) // less than 5 characters 



// 7.Write a function that takes a number as input and determines if it is between 1 and 10.
// Your ES6 Code here
const isBetweenOneAndTen = num => num > 0 && num < 11


// console.log(isBetweenOneAndTen(5)); // true
// console.log(isBetweenOneAndTen(11)); // false


// 8. Write a function that takes a string as input and determines if it contains the word "hello".
// Your ES6 code here
const isHelloPresent = str => {
  const strArr = str.split(" ");
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].toLowerCase() === "hello") return true;
  }
  return false;

}

// console.log(isHelloPresent("Hello World")) // true
// console.log(isHelloPresent("World")) // false



//   9. Write a function that takes a number as input and determines if it is a multiple of 3.
// Your ES6 code here
const isMultipleOfThree = num => num % 3 === 0


// console.log(isMultipleOfThree(5)); // false
// console.log(isMultipleOfThree(9)); // true


// 10. Write a function which takes in a number as input and returns it after multiplying by 10.
// Your ES6 code here

const multiplyByTen = num => num * 10

// console.log(multiplyByTen(20)) // 200
// console.log(multiplyByTen(40)) // 400


// 11. Console individual values of the product object using object destructuring.

const product = {
  title: "iPhone",
  price: 5999,
  description: "The iPhone is a smartphone developed by Apple"
}

// Your ES6 code here
const { title, price, description } = product

// console.log(title); // iPhone
// console.log(price); // 5999
// console.log(description); // The iPhone is a smartphone developed by Apple



// 12. Create an object book with properties title, author, and pages. Create a function getBookDetails that takes a book object as a parameter and returns if the book has more than 100 pages.
// Your ES6 code here
const book = {
  title: "Wise and other wise",
  atuthor: "Sudha Murthy",
  pages: 1500
}

const book1 = {
  title: "book2",
  atuthor: "Unknown",
  pages: 75
}

const getBookDetails = ({ pages }) => pages > 100

// console.log(getBookDetails(book)) // logs 'true' if the pages are above 100
// console.log(getBookDetails(book1)) // logs 'false' if the pages are 100 or below


//13. Create a function changeOccupation that takes an object person and a string newOccupation as parameters, and changes the occupation property of the person object to the newOccupation. Log the person object to the console before and after calling the function.

// Your ES6 code here
const person = { name: 'Amit', age: 25, occupation: 'Software Engineer' }

const changeOccupation = (person, newOccupation) => person.occupation = newOccupation;

// console.log(person); // logs { name: 'Amit', age: 25, occupation: 'Software Engineer' } to the console
// changeOccupation(person, 'Product Manager');
// console.log(person); // logs { name: 'Amit', age: 25, occupation: 'Product Manager' } to the console


// 14. Given an array numbers containing the numbers 1, 2, and 3. Use array destructuring to log each number to the console.
const numbers = [1, 2, 3];
// Your ES6 code here
const [a, b, c] = numbers;

// console.log(a); // logs 1 to the console
// console.log(b); // logs 2 to the console
// console.log(c); // logs 3 to the console


// 15. Convert the given function into ES6 with least amount of characters

// 	function defaultParamsFunc(a, b, c) {
//     if (c === undefined) {
//         c = 4;
//     }
//     return a * b * c;
// 	};

const defaultParamsFunc = (a, b, c = 4) => a * b * c;

console.log(defaultParamsFunc(3, 1)); // 12
console.log(defaultParamsFunc(3, 10)); // 120



// es6 set 2

// 1. Create an object person with two properties, "name" and "age" and then updates the "age" property to a new value. Initial age should be 30.

// Your code here
const person5 = {
  name: "Person1",
  age: 30
}

person.age = 35;

// console.log(person5.age); // Output: 35



// 2. Write a function that takes an object car and returns true if the car is a sports car (i.e. has a horsepower property greater than or equal to 300)

//Your ES6 code here
const isSportsCar = ({ horsepower }) => horsepower >= 300;


const car1 = { make: 'Porsche', model: '911', horsepower: 450 };
const car2 = { make: 'Toyota', model: 'Camry', horsepower: 200 };
// console.log(isSportsCar(car1)); // true
// console.log(isSportsCar(car2)); // false



//3. Write a function that takes an object person and a number num as arguments and returns true if the person's age plus num is greater than 21. Otherwise, it should return false.
// Your ES6 code here

const isEligible = ({ age }, num) => age + num > 21;

const person1 = { name: 'Ajay', age: 20 };
// console.log(isEligible(person1, 1)); // false
// console.log(isEligible(person1, 2)); // true


// 4. Write a function that takes an object blog and returns true if the blog has more than 1000 views (i.e. has a views property greater than 1000)

// Your ES6 code here
const getViews = ({ views }) => views > 1000;


const blog1 = { title: 'How to Learn JavaScript', author: 'John Doe', views: 1430 };
const blog2 = { title: '10 Reasons to Start a Blog', author: 'Jane Smith', views: 500 };
// console.log(getViews(blog1)); // true
// console.log(getViews(blog2)); // false


//5. Swap the values of two variables using array destructuring.
let x = 1;
let y = 2;
// Your ES6 Code here
[x, y] = [y, x]


// console.log(x) // 2
// console.log(y) // 1


// 6. Convert this function into ES6 with least amount of characters.
// function add(a = 30, b = 0) {
// 	  return a + b;
// 	}
const add = (a = 30, b = 0) => a + b;

// console.log(add(2, 3));


// 7. Write an ES6 function combineObjects with least amount of characters which merges two objects into one.
// Your ES6 function here

const combineObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObj = combineObjects(obj1, obj2);
// console.log(combinedObj);
// Expected Output: {a: 1, b: 2, c: 3, d: 4}


// 8. Convert the function getData, into an ES6 function with last amount of characters. 

//     function getData(person) {
//     const name = person.name;
// 		const address = person.address.city
//     console.log(name); // John Doe
//     console.log(address); // New York
// }

const person2 = {
  name: 'John Doe',
  address: {
    city: 'New York',
    state: 'NY',
  },
};

const getData = ({ name, address: { city: address } }) => {
  console.log(name);
  console.log(address)
}
// getData(person2);

// Hint: Destructuring



//9. Write a function that takes a string as input and returns the string in all uppercase letters.

// Youe ES6 code here
const stringToUpperCase = str => str.toUpperCase();


// console.log(stringToUpperCase("hello")); // "HELLO"



// 10. Write a function that takes two strings as input and concatenates them together.
// Your ES6 code here
const concatenateStrings = (str1, str2) => str1 + str2;
// const concatenateStrings = (str1,str2) => str1.concat(str2);


// console.log(concatenateStrings("hello", "world")); // "helloworld"


// 11. Write a function that takes an array and returns the last element in the array.
// Your ES6 code here

const lastElement = arr => arr[arr.length - 1];

// console.log(lastElement([1, 2, 3, 4, 5])); // 5


// 12.Write a function that takes an array and returns the first element of the array.
// Your ES6 code here
const firstElement = arr => arr[0];

// console.log(firstElement([1, 2, 3, 4, 5])); // 1


// 13. Write a function that takes an array and a number and returns the sum of first element and the number.
// Your ES6 code here

const sumFirstElement = (arr, num) => arr[0] + num;

// console.log(sumFirstElement([1, 2, 3], 5)); // 6


// 14.Write a function that takes an array and returns the sum of first and last element.
// Your ES6 code here
const sumFirstAndLast = arr => arr[0] + arr[arr.length - 1];


// console.log(sumFirstAndLast([1, 2, 3, 4, 8])); // 9


// 15. Write a function that takes an object representing a person's information (name, age, occupation) and returns a template literal that includes the person's name and age in a sentence.
// Your ES6 code here

const personInfo = ({ name, age }) => `${name} is ${age} years old.`


const person3 = { name: 'John', age: 25, occupation: 'Software Engineer' }
const person4 = { name: 'Jane', age: 45, occupation: 'Data Analyst' }
console.log(personInfo(person3)) // Expected output: "John is 25 years old."
console.log(personInfo(person4)) // Expected output: "Jane is 45 years old."
