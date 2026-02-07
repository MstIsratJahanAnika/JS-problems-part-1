const today = new Date(); // gives today's date 
console.log(today); //year-month-date

//pick a random date
const date = new Date('2026-08-12');
console.log(date);
console.log(date.getMonth()); // starts from 0 index 0-1st month, 1-2nd month
console.log(date.getDay()); //day of the week 0-sun, 1-mon, 2-tue, 3-wed. counts week-wise 0-6
console.log(date.getDate()); //exact date 


const specificDate = new Date('2091-01-21');

//changing the value
console.log(specificDate);
specificDate.setMonth(3); // pass as index - return as month number
console.log(specificDate);
console.log(specificDate.toLocaleString('en-GB'));

//to count difference

// const start = new Date("2026-08-12");
// const end = new Date("2026-08-20");

// const diff = end - start; // milliseconds
// console.log(diff);



//to use time-zone


// console.log("Bangladesh:", date.toLocaleString("en-US", { timeZone: "Asia/Dhaka" }));
// console.log("India:", date.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
// console.log("USA (New York):", date.toLocaleString("en-US", { timeZone: "America/New_York" }));
// console.log("UK (London):", date.toLocaleString("en-US", { timeZone: "Europe/London" }));
// console.log("Japan:", date.toLocaleString("en-US", { timeZone: "Asia/Tokyo" }));