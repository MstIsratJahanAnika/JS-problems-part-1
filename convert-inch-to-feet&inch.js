//inch to feet convert

function inchToFeet(inch){
    const feet = inch/12;

    return feet;
}
const feet = inchToFeet(66);
console.log('height is', feet,'feet', );

//feet and inch each 
function inchToFeet_2(inch){

    //feet part
    const feetFraction = inch/12;
    const feetNumber = parseInt(feetFraction);

    //inch part 
    const remaingInch = inch%12;

    const result = feetNumber + ' ft '+ remaingInch + ' inch ';
    return result;
}

const feet_2 = inchToFeet_2(74);
console.log('height is :',feet_2);