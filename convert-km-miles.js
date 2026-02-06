//km to miles
function kmToMiles(km){
    const miles = km*0.621371;

    return miles;
}

const result = kmToMiles(34);
console.log(result);

//miles to km 
function milesToKm(miles){
    const km = miles*1.609 ;

    return km;
}
const result2 = milesToKm(45);
console.log(result2);