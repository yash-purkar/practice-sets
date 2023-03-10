// Instructions: 
// 1. Make use of .reduce() method in this set. 
// 2. You can make use of basic methods such as .length, toLowerCase(), toUpperCase() if needed. 
// 3. Do NOT use for-loops.

// 1️⃣Given an array, write an ES6 function that returns the total length of all the strings in an array.

const strings = ["apple", "banana", "cherry", "date", "blueberry"];
// Your code here
const totalLength = strings => strings.reduce((acc, curr) => acc += curr.length, 0);

console.log(totalLength(strings));
// Output: 30


// 2️⃣Write an ES6 function sumSquares that takes an array of numbers and returns the sum of the squares of all the numbers in the array


const numbers = [1, 2, 3, 4, 5];
// Your code here
const sumSquares = numbers => numbers.reduce((acc, curr) => acc + curr * curr, 0);

console.log(sumSquares(numbers));
// Output: 55


// 3️⃣ Write an ES6 function that calculates and returns the total value of all items in an array of objects.
const items = [
  { name: "Item 1", price: 10 },
  { name: "Item 2", price: 20 },
  { name: "Item 3", price: 30 }
];
// Your code here
const totalValue = items => items.reduce((acc, { price }) => acc + price, 0)


console.log(totalValue(items));
// Output: 60


// 4️⃣Write an ES6 function that takes an array of strings as input and concatenates them into a single string.
// Your code here
const concatStrings = strings => strings.reduce((acc, curr) => acc + curr, "");


console.log(concatStrings(['this', 'is', 'fun'])); // Output: 'thisisfun'


// 5️⃣Write an ES6 function to multiply and return all the elements of a given array.
const numbers1 = [1, 2, 3, 4, 5];
// Your code here
const product = numbers => numbers.reduce((acc, curr) => acc * curr);


console.log(product(numbers1));
// Output: 120


// 6️⃣Write an ES6 function that takes an array of strings and returns the longest string.
const strings2 = ["neogcamp", "Haule Haule", "code", "Batman", "Awesome"];
// Your code here
const longestString = strings => strings.reduce((acc, curr) => acc.length < curr.length ? curr : acc, "");


console.log(longestString(strings2));
// Output: 'Haule Haule'


// 7️⃣Write an ES6 function that takes an array of objects with name and age property, and returns the name of the oldest person.
const people = [
  { name: 'Jeena', age: 25 },
  { name: 'Priya', age: 30 },
  { name: 'Naina', age: 45 }
]
// Your code here
const oldestPersonName = people => people.reduce((acc, curr) => acc.age < curr.age ? curr : acc, people[0]).name;


console.log(oldestPersonName(people));
// Output: 'Naina'


// 8️⃣Write an ES6 function that takes an array of objects representing people with properties name and age, and returns an object with the average age of all the people.
const people1 = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 40 }
];
// Your code here

const getAverageAge = people => people.reduce((acc, { age }) => acc + age, 0) / people.length;


console.log(getAverageAge(people1));
// Output: { averageAge: 32.5 }


// 9️⃣Write an ES6 function that takes an array of objects representing products with properties name, price, and quantity, and returns an object with the most expensive product.
const products = [
  { name: "Bread", price: 10, quantity: 2 },
  { name: "Clips", price: 20, quantity: 5 },
  { name: "Knife", price: 30, quantity: 1 },
  { name: "Slipper", price: 40, quantity: 3 }
];
// Your code here
const findMostExpensiveProduct = products => products.reduce((acc, curr) => acc.price < curr.price ? curr : acc, products[0]);


console.log(findMostExpensiveProduct(products));
// { name: "Slipper", price: 40, quantity: 3 }


// 🔟Write an ES6 function that takes an array of strings and returns an object with the count of each string.
const fruits = ['apple', 'banana', 'banana', 'cherry', 'apple', 'apple', 'banana'];
// Your code here
const countStrings = strings => strings.reduce((acc, curr) => {
  if (acc[curr]) {
    acc[curr] += 1;
  }
  else {
    acc[curr] = 1;
  }
  return acc;
}, {});




console.log(countStrings(fruits));
// Output: { 'apple': 3, 'banana': 3, 'cherry': 1 }