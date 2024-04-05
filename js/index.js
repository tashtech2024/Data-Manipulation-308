console.log('running script...');

// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;
console.log(`Numbers add up to 50? ${isSum50}`);

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log( `Are any numbers odd? ${isTwoOdd}`);

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
console.log(`Are any Numbers over 25? ${isOver25}`);

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
console.log(`Are all Numbers unique ? ${isUnique}`);

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;
console.log(`Are any numbers under 25? ${isValid}`);

// Finally, log the results.
console.log(`The four numbers are valid according to the provided criteria: ${isValid}.`)


// ********* Math Problems : Part 1 *****///

// Check if all numbers are divisible by 5. Cache the result in a variable.
const isdivisibleby5 = n1 % 5 === 0 && n2 % 5 === 0 && n3 % 5 === 0 && n4 % 5 === 0;
console.log(`Are all numbers divisible by 5? ${isdivisibleby5}`);

// Check if the first number is larger than the last. Cache the result in a variable.

const isFirstLargerThanLast = n1 > n4;
console.log(`Is the first number larger than the last? ${isFirstLargerThanLast}`);

// Accomplish the following arithmetic chain:
const result = ((n2 - n1) * n3) % n4;
console.log(`Result of the arithmetic chain ${result}`);

// Subtract the first number from the second number.
const Subtract = (n1 - n2);
console.log(`First number minus the second number ${Subtract}`);

// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
const isAnyOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
console.log(`Is any number over 25? ${isAnyOver25}`);

//********Part 2: Practical Math*******///////
// Let’s look at a more practical scenario.
// You are planning a cross-country road trip!
// The distance of the trip, in total, is 1,500 miles.
// Your car’s fuel efficiency is as follows:
// At 55 miles per hour, you get 30 miles per gallon.
// At 60 miles per hour, you get 28 miles per gallon.
// At 75 miles per hour, you get 23 miles per gallon.
// You have a fuel budget of $175.
// The average cost of fuel is $3 per gallon.

// Set up a program to answer the following questions:
const miles = 1500;
const fuel = 3;
const totalAmount = 175;
let milesperHour = 55;
let milesPergallon = 30;
let fuelNeeded;
// How many gallons of fuel will you need for the entire trip?
let gallonsPertrip = (miles / milesPergallon);
console.log(`Total Gallons of fuel needed ${gallonsPertrip}`);
// Will your budget be enough to cover the fuel expense?
let withinBudget = (fuel % gallonsPertrip);
console.log(`Is it within Budget? ${isValid}`);
// How long will the trip take, in hours?
let totaltriptime = (miles / milesperHour);
console.log(`"How long is trip in hours? "${totaltriptime}`);

// Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?


// Log the results of your calculations using string concatenation or template literals.



