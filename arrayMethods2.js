const arr = [1, 4, 3, 5, 2];

// 🔸sort()
// console.log(arr.sort()); //[ 1, 2, 3, 4, 5 ]
// It sorts the elements in ascending or descending order

//🔸reverse()
// console.log(arr.reverse()) //[ 2, 5, 3, 4, 1 ]
//It reverse the elements

//🔸pop()
// arr.pop()
// console.log(arr) // [ 1, 4, 3, 5 ]
//It delets the last element of an array
// console.log(arr.pop()) //If we console it it'll show which element is deleted.

// 🔸push()
// arr.push(9);
// console.log(arr) //[ 1, 4, 3, 5, 2, 9 ]
// It adds the element at the end of the array.
// console.log(arr.push(9)) // If we console it it'll return the new length of the array , new length means length after adding new element.

// 🔸shift()
// arr.shift()
// console.log(arr) //[ 4, 3, 5, 2 ]
// It removes the first element from an array.

// 🔸unshift()
// arr.unshift(10)
// console.log(arr) //[ 10, 1, 4, 3, 5, 2 ]
//It adds the new element at the first of the array.

// 🔸concat()
const arr2 = [55, 66, 77, 88, 99]
const arr3 = arr.concat(arr2)
// console.log(arr3) //[1,  4,  3,  5,  2, 55, 66, 77, 88, 99]
//It merges the two arrays.
//Here we did ar.concat so in arr3 the arr value will come before and then arr2 value will come, if we use arr2 before so arr2 values will come first.
//We can also concat more than one array.
const arr4 = arr.concat(arr2, arr3);
// console.log(arr4)
//[1,  4,  3,  5,  2, 55, 66, 77, 88, 99,  1,  4,  3,  5, 2, 55, 66, 77, 88, 99]


// 🔸join()
const strArr = ["name1", "name2", "name3"]
const joinedArr = strArr.join("/");
// console.log(joinedArr) //    name1/name2/name3
// console.log(typeof joinedArr) //string
//It makes one string out of the array elements
//Here we joind element with the "/"


// 🔸slice()
//It seperates the values of an array and It makes the new array out of them.
// syntax=> slice(start,end)
const a = ["John", "Doe", "Tom", "Jerry", "Jack"];
const b = a.slice(1, 3) //uptp n-1
console.log(b) //[ 'Doe', 'Tom' ] // b will be a new array.

//If we give only one value in slice it'll start from their and will go up to the end of an array.
const c = a.slice(2);
console.log(c)//[ 'Tom', 'Jerry', 'Jack' ]

//Their is a also -values
// -1 is the last element of an array and it decreases up to 0th index
//In our e.g -1 is the Jack and -5 is the John 
const d = a.slice(-2)
console.log(d) //[ 'Jerry', 'Jack' ]
// from -2 to upto end.

const e = a.slice(-3, -1) //upto n-1
console.log(e)// ['Tom','Jerry']