/*
Reduce will take from all 4 element i.e map,filter,find,forEach and make a thing
*/
const numbers = [4, 5, 7, 1, 2, 66];
const total = numbers.reduce((previous, current) => previous + current, 0);
console.log(total);