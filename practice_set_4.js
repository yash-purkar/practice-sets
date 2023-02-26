// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// Write an ES6 function that accepts an array of integers and returns the maximum element in the array. Avoid using in-built methods.

// Your ES6 code here

// const getMaxElement = arr => {
//     let max=0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] >=max){
//             max = arr[i]
//         }
//     }
//     return max;
// }

// let array = [4,78,8,3,6,0,12,34];
// console.log(getMaxElement(array)) // 78



// Write an ES6 function that takes an array of numbers and returns the average of all the numbers. Avoid using in-built methods.

// Your ES6 code here

// const calculateAverage = arr => {
//     let avg=0;
//     for(let i=0;i<arr.length;i++){
//         avg = avg + arr[i];
//     }
//     // console.log(avg);
//     return avg/arr.length;
// }

// console.log((1+2+3+4+5)/5)

// console.log(calculateAverage([1, 2, 3, 4, 5])); // 3




// 3. write an ES6 function that takes an array of numbers and converts even numbers to odd numbers by adding 1 to that number.

// Your ES6 code here

// const convertEvenToOdd = arr => {
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2===0){
//             arr[i] = arr[i]+1
//         }
//     }
//     return arr;
// }

// var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(convertEvenToOdd(numArr));
// [1, 3, 3, 5, 5, 7, 7, 9, 9]




// write an ES6 function that takes an array of words and returns an array with all its elements whose length is greater than 5.

// Your ES6 code here

// const filterWords = arr =>{
//     const newArr = [];
//     for(let i=0;i<arr.length;i++){
//         for(let j=0; j<arr[i].length;j++){
//             if(j>=5){
//                 newArr.push(arr[i]);
//                 break; //It breaks the j's loop
//             }
//         }
//     }
//     return newArr;
// }

// var words = ["eat", "sleep", "code", "repeat", "neog", "community"];
// console.log(filterWords(words)) // ["repeat", "community"]






// Write an ES6 function that takes an array of strings and returns a new array with each string capitalized.


// Your ES6 code here

// const capitalizeWords = arr => {
//     const newArray = [];
//     for(let i=0;i<arr.length;i++){
//         newArray[i] = arr[i].toUpperCase();
//         //   newArray.push(arr[i].toUpperCase());
//     }
//     return newArray;
// }

// console.log(capitalizeWords(["eat", "sleep", "code", "repeat"]))
// ["EAT", "SLEEP", "CODE", "REPEAT"]



// Write an ES6 function that takes an array of objects and a property name and returns a new array with only the values of that property. Avoid using in-built methods.


// Your ES6 code here

// const getValues = (arrOfAnObj,propertyName) =>{
//     const newArr = [];
//     for(let i=0;i<arrOfAnObj.length;i++){
//         newArr[i] = arrOfAnObj[i][propertyName];
//     }
//     return newArr;
// }

// console.log(
//   getValues(
//     [
//       { name: "John", age: 21 },
//       { name: "Mary", age: 22 },
//       { name: "Peter", age: 23 },
//     ],
//     "name"
//   )
// ); // ["John", "Mary", "Peter"]




// Write an ES6 function that takes the users' details and returns the data with team ID. Avoid using in-built methods.


// Your ES6 code here


// const podAndTeamAllocation = ({firstName,lastName}) =>({firstName,lastName,teamId : 667543})

// const userData = { firstName : "John", lastName: "Dee" }
// console.log(podAndTeamAllocation(userData))
// {firstName: 'John', lastName: 'Dee', teamId: 667543}




// Write an ES6 function which checks if a student already has a team. If team is not given then add them to team “A” and return the object else do nothing and return the same object. Avoid using in-built methods.

// Your ES6 code here

// const checkForTeam = ({firstName,lastName,team="A"}) =>({firstName,lastName,team});


// console.log(checkForTeam({firstName: 'Penn', lastName: 'Ma'}))
// // {firstName: 'Penn', lastName: 'Ma', team: A}

// console.log(checkForTeam({firstName: 'John', lastName: 'Dee', team: "B"}))
// // {firstName: 'John', lastName: 'Dee', team: B}

// console.log(checkForTeam({firstName: 'Priya', lastName: 'Raj'}))
// {firstName: 'Priya', lastName: 'Raj', team: A}




// 9. Destructure the following code to get the desired outputs. Avoid using in-built methods.

const book = {
  title: 'JavaScript: The Definitive Guide',
  authors: [{ name: 'David Flanagan', age: 49 }, { name: 'Yukihiro Matsumoto', age: 57 }],
  publisher: { name: 'O\'Reilly Media', location: 'CA' }
};

// Your ES6 code here

const { title, authors, publisher } = book;

const { name: publisherName } = publisher;

const [auth1, auth2] = authors;

const { name: author1 } = auth1;
const { name: author2 } = auth2;


// console.log(title); // JavaScript: The Definitive Guide
// console.log(author1); // David Flanagan 
// console.log(author2); // Yukihiro Matsumoto
// console.log(publisherName); // O'Reilly Media



// Write an ES6 function that takes an array of objects and returns the sum of all ages.

// Your ES6 code here

const sumOfAges = arr => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let { age } = arr[i];
    sum = sum + age
  }
  return sum;
}


var array = [
  {
    name: "Jay",
    age: 60
  },
  {
    name: "Gloria",
    age: 36
  },
  {
    name: "Manny",
    age: 16
  },
  {
    name: "Joe",
    age: 9
  }
];

console.log(sumOfAges(array)); // 121


