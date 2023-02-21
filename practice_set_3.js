// https://akanksha-neogcamp.notion.site/ES6-Practice-Question-Set-3-39c1e66673ae4422bfc065baff16b96a
// practice set url

// 1️⃣ Create a function that takes an array of strings as an argument and returns a string that includes the number of items in the array and the first and last items.

const formatArray = (arr) => `The array has ${arr.length} items, and the first item is "${arr[0]}", and the last item is "${arr[arr.length - 1]}".`

const items = ['apple', 'banana', 'orange']
const message = formatArray(items)
// console.log(message)
// The array has 3 items, and the first item is "apple", and the last item is "orange".


// 2️⃣ Create a function that takes a product object as an argument and returns a string that includes the product name, price, and a message based on whether it is in stock or not.


const formatProduct = ({ name, price, inStock }) => `${name} costs INR ${price} and${inStock ? `is in stock` : ` is not in stock`}`


const product = {
  name: 'Socks',
  price: 249,
  inStock: true,
}

const product2 = {
  name: 'Shoes',
  price: 1200,
  inStock: false,
}

const message1 = formatProduct(product)
const message2 = formatProduct(product2)
// console.log(message1)
// console.log(message2)
// Socks costs INR 249 and is in stock.
// Shoes costs INR 1200 and is not in stock


// 3️⃣ Write a function findPerson that takes an array of person objects and a name as parameters and returns the object with the matching name, or null if not found.

const findPerson = (objArr, name) => {
  for (let i = 0; i < objArr.length; i++) {
    if (objArr[i].name === name) {
      return objArr[i];
    }
  }
  return null;
}

console.log(findPerson([{ name: 'Amay', age: 25 }, { name: 'Akhil', age: 25 },], "Akhil"))

// console.log(findPerson([{ name: 'Amay', age: 25 }, { name: 'Akhil', age: 25 }], "Akhil"))
// [ null, { name: 'Akhil', age: 25 } ]


// 4️⃣ Write a function that uses destructuring to extract the first two elements from an array, and returns them in an object with keys 'first' and 'second'.

const pickFirstAndSecond = ([first, second, ...rest]) => ({ first, second })

// console.log(pickFirstAndSecond(["orange", "banana", "apple"]))
// {first: 'orange', second: 'banana'}

// console.log(pickFirstAndSecond(["red", "blue", "green"]))
// {first: 'red', second: 'blue'}



// 5️⃣ Convert the following code to ES6+ syntax with minimum number of characters.

/*function startsWithA(str) {
  if(str.charAt(0) === 'A') {
    return true
  } else {
    return false
  }
}*/

const startsWithA = str => str.charAt(0) === 'A'

// console.log(startsWithA("Akshita"))
// true
// console.log(startsWithA("Jeena"))
// false


// 6️⃣ Write an ES6 function to return only the first character of the given array.

const printFirstCharacter = (arr) => arr[0]
// console.log(printFirstCharacter([1, 2, 3, 5, 8]))
// 1


// 7️⃣ Write a function to return the last 5 characters as an array from the given array.


const printLastFive = arr => {
  const ar = []
  for (let i = arr.length - 1; i >= arr.length - 5; i--) {
    //6                 7-5 = 2  
    ar.push(arr[i]);
    // console.log(arr[i])
  }
  return ar.reverse();
}

// const printFive = arr => arr.map((elem, i) => i > 1 ? elem : null)

// console.log(printLastFive([0, 1, 1, 2, 3, 5, 8]));
// console.log(printFive([0, 1, 1, 2, 3, 5, 8]));
// [1, 2, 3, 5, 8]


// 8️⃣ Write an ES6 function to return the second element of the given array by multiplying 20 to it.

const printSecondCharacter = arr => arr[1] * 20;

// console.log(printSecondCharacter([1, 2, 3, 5, 8]))
// 40


// 9️⃣ Write an ES6 function to return the second element of the given array by adding “Hello” before it.

const sayHello = arr => `Hello ${arr[1]}`;

// console.log(sayHello(["Akshay", "Sweta", "Prerana", "Vinay"]))
// Hello Sweta

// console.log(sayHello(["Kanika", "Rakesh", "Prerana", "Puja"]))
// Hello Rakesh

// 🔟 Write an ES6 function to return sum of all numbers at even indices of the given array.


const sumOfEvenIndices = arr => {
  let sum = 0;
  arr.map((elem) => {
    elem % 2 === 0 ? sum += elem : sum;
  })
  return sum;
}

// console.log(sumOfEvenIndices([2, 4, 3, 7, 1, 5])) // 6
// console.log(sumOfEvenIndices([12, 14, 3, 27, 15, 25])) // 26


// 1️⃣1️⃣ Write an ES6 function to return the sum of only first 2 elements of the array .

const sumFirstTwoElements = arr => arr[0] + arr[1];

// console.log(sumFirstTwoElements([10, 4, 3, 7, 1, 5])) // 14
// console.log(sumFirstTwoElements([12, 14, 3, 27, 15])) // 26


// 1️⃣2️⃣ Write an ES6 function to return the first element which is a multiple of 5 in the given array.

const printMultipleOfFive = arr => {
  let num;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 5 === 0) {
      num = arr[i];
      break;
    }
  }
  return num;
}


// console.log(printMultipleOfFive([7, 4, 10, 7, 5, 3])) // 10
// console.log(printMultipleOfFive([7, 5, 10, 7, 15, 3])) // 5


// 1️⃣3️⃣ Create a function which takes in the given object and returns another object only with the properties postalCode and city in it.

const getAddress = ({ postalCode, city }) => ({ postalCode, city });

const userData = {
  name: 'Jane Doy',
  postalCode: '12134',
  city: 'Germany',
}

// console.log(getAddress(userData));
// {postalCode: '12134', city: 'Germany'}


// 1️⃣4️⃣ Create a function which takes in the given object and returns a sentence which indicates name of the person and where the person lives.

const printData = ({ name, country }) => `${name} lives in ${country}`

const userData1 = {
  name: 'Gaurav',
  postalCode: '12134',
  country: 'Japan',
}
// console.log(printData(userData1)); // Gaurav lives in Japan


const userData2 = {
  name: 'Pritam',
  postalCode: '560223',
  country: 'India',
}
// console.log(printData(userData2)); // Pritam lives in India


// 1️⃣5️⃣ Create a function which takes a product object and returns a sentence about the product using ES6 features.

const printProductDetails = ({ name, specification: { size, capacity } }) => `${name} which is of ${size}, has a capacity of ${capacity}.`

const product1 = {
  name: "Apple MacBook Air 2020",
  specification: {
    capacity: "256GB",
    size: "13.3 Inch"
  },
  price: 82900
}
console.log(printProductDetails(product1)); // Apple MacBook Air 2020 which is of 13.3 Inch, has a capacity of 256GB.