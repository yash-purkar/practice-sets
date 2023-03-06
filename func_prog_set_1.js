// Instructions: 
// 1. Make use of .map() and .filter() methods. 
// 2. You can make use of basic methods such as .length, toLowerCase(), toUpperCase() if needed. 
// 3. Do NOT use for-loops.



// 1️⃣ Write an ES6 function that takes an array of numbers and returns an array with each number incremented by 3 using the map method.

// Your ES6 function here

/*const incrementBy3 = num => num + 3;
const incrementNumbers = numbers => numbers.map(incrementBy3);*/

const incrementNumbers = numbers => numbers.map(num => num + 3);

//Both ways are true, but if you want to use that callback function multiple times then define it outside, otherwise use directly in map.
const numbers = [1, 2, 3, 4, 5];
// console.log(incrementNumbers(numbers));
// Output: [4, 5, 6, 7, 8]


// 2️⃣ Write an ES6 function that takes an array of strings and returns an array with all the strings capitalised using the map method.
// Your ES6 function here
const capitalizeArray = strings => strings.map(string => string.toUpperCase());

const myArray = ['apple', 'banana', 'cherry'];
// console.log(capitalizeArray(myArray));
// Output: ["APPLE", "BANANA", "CHERRY"]


// 3️⃣ Write an ES6 function that takes an array of objects representing people and returns an array of their ages using the map method.

// Your ES6 function here
const getAges = peoples => peoples.map(people => people.age);

const people = [
  { name: 'Ankit', age: 25 },
  { name: 'Vinit', age: 24 },
  { name: 'Shashi', age: 29 }
];
const ages = getAges(people);
// console.log(ages); // Output: [25, 24, 29]


// 4️⃣ Write an ES6 function that takes an array of objects representing products and returns an array with the product names in all lower case letters using the map method.

// Your ES6 function here

const getProductNamesInLowerCase = products => products.map(product => product.name.toLowerCase());

const products = [
  { name: 'Lip Balm', stock: 100 },
  { name: 'PERFUME', stock: 400 },
  { name: 'Socks', stock: 200 }
];
// console.log(getProductNamesInLowerCase(products));
// Output: ["lip balm", "perfume", "socks"]



// 5️⃣ Write an ES6 function that takes an array of objects representing cities and returns an array of their names using the map method.

// Your ES6 function here
const getCityNames = cities => cities.map(city => city.name);

const cities = [
  { name: 'New York', population: 8538000 },
  { name: 'Los Angeles', population: 3976000 },
  { name: 'Bangalore', population: 13608000 }
];

// console.log(getCityNames(cities));
// Output: ["New York", "Los Angeles", "Bangalore"]


// 6️⃣ Write an ES6 function that takes an array of strings and returns an array with only the strings that have a length greater than 5.

// Your ES6 function here
/*const strGreaterThan5 = str => str.length > 5;
const filterLongStrings = fruits => fruits.filter(strGreaterThan5);*/

const filterLongStrings = fruits => fruits.filter(fruit => fruit.length > 5);

const fruits = ['apple', 'banana', 'cherry', 'watermelon', 'pineapple'];
// console.log(filterLongStrings(fruits));
// Output: ["banana", "cherry", "watermelon", "pineapple"]