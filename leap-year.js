/**
 * basic condition: leap-year if divisible by 4
 * above condition is true when a year is not divisible by 100
 * 
 * if divisible by 100, check if divisible by 400 too, then its a leap-year
 */

function isLeapYear(year){
    if(year%4 === 0 && year%100 !== 0){
        return true;
    }
    else if(year%100 === 0)
    {
        if(year%400 === 0)
        {
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return false;
    }
}
const isYear = isLeapYear(2024);
console.log(isYear);