/**
 * function takes an array as parameter
 * returns the average of odd numbers in the array
 * avg = sum of numbers / total numbers
 */


//solution -1 - my logic
function arr(array) {

    let count = 0;
    let sumOfOdd = 0;
    //individual elements
    for (num of array) {
        if (num % 2 !== 0) { //isOdd
            count++;
            sumOfOdd += num;
        }
    }

    const avg = sumOfOdd / count;
    return avg;
}

const result = arr([2, 4, 3, 5, 9, 7, 10]);
console.log(result);



//solution - 2 - as per module 
//take a new array and put odd elements in it 
function oddAverage(numbers) {
    let oddArray = [];
    for (number of numbers) {
        if (number % 2 !== 0) {
            // console.log(number);
            oddArray.push(number); //odd number array
        }
    }

    console.log(oddArray); // got array of odd numbers 

    const len = oddArray.length;
    // console.log(len);  //4

    //avg of odd numbers 
    let sum = 0;
    for (num of oddArray) {
        sum += num;
    }

    const avg = sum / len;
    return avg;
}

const sumOfOddNum = oddAverage([2, 4, 3, 5, 9, 7, 10]);
console.log(sumOfOddNum);