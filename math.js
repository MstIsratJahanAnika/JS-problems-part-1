const math = {
    min: function minmin(num1, num2, num3){
        return num2;
    }
}
console.log(math.min);
//this type of function is built-in in JS, no need to work like this 

// const min = Math.min;


//find min 
const min = Math.min(23, 45, 6, 23, 1, 2, 4, -990);
console.log(min);

//find max
const mx = Math.max(23, 45, 6, 23, 1, 2, 4, -990);
console.log(mx);

console.log(Math.PI);
console.log(Math.abs(10-55)); //modulus value *
console.log(Math.round(9.89)); // *
console.log(Math.ceil(3.45));
console.log(Math.floor(3.45));
console.log(Math.random()); //gives random value between 0-1 - *

console.log(Math.random()*10); //between 0-10


const rand = Math.round(Math.random()*10);
console.log(rand);