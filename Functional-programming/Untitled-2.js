// 🔟Write an ES6 function that takes an array of strings and returns an object with the count of each string.
const fruits = ['apple', 'banana', 'banana', 'cherry', 'apple', 'apple', 'banana'];
// Your code here
const countStrings = strings => strings.reduce((acc, curr) => {
  acc[curr] ? acc[curr] += 1 : acc[curr] = 1
  return acc;
}, {});

const countStrings1 = strings => strings.reduce((acc, curr) => {
 if(acc[curr]) {
  acc[curr] +=1;
 }else {
  acc[curr]=1
 }
 return acc;
}, {});

console.log(countStrings1(fruits));
console.log(countStrings(fruits));