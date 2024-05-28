/*
filters select an elements based on a condition and returns an array with the elements that fulfilled the condition.
*/
const numbers = [1, 5, 6, 4, 15];

const players = [75, 65, 67, 72, 55, 59, 40];
// const selected=players.filter(p=>p>70);
const selected = players.filter(p => p % 2 !== 0);
console.log(selected);
// Now we will print which friend have odd number char using filter and arrow function
const friends = ['Tom', 'dom', 'Shihab', 'Munther', 'shakil'];
const oddFrnd = friends.filter(p => p.length % 2 !== 0);
console.log(oddFrnd);