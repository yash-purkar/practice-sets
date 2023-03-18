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