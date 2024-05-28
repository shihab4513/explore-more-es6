/*
maps==> loops through each element of the array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally returns you the array.
*/
const numbers = [4, 5, 2, 8, 10];
function doubleIt(num) {
    return num * 2;
}

const result = numbers.map(doubleIt);
console.log(result);
// we can do above with arrow function as well . Below an example given

const double2 = (n) => n * 2;

const output = numbers.map(double2);
console.log(output);
// We can further reduce this process.Below an example given
const output2 = numbers.map(n => n * 2);
console.log(output2);