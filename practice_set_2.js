// https://akanksha-neogcamp.notion.site/ES6-Practice-Question-Set-2-582ae999532941d2aef350f594751fea
// practice set link

// 1️⃣ Create an object person with two properties, `name` and `age` and then updates the `age` property to a new value. Initial age should be 30.

const person = {
  name: `John`,
  age: 30
}
person.age = 35;
// console.log(person.age);

// 2️⃣ Write a function that takes an object car and returns true if the car is a sport car (i.e has horsepower property greater than or equal to 300);

const car1 = { make: 'Porsche', model: '911', horsepower: 450 };
const car2 = { make: 'Toyota', model: 'Camry', horsepower: 200 };

const isSportsCar = ({ horsepower }) => horsepower >= 300

// console.log(isSportsCar(car1)); // true
// console.log(isSportsCar(car2)); // false


// 3️⃣ Write a function that takes an object person and a number num as an arguments and returns true if the person's age plus num is greater than or equal to 21. Otherwise, it should return false.

const person1 = {
  name: `John`,
  age: 20
}

// const isEligible = ({ age }, num) => age + num >= 21;
// console.log(isEligible(person1, 1)); //true
// console.log(isEligible(person1, 2)); //true


// 4️⃣ Write a function that takes an object blog and returns true if the blog has more than 1000 views (i.e has a views property greater than 1000);

const blog1 = { title: `How to learn JavaScript`, author: `John Doe`, views: 1430 };
const blog2 = { title: `Why should write a blog`, author: `Jane Smith`, views: 500 };

const getViews = ({ views }) => views > 1000;

// console.log(getViews(blog1)); //true
// console.log(getViews(blog2)); //false


// 5️⃣ Swap the values of two variables using array destructing
let a = 1;
let b = 2;
const arr = [a, b];
// console.log(arr);
[b, a] = arr;


// console.log(a) // 2
// console.log(b) // 1


// 6️⃣ Convert this function into ES6 with least amount of characters.
/*function add(a=30, b=0) {
  return a+b;
}*/

const add = (a = 30, b = 0) => a + b;
// console.log(add(2, 3)); //5


// 7️⃣ Write an ES6 function combineObject with least amount of characters with merges two objects into one.
const combineObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const combineObj = combineObjects(obj1, obj2);

// console.log(combineObj); //{ a: 1, b: 2, c: 3, d: 4 }


// 8️⃣ Convert the function getData, into an ES6 function with least amount of characters.
// Hint: Destructuring

const getData = ({ name, address: { city, state } }) => {
  console.log(name); //John Doe
  console.log(city); // New York
  console.log(state); // NY
}

const person2 = {
  name: `John Doe`,
  address: {
    city: `New York`,
    state: `NY`,
  }
};

// getData(person2);

// 9️⃣ Write a function that takes string as input and returns the string in all uppercase letters.

const stringToUpperCase = str => str.toUpperCase();

// console.log(stringToUpperCase(`hello`)); //HELLO

// 🔟 Write a function that takes two strings as input and concatenates them together.

const concatenateString = (str1, str2) => str1 + str2;

// console.log(concatenateString(`hello`, `world`)); //helloworld

// 1️⃣1️⃣ Write a function that takes an array and returns the last element in the array.

const lastElement = arr => arr[arr.length - 1];
// console.log(lastElement([1, 2, 3, 4, 5])); //5


// 1️⃣2️⃣ Write a function that takes an array and returns the first element of the array.

const firstElement = arr => arr[0];
// console.log(firstElement([1, 2, 3, 4, 5]));  //1


// 1️⃣3️⃣ Write a function that takes an array and a number and returns the sum of first element and the number

const sumFirstElement = (arr, num) => arr[0] + num;
// console.log(sumFirstElement([1, 2, 3, 4], 5)) //6


// 1️⃣4️⃣ Write a function that takes an array and returns the sum of first and last element.

const sumFirstAndLast = arr => arr[0] + arr[arr.length - 1];
// console.log(sumFirstAndLast([1, 2, 3, 4, 8])); //9

// 1️⃣5️⃣ Write a function that takes an object representing a person's information (name,age,occupation) and returns a template literal that includes the person's name and age in a sentence.

const personInfo = ({ name, age }) => `${name} is ${age} years old.`;

const person3 = { name: `John`, age: 25, occupation: `Software Developer` };
const person4 = { name: `Jane`, age: 45, occupation: `Data Analyst` };

console.log(personInfo(person3)); //John is 25 years old.
console.log(personInfo(person4)); //Jane is 45 years old.
