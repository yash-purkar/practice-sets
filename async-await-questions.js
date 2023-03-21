// If we use .then() or await only when it'll go in microtask queue


// async makes a function return a Promise
// await makes a function wait for a Promise

// If we return string in normal function it'll return string
//  but if we return string in async function it'll return promise and result will be that string.

// While a Promise object is "pending" (working), the result is undefined.
// When a Promise object is "fulfilled", the result is a value.
// When a Promise object is "rejected", the result is an error object.


// 1. 
console.log('a')
async function a() {
  return 'b';
}
async function dd() {
  const e = await a();
  console.log('e', e)
}
dd();
console.log('c');
/*
  first console.log("a") - will push in call stack and execute
  - dd() is calling so, it will push in call stack and it'll go inside dd() funcion and it'll see 'const e= await a() ' and it'll call function a() and a() will take some time so that function will wait there and dd will popped out then , the 'console.log('c')' will push in call stack and execute,
  
  now the a() funcion sent the response and we stored that in variable 'e' so the dd() function will start executing again from line no. 8 
  so at the end 'console.log('e', e)' will print 
  so output will be

  OUTPUT 
 a
 c
 e b

 //we write await there so the it will wait till a() function returns result so after returning the result the result will store in variable 'e'
 THE RESULT WILL STORE NOT PROMISE
 IF WE DO console.log(a()) IT WILL PRINT PROMISE , BUT WE USE AWAIT SO THE RESULT OF PROMISE WILL STORE i.e 'b'.
 */
// -------

// 2.
console.log('a')
async function a() {
  return 'b';
}
async function d() {
  const e = await a();
  console.log('e', e)
  return 'g'
}
console.log(d());
console.log('c');

/*
first "a" will print in console
then counter will go at line 'console.log(d())'
so at this line counter will go inside function d() and it will see there ' const e = await a()' and it will call the a(); and wait in function d() until a() returns result and the outer code will still runnig, d() function is async, so no surprises it will return promise, so that d() is not executed yet bcz d() is waiting for the response from a() so console.log(d()) will print "promise pending" and for now result will be undefined then a() returns result, so again it'll go inside d() result will store in 'e' variable and that console.log('e', e) line will be executed -> "e" b
and after that we are returning 'g' so the promise result was undefined so that will replace with 'g' but it'll not print in console bcz the console.log(d()) line alredy executed.
and output  will be
OUTPUT
a
promise <pending>
c
e b

*/




// ---------

// 3. 
console.log('a')
async function a() {
  return 'b';
}
async function d() {
  const e = a();
  console.log('e', e)
  return 'g'
}
d()
console.log('c');

/*
first console.log("a");
then d() function is calling so controll will go inside d() 
then 'e=a()' so a() is being called and there din't use await so the promise will store in variable 'e' then 
console.log("e",e) so => "e" promise<fullfilled>

then console.log("c");

OUTPUT 
a
'e' promise<>
c

we didn't use await so directly promise is being stored in 'e' i.e Promise { 'b' }, if we use await the result will store directly i.e "b"
we didn't use await so code will not stop anywhere it'll execute line by line.
*/

// ********************************

// 4.
const first = () =>
  new Promise((resolve, reject) => {
    console.log('a');
    reject('b');
    console.log('c');
  })
console.log('d');
first().then((data) => {
  console.log(data);
}).catch(err => console.log(err));
console.log('e');
// OUTPUT =>  //d a c e b
/*
1st console.log("d") will be pushed inside callstack and it'll execute and then popped out from stack.
now first is calling so at that time the first will push inside callstack and also .then's callback function and .catch's callback function will go into the webAPI's and wait for get activated.
in the callstack there is a first() function
above that console.log("a") will push and it'll execute and then popped out
then there is a reject("b") so it'll trigger the callback function of catch() and it'll come inside micro task queue event loop will check is whether the callstack is empty or not but now callstack is not empty 
the console.log("c") is being executed so after executing this line the first() will pop out from the callstack and there is a console.log("e") also so this line will also push inside callstack and execute and after executing that the callstack will be empty and the callback function of catch will be pushed inside callstack and it'll execute line by line so console.log(err) will be printed i.e "b"

   //d a c e b
*/


// -------------------------------------------------
// 5.
const second = () => setTimeout(() => {
  console.log('f')
}, 2000)

const first1 = () =>
  new Promise((resolve, reject) => {
    second()
    console.log('a');
    reject('b');
    console.log('c'); //d a c e b f
  })

console.log('d');

first1().then((data) => {
  console.log(data);
}).catch((err) => console.log(err));
console.log('e');
// OUTPUT => d a c e b f
/*
1st console.log("d") will push inside callstack and after executing it'll pop out from the stack.
then there is a first1() function is calling so it'll push inside callstack and at that time the callback function of "then" and callback function of "catch" will go into the web API and they will wait to be executed.
now it'll go inside first1() funcion
there is a another function call so second() will push into the callstack above first() so js will see there is setTimeout so it'll send the callback function of setTimeout to the webAPI and it'll also attach the timer of 2000 ms, and second will be popped out from the stack.
then console.log("a") will be pushed and execute and after executing it'll popped out.
then there is a reject("b") so it'll trigger the callback function of catch and that callback function will be pushed inside microtask queue.
// the 2000ms timer is still running
event loop will check is callstack empty but it is not because GEC is not popped out,
the console.log("c") will push inside callstack and it'll execute and after that the first1() function will pop out from the callstack.
then the console.log("e") will pushed inside callstack and execute and it'll pop out.
now the GEC program execution is done so callstack will be empty now.
so event loop will check is the callstack empty , now it is empty so it'll push that callback funcion of catch in side callstack and callstack will execute it line by line.
so console.log(err) i.e "b" will be printed and after executing the callback function will be popped out from the callstack and callstack will empty.
now the 2000ms is expired and the callback function of setTimeout will come inside callback queue and event loop will check is callstack empty now it is empty so it'll push that callback function inside callstack and callstack will execute it line by line i.e "f" so after executing it'll also popped out.
*/



// -------------------------------------------------
// const second = () => setTimeout(()=>{
//   console.log('f')
// },2000)

// const first = () =>
// new Promise((resolve,reject)=> {
//   second()
//   console.log('a');
// setTimeout(()=> {
//   resolve('b');
//   console.log('c');
// },4000)
// })
// console.log('d');
// first().then((data) => {
// console.log(data);
// }).catch(err=>console.log(err);
// console.log('e')
// const second = () => setTimeout(()=>{
//   console.log('f')
// },2000)

// const first = () =>
// new Promise((resolve,reject)=> {
//   second()
//   console.log('a');
// setTimeout(()=> {

//   console.log('c');
// },1000);
//   resolve('b');
// })
// console.log('d');
// first().then((data) => {
// console.log(data);
// }).catch(err=>console.log(err);
// console.log('e')
// -------------------------------------------------
// const second = () => setTimeout(()=>{
//   console.log('f')
// },2000)

// const first = () =>
// new Promise((resolve,reject)=> {
//   second();
//   resolve('a');
//   reject('b');
//   console.log('c');
// })
// console.log('d');
// first().then((data) => {
// console.log(data);
// }).catch(err=>console.log(err));
// console.log('e')