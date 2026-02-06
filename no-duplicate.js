/**
 * remove elements which occurs multiple times in an array
 * []
 * 
 * concept:
 * take new array and push unique elements only 
 */

const array1 = ['abul', 'babul', 'cabul', 'babul', 'bulbul', 'kabul', 'abul', 'dabul', 'kabul'];
const array2 = [3, 6, 32, 6, 5, 7, 89, 90, 67, 32, 5];

function noDuplicate(array){

    const uniqueArray = []; 

    console.log(array);
    for(item of array){
        if(uniqueArray.includes(item) === false){
            uniqueArray.push(item);
        }
    }
    return uniqueArray;
}

const noDupArray = noDuplicate(array1);
console.log(noDupArray);