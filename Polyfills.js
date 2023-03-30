Array.prototype.myMap = function (cb) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {

    newArr.push(cb(this[i], i, this))
  }
  return newArr;
}
const numbers = [1, 2, 3, 4, 5]
const a = numbers.myMap((elem, i) => i)
console.log(a)


Array.prototype.myFilter = function (cb) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) newArr.push(this[i])
  }
  return newArr;
}
const numbers1 = [1, 2, 3, 4, 5]
const b = numbers1.myFilter((number) => number % 2 === 0);
console.log(b)
