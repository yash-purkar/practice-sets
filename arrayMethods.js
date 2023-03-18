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





// 2️⃣3. Write an ES6 function that calculates and returns the total value of all items in an array of objects.
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


// returning an object.