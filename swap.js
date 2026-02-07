let a = 5;
let b = 7;

//wring method
// a = b;
// b = a;
console.log(a, b);

const temp =  a;
a = b;
b = temp;
console.log(a, b);

//destructuring
let x = 10;
let y = 20;
console.log(x, y);
[x, y] = [y, x]; //value swap
console.log(x, y);