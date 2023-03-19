// reduce

//1️⃣ Write an ES6 function sumSquares that takes an array of numbers and returns the sum of the even numbers in the array.

// 1.returning number
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const sumOfEven = numbers => numbers.reduce((acc, curr) => curr % 2 === 0 ? acc + curr : acc, 0);
console.log(sumOfEven(numbers)); //20

// 1. acc=0 : we gave initial value of accumulator is 0, bcz if we do not give initial value to accumulator then it takes 0th index value, in this case i.e 1 and the curr will be 1th index.
// so It will not give correct output bcz, output is 20, and if we don't give initial it'll add that 1 in this. we know the the one is not even but at 1st time curr will 2 if we give initial value, so it'll add 1 in it and output will be 21.
// so we gave initial value 0;

/*
1st iteration
acc=0
curr=1
1%2===0 False 
return acc i.e 0

2nd iteration
//return value from previous iteration - 0
acc=0
curr=2
2%2===0 True
return acc+curr => 0+2 = 2

3rd iteration
//return value from previous iteration - 2
acc=2
curr=3
3%2===0 False
return acc i.e 2

4th iteration
//return value from previous iteration - 2
acc=2
curr=4
4%2===0 True
return acc+curr => 2+4 = 6

5th iteration
//return value from previous iteration - 6
acc=6
curr=5
5%2===0 False
return acc i.e 6

6th iteration 
//return value from previous iteration - 6
acc=6
curr=6
6%2===0 True
return acc+curr => 6+6 = 12

7th iteration
//return value from previous iteration - 12
acc=12
curr=7
7%2===0 False
return acc i.e 12

8th iteration
//return value from previous iteration - 12
acc=12
curr=8
8%2===0 True
return acc+curr => 12+8 = 20

now elements of the array is ended
the last return the accumulator value (i.e 20) will be return value of function,
it will return where function was called.
*/





// 2️⃣ Write an ES6 function that calculates and returns the total value of all items in an array of objects.
//returning number
const items = [
  { name: "Item 1", price: 10 },
  { name: "Item 2", price: 20 },
  { name: "Item 3", price: 30 }
];

const getTotal = items => items.reduce((acc, curr) => acc + curr.price, 0);
console.log(getTotal(items)); //60

// We gave initial value to acc bcz we want to calculate total and we'll add the price in acc, but if we don't give the initial value =0 then the initial value of accumulator will be the first element of an array but that is an object so we can't add number in object so that's why we gave initial value.

/*
1st iteration
acc=0
curr.price = 10
return acc+curr.price= 0+10 = 10

2nd iteration
//return value from previous iteration - 10
acc=10
curr.price = 20
return acc+curr.price = 10 + 20 =30

3rd iteraton
//return value from previous iteration - 30
acc=30
curr.price = 30
return acc + curr.price = 30+30 = 60

now elements of the array is ended
the last return the accumulator value (i.e 60) will be return value of function,
it will return where function was called.
*/


// returning object.
// 3️⃣Write an ES6 function that takes an array of objects with name and age property, and returns the oldest person.

const people = [
  { name: 'Jeena', age: 25 },
  { name: 'Priya', age: 30 },
  { name: 'Naina', age: 45 },
  { name: 'Priyanka', age: 35 }
]
// Your code here
const oldestPersonName = people => people.reduce((acc, curr) => acc.age < curr.age ? curr : acc)

console.log(oldestPersonName(people));
// Output: { name: 'Naina', age: 45 }

//Here we didn't give the initial value to acc,so it'll take the first element of the array which will be object it is ok, because we have to compare the age of the peoples for checking the oldest person amongst them.
/*
1st iteration
acc = { name: 'Jeena', age: 25 }
curr = { name: 'Priya', age: 30 }
acc.age < curr.age => 25 < 30 True
return curr => { name: 'Priya', age: 30 }


2nd iteration
return value from the last iteration which will be assigned to acc in next iteration
{ name: 'Priya', age: 30 }
acc = { name: 'Priya', age: 30 }
curr = { name: 'Naina', age: 45 }
acc.age < curr.age => 30 < 45 true
return curr => { name: 'Naina', age: 45 }

3rd iteration
return value from the last iteration which will be assigned to acc in next iteration
{ name: 'Naina', age: 45 }
acc= { name: 'Naina', age: 45 }
curr = { name: 'Priyanka', age: 35 }
acc.age < curr.age => 45<35 False
return acc => { name: 'Naina', age: 45 }

now elements of the array is ended
the last return the accumulator value (i.e { name: 'Naina', age: 45 }) will be return value of function,
it will return where function was called.
*/


// returning object
// 4️⃣ Write an ES6 function that takes an array of strings and returns an object with the count of each string.

const fruits = ['apple', 'banana', 'banana', 'cherry', 'apple', 'apple', 'banana'];
const countStrings = strings => strings.reduce((acc, curr) => curr in acc ? { ...acc, [curr]: acc[curr] += 1 } : { ...acc, [curr]: 1 }, {})

console.log(countStrings(fruits));
// Output: { 'apple': 3, 'banana': 3, 'cherry': 1 }

// Here we initialized empty object to the accumulator because, we wanna return object

/*
1st iteration
acc={}
curr="apple"
curr in acc (is apple property is present in the acc object) FALSE
{apple:1}
nothing was inside acc object so nothing spreaded only apple property added and value will be 1
return {apple:1}

2nd iteration
return value from the last iteration  - {apple:1}
acc={apple:1}
curr="banana"
banana in acc object => False
return {...acc,[curr]:1} //whatever values are in acc spread that and add new key
it'll look like
return {apple:1,banana:1}

3rd iteration
return value from the last iteration - {apple:1,banana:1}
acc = {apple:1,banana:1}
curr="banana"
banana in acc - TRUE
return {...acc,[curr]:acc[curr+=1]}
it'll look like
return {apple:1,banana:1,banana:1+1}
{apple:1,banana:2}

and so on.....
*/


// returning array
//5️⃣ Write an ES6 function that takes an array of objects containing car information (make, model, year) and returns an array with only the car model that were made after the year 2012.
const cars = [
  { make: "Toyota", model: "Corolla", year: 2010 },
  { make: "Honda", model: "Civic", year: 2012 },
  { make: "Toyota", model: "Camry", year: 2015 },
  { make: "Ford", model: "Mustang", year: 2018 },
];

// Your code here
const getCarModel = cars => cars.reduce((acc, curr) => curr.year > 2012 ? [...acc, curr.model] : acc, []);

const carModels = getCarModel(cars);
console.log(carModels);
// Output: ["Camry", "Mustang"]

//we take empty array as a initial value of accumulator, because at the end we want to return an array.

//acc is an empty array so the current value will be the 1st element of an array.

/*
1st iteration
acc = []
curr = { make: "Toyota", model: "Corolla", year: 2010 }
curr.year > 2012 => 2010 >2012 False
return acc
[]

2nd iteration
return value from previous iteration
[]
acc=[]
curr =  { make: "Honda", model: "Civic", year: 2012 } 
curr.year > 2012 => 2012 > 2012 False (bcz it is equal not greater)
return acc
[]

3rd iteration
return value from the previous iteration
[]
acc=[]
curr = { make: "Toyota", model: "Camry", year: 2015 }
curr.year > 2012 => 2015 > 2012 TRUE
return [...acc,curr.model]
=> [...acc,Camry] // whatever is in acc spread that elements and add new element in an array.
but this time nothing in an array so nothing will be spreaded just it'll add "Camry"
=> ["Camry"]


4th iteration
return value from the last iteration
["Camry"]
acc=["Camry"]
curr = { make: "Ford", model: "Mustang", year: 2018 }
curr.year > 2012 => 2018 > 2012 TRUE
return [...acc,curr.model] // spread the elements of acc and add new in it
["Camry","Mustang"]

now elements of the array is ended
the last return the accumulator value (i.e ["Camry","Mustang"]) will be return value of function,
it will return where function was called.

*/
